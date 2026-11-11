import { Component } from 'react'
// One broken block must never take the whole page down: it just hides itself
export default class Safe extends Component {
  constructor(p) { super(p); this.state = { bad: false } }
  static getDerivedStateFromError() { return { bad: true } }
  componentDidCatch(e) { console.error('block failed:', e) }
  render() { return this.state.bad ? null : this.props.children }
}
