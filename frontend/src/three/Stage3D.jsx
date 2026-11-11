import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Broadcast-style 3D view (football: side camera, tennis: camera behind the baseline), like Sportradar LMT.
// The 2D engine keeps doing all the logic; every frame we read its ball / trail and draw them in 3D.

const TEX = {}
const loadTex = (url) => { if (!TEX[url]) { TEX[url] = new THREE.TextureLoader().load(url); TEX[url].colorSpace = THREE.SRGBColorSpace } return TEX[url] }

function pitchTexture() {
  // 105 x 68 m pitch + 6 m run-off, mowing stripes, crisp IFAB markings
  const S = 22, W = (105 + 12) * S, H = (68 + 12) * S, c = document.createElement('canvas')
  c.width = W; c.height = H
  const g = c.getContext('2d')
  g.fillStyle = '#2f7a35'; g.fillRect(0, 0, W, H)
  for (let i = 0; i < 18; i++) { g.fillStyle = i % 2 ? '#3a8b3e' : '#33803a'; g.fillRect((6 + i * 105 / 18) * S, 0, (105 / 18) * S + 1, H) }
  // subtle noise
  const img = g.getImageData(0, 0, W, H), d = img.data
  for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - 0.5) * 14; d[i] += n; d[i + 1] += n; d[i + 2] += n }
  g.putImageData(img, 0, 0)
  const X = (m) => (6 + m) * S, Y = (m) => (6 + m) * S
  g.strokeStyle = 'rgba(255,255,255,.92)'; g.lineWidth = 0.12 * S; g.lineCap = 'round'
  g.strokeRect(X(0), Y(0), 105 * S, 68 * S)
  g.beginPath(); g.moveTo(X(52.5), Y(0)); g.lineTo(X(52.5), Y(68)); g.stroke()
  g.beginPath(); g.arc(X(52.5), Y(34), 9.15 * S, 0, Math.PI * 2); g.stroke()
  g.fillStyle = '#fff'; g.beginPath(); g.arc(X(52.5), Y(34), 0.25 * S, 0, Math.PI * 2); g.fill()
  for (const s of [1, -1]) {
    const gx = s === 1 ? 0 : 105
    const box = (d, w) => g.strokeRect(s === 1 ? X(gx) : X(gx - d), Y(34 - w / 2), d * S, w * S)
    box(16.5, 40.32); box(5.5, 18.32)
    const ps = gx + s * 11
    g.beginPath(); g.arc(X(ps), Y(34), 0.25 * S, 0, Math.PI * 2); g.fill()
    const a = Math.acos(5.5 / 9.15)
    g.beginPath(); if (s === 1) g.arc(X(ps), Y(34), 9.15 * S, -a, a); else g.arc(X(ps), Y(34), 9.15 * S, Math.PI - a, Math.PI + a); g.stroke()
    for (const cy of [0, 68]) { g.beginPath(); g.arc(X(gx), Y(cy), 1 * S, cy === 0 ? (s === 1 ? 0 : Math.PI / 2) : (s === 1 ? -Math.PI / 2 : Math.PI), cy === 0 ? (s === 1 ? Math.PI / 2 : Math.PI) : (s === 1 ? 0 : Math.PI * 1.5)); g.stroke() }
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8
  return t
}

function tennisTexture() {
  // hard court 23.77 x 10.97 m + 6.4 m behind baselines, 3.66 m at the sides (ITF)
  const S = 72, L = 23.77, Wd = 10.97, mx = 6.4, my = 3.66, W = (L + 2 * mx) * S, H = (Wd + 2 * my) * S, c = document.createElement('canvas')
  c.width = W; c.height = H
  const g = c.getContext('2d')
  g.fillStyle = '#2f6d4f'; g.fillRect(0, 0, W, H)
  g.fillStyle = '#2b5e9b'; g.fillRect(mx * S, my * S, L * S, Wd * S)
  const img = g.getImageData(0, 0, W, H), d = img.data
  for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - 0.5) * 10; d[i] += n; d[i + 1] += n; d[i + 2] += n }
  g.putImageData(img, 0, 0)
  const X = (m) => (mx + m) * S, Y = (m) => (my + m) * S
  g.strokeStyle = '#fff'; g.lineWidth = 0.05 * S * 1.6
  g.strokeRect(X(0), Y(0), L * S, Wd * S)
  g.strokeRect(X(0), Y(1.37), L * S, (Wd - 2.74) * S)
  g.beginPath(); g.moveTo(X(L / 2 - 6.4), Y(1.37)); g.lineTo(X(L / 2 - 6.4), Y(Wd - 1.37)); g.moveTo(X(L / 2 + 6.4), Y(1.37)); g.lineTo(X(L / 2 + 6.4), Y(Wd - 1.37))
  g.moveTo(X(L / 2 - 6.4), Y(Wd / 2)); g.lineTo(X(L / 2 + 6.4), Y(Wd / 2))
  g.moveTo(X(0), Y(Wd / 2)); g.lineTo(X(0.15), Y(Wd / 2)); g.moveTo(X(L), Y(Wd / 2)); g.lineTo(X(L - 0.15), Y(Wd / 2)); g.stroke()
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8
  return t
}

function addStands(scene, len, wid, rows = 14) {
  const crowd = loadTex('/tex/crowd.webp'); crowd.wrapS = crowd.wrapT = THREE.RepeatWrapping
  const mat = new THREE.MeshStandardMaterial({ map: crowd, roughness: 1 })
  const conc = new THREE.MeshStandardMaterial({ color: 0x1a201e, roughness: 1 })
  const side = (lenM, dist, rotY) => {
    const grp = new THREE.Group()
    for (let r = 0; r < rows; r++) {
      // solid stepped tier: each row is a block from the ground up, the crowd sits on its front face and top
      const h = 0.9 * (r + 1)
      const tx = new THREE.TextureLoader().load('/tex/crowd.webp'); tx.colorSpace = THREE.SRGBColorSpace; tx.wrapS = tx.wrapT = THREE.RepeatWrapping
      tx.repeat.set(lenM / 60, 1 / 16); tx.offset.set(Math.random(), Math.floor(Math.random() * 16) / 16)
      const crowdMat = new THREE.MeshStandardMaterial({ map: tx, color: 0xb8b8b8, roughness: 1, emissive: 0xffffff, emissiveMap: tx, emissiveIntensity: 0.22 })
      const step = new THREE.Mesh(new THREE.BoxGeometry(lenM, h, 1.6), [conc, conc, crowdMat, conc, crowdMat, conc])
      step.position.set(0, h / 2, -(dist + r * 1.5))
      grp.add(step)
    }
    grp.rotation.y = rotY
    scene.add(grp)
  }
  side(len + 30, wid / 2 + 8, 0)
  side(len + 30, wid / 2 + 8, Math.PI)
  side(wid + 30, len / 2 + 8, Math.PI / 2)
  side(wid + 30, len / 2 + 8, -Math.PI / 2)
}

function addBoards(scene, len, wid, h = 0.9) {
  const tex = loadTex('/tex/boards.webp'); tex.wrapS = THREE.RepeatWrapping
  const mk = (l) => { const t = new THREE.TextureLoader().load('/tex/boards.webp'); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.repeat.set(l / 22, 1); return new THREE.MeshStandardMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 0.55, roughness: 0.6 }) }
  const far = new THREE.Mesh(new THREE.BoxGeometry(len + 6, h, 0.15), mk(len + 6)); far.position.set(0, h / 2, -(wid / 2 + 3)); scene.add(far)
  const l = new THREE.Mesh(new THREE.BoxGeometry(0.15, h, wid + 6), mk(wid + 6)); l.position.set(-(len / 2 + 3), h / 2, 0); scene.add(l)
  const r = l.clone(); r.position.x = len / 2 + 3; scene.add(r)
  return far
}

function addGoal(scene, x, dir) {
  const W = 7.32, H = 2.44, D = 2.0, R = 0.06
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
  const post = (px, pz, h) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(R, R, h, 12), white); m.position.set(px, h / 2, pz); m.castShadow = true; scene.add(m) }
  post(x, -W / 2, H); post(x, W / 2, H)
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(R, R, W, 12), white); bar.rotation.x = Math.PI / 2; bar.position.set(x, H, 0); bar.castShadow = true; scene.add(bar)
  // net: grid texture on the back, top and sides
  const nc = document.createElement('canvas'); nc.width = nc.height = 128
  const ng = nc.getContext('2d'); ng.strokeStyle = 'rgba(255,255,255,.75)'; ng.lineWidth = 2
  for (let i = 0; i <= 128; i += 16) { ng.beginPath(); ng.moveTo(i, 0); ng.lineTo(i, 128); ng.moveTo(0, i); ng.lineTo(128, i); ng.stroke() }
  const nt = new THREE.CanvasTexture(nc); nt.wrapS = nt.wrapT = THREE.RepeatWrapping
  const net = (w, h) => { const t = nt.clone(); t.needsUpdate = true; t.repeat.set(w * 4, h * 4); return new THREE.MeshBasicMaterial({ map: t, transparent: true, side: THREE.DoubleSide, depthWrite: false }) }
  const back = new THREE.Mesh(new THREE.PlaneGeometry(W, H), net(W, H)); back.rotation.y = Math.PI / 2; back.position.set(x + dir * D, H / 2, 0); scene.add(back)
  const top = new THREE.Mesh(new THREE.PlaneGeometry(D, W), net(D, W)); top.rotation.x = -Math.PI / 2; top.position.set(x + dir * D / 2, H, 0); scene.add(top)
  for (const z of [-W / 2, W / 2]) { const s = new THREE.Mesh(new THREE.PlaneGeometry(D, H), net(D, H)); s.position.set(x + dir * D / 2, H / 2, z); scene.add(s) }
}

function addFlags(scene, len, wid) {
  const pole = new THREE.MeshStandardMaterial({ color: 0xf2f2f2 }), red = new THREE.MeshStandardMaterial({ color: 0xe0322f, side: THREE.DoubleSide })
  for (const x of [-len / 2, len / 2]) for (const z of [-wid / 2, wid / 2]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.5, 8), pole); p.position.set(x, 0.75, z); scene.add(p)
    const f = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.32), red); f.position.set(x + 0.22, 1.32, z); scene.add(f)
  }
}

function addNetTennis(scene) {
  const W = 10.97 + 2 * 0.914, H = 1.07
  const nc = document.createElement('canvas'); nc.width = nc.height = 64
  const g = nc.getContext('2d'); g.strokeStyle = 'rgba(20,20,20,.85)'; g.lineWidth = 2
  for (let i = 0; i <= 64; i += 8) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 64); g.moveTo(0, i); g.lineTo(64, i); g.stroke() }
  const t = new THREE.CanvasTexture(nc); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(W * 4, H * 4)
  const net = new THREE.Mesh(new THREE.PlaneGeometry(W, 0.914), new THREE.MeshBasicMaterial({ map: t, transparent: true, side: THREE.DoubleSide, depthWrite: false }))
  net.rotation.y = Math.PI / 2; net.position.set(0, 0.914 / 2, 0); scene.add(net)
  const tape = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.07, W), new THREE.MeshStandardMaterial({ color: 0xffffff })); tape.position.set(0, 0.914, 0); scene.add(tape)
  const pm = new THREE.MeshStandardMaterial({ color: 0x1f4fa8, metalness: 0.3, roughness: 0.4 })
  for (const z of [-W / 2, W / 2]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, H, 12), pm); p.position.set(0, H / 2, z); p.castShadow = true; scene.add(p) }
}

export default function Stage3D({ sport, eng, att = null, level = 0 }) {
  const host = useRef(null)
  const live = useRef({ att, level })
  live.current = { att, level }
  useEffect(() => {
    const el = host.current
    if (!el) return
    let renderer
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false }) } catch { return }
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05
    el.appendChild(renderer.domElement)
    const ANISO = renderer.capabilities.getMaxAnisotropy()
    const sharpen = (o) => o.traverse((m) => { const mats = Array.isArray(m.material) ? m.material : m.material ? [m.material] : []; mats.forEach((mt) => ['map', 'emissiveMap'].forEach((k) => { if (mt[k]) { mt[k].anisotropy = ANISO; mt[k].needsUpdate = true } })) })
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0b1512)
    scene.fog = new THREE.Fog(0x0b1512, 260, 520)
    const football = sport !== 'tennis'
    const len = football ? 105 : 23.77, wid = football ? 68 : 10.97
    // ground with markings
    const pw = football ? len + 12 : len + 12.8, ph = football ? wid + 12 : wid + 7.32
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), new THREE.MeshStandardMaterial({ map: football ? pitchTexture() : tennisTexture(), roughness: 0.95 }))
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground)
    const apron = new THREE.Mesh(new THREE.PlaneGeometry(pw + 30, ph + 30), new THREE.MeshStandardMaterial({ color: football ? 0x1f4d2a : 0x24503a, roughness: 1 }))
    apron.rotation.x = -Math.PI / 2; apron.position.y = -0.02; apron.receiveShadow = true; scene.add(apron)
    addStands(scene, pw + 6, ph + 6, football ? 16 : 10)
    addBoards(scene, pw, ph, football ? 0.9 : 0.8)
    if (football) { addGoal(scene, -len / 2, -1); addGoal(scene, len / 2, 1); addFlags(scene, len, wid) } else addNetTennis(scene)
    // lights: soft sky + four floodlights
    scene.add(new THREE.HemisphereLight(0xdfeee6, 0x1b2a22, 1.0))
    const sun = new THREE.DirectionalLight(0xffffff, 1.6); sun.position.set(football ? -30 : -8, football ? 60 : 20, football ? 25 : 8); sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048); const sc = football ? 70 : 20
    Object.assign(sun.shadow.camera, { left: -sc, right: sc, top: sc, bottom: -sc, near: 1, far: 200 }); scene.add(sun)
    // attack zone: translucent band towards the goal
    const zoneMat = new THREE.MeshBasicMaterial({ color: 0x3d8ef0, transparent: true, opacity: 0, depthWrite: false })
    const zone = new THREE.Mesh(new THREE.PlaneGeometry(1, wid), zoneMat); zone.rotation.x = -Math.PI / 2; zone.position.y = 0.03; scene.add(zone)
    // ball: billboard sprite of our rendered ball + blob shadow
    const ballMap = loadTex(`/balls/${football ? 'football' : 'tennis'}.png`)
    const ball = new THREE.Sprite(new THREE.SpriteMaterial({ map: ballMap, depthTest: true }))
    const br = football ? 2.1 : 0.55 // a bit larger than life so it reads from the broadcast camera, like LMT
    ball.scale.set(br, br, 1); scene.add(ball)
    const sh = new THREE.Mesh(new THREE.CircleGeometry(br * 0.45, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }))
    sh.rotation.x = -Math.PI / 2; sh.position.y = 0.02; scene.add(sh)
    // trail
    const trailMat = new THREE.MeshBasicMaterial({ color: football ? 0xffffff : 0xf2d84a, transparent: true, opacity: 0.85 })
    let trail = null
    const hist = []
    let frame = 0
    // camera
    const cam = new THREE.PerspectiveCamera(football ? 33 : 40, 1, 0.5, 500)
    if (football) { cam.position.set(0, 62, 112); cam.lookAt(0, 0, -6) } else { cam.position.set(-25, 9.5, 0); cam.lookAt(3, 0, 0) }
    const toWorld = (xp, yp) => {
      // engine coordinates are % of the playing area (x along the length, y across)
      const x = (xp / 100 - 0.5) * len, z = (yp / 100 - 0.5) * wid
      return football ? new THREE.Vector3(x, 0, z) : new THREE.Vector3(x, 0, z)
    }
    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix()
    }
    sharpen(scene)
    setTimeout(() => sharpen(scene), 1500) // textures that finished loading later
    resize()
    const ro = new ResizeObserver(resize); ro.observe(el)
    let raf = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      const be = eng?.ballEl?.current
      if (be && be.style.left) {
        const p = toWorld(parseFloat(be.style.left), parseFloat(be.style.top))
        const m = /calc\(-50% - ([\d.]+)px\)/.exec(be.style.transform || '')
        const hop = m ? parseFloat(m[1]) / 24 : 0
        const hgt = (football ? 6 : 2.6) * hop + br / 2
        ball.position.set(p.x, hgt, p.z); sh.position.set(p.x, 0.02, p.z)
        sh.material.opacity = 0.35 - Math.min(0.25, hop * 0.2)
        ball.visible = sh.visible = be.style.opacity !== '0'
      }
      // trail = where the ball really flew in the last ~0.6 s (sampled from its 3D position), so it never jumps with the ball
      if (ball.visible) {
        const last = hist[hist.length - 1]
        if (!last || last.distanceTo(ball.position) > (football ? 0.15 : 0.04)) hist.push(ball.position.clone())
        if (hist.length > (football ? 14 : 40)) hist.shift()
        if (last && last.distanceTo(ball.position) > (football ? 18 : 6)) hist.splice(0, hist.length - 1) // teleport (new serve / restart): start over
      }
      if (++frame % 2 === 0) {
        if (trail) { scene.remove(trail); trail.geometry.dispose(); trail = null }
        if (hist.length >= 3) {
          const pts = hist.map((p) => new THREE.Vector3(p.x, football ? 0.1 : Math.max(0.03, p.y), p.z))
          trail = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 3, football ? 0.2 : 0.035, 6, false), trailMat)
          scene.add(trail)
        }
      }
      const { att: a, level: lv } = live.current
      if (a === null || a === undefined) zoneMat.opacity = Math.max(0, zoneMat.opacity - 0.03)
      else {
        const depth = [0.2, 0.32, 0.43][lv] * len
        zone.scale.x = depth; zone.position.x = a === 0 ? depth / 2 : -depth / 2
        zoneMat.color.set(lv === 2 ? 0xffa33a : a === 0 ? 0x3d8ef0 : 0x8bd12f)
        zoneMat.opacity += ((0.16 + lv * 0.07) - zoneMat.opacity) * 0.08
      }
      renderer.render(scene, cam)
    }
    tick()
    return () => { cancelAnimationFrame(raf); ro.disconnect(); renderer.dispose(); el.removeChild(renderer.domElement) }
  }, [sport]) // eslint-disable-line react-hooks/exhaustive-deps
  return <div ref={host} className="stage3d" aria-hidden="true" />
}
