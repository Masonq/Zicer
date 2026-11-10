import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./zicer.db")
SECRET = os.getenv("ZICER_SECRET", "dev-secret-change-me")
PUBLIC_URL = os.getenv("PUBLIC_URL", "http://localhost:8710")
TG_BOT_TOKEN = os.getenv("TG_BOT_TOKEN", "")
TG_BOT_NAME = os.getenv("TG_BOT_NAME", "")
LLM_API_KEY = os.getenv("LLM_API_KEY", "")
LLM_BASE_URL = os.getenv("LLM_BASE_URL", "https://api.openai.com/v1")
LLM_MODEL = os.getenv("LLM_MODEL", "gpt-4o-mini")
START_BANK = 10000.0
MAX_STAKE = 1000.0
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36"
