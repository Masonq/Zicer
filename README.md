# Zicer — liga prognoza (Srbija)

- `backend/` — FastAPI + PostgreSQL, воркер сбора данных (`python -m app.worker`)
- `frontend/` — React/Vite, собранный `frontend/dist` лежит в репозитории
- `deploy/install.sh` — установка и обновление на сервере, отчёт пишет в `reports/deploy.md`

Обновление на сервере автоматическое: таймер `zicer-autoupdate` раз в минуту забирает новый код из GitHub и запускает `deploy/install.sh`.
