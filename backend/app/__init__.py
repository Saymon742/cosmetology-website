from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_jwt_auth import AuthJWT
from pydantic import BaseModel
from app.database import Base, engine
from app.routes import api

# JWT конфигурация через Pydantic
class AuthSettings(BaseModel):
    authjwt_secret_key: str = "supersecret"  # вынеси в .env
    authjwt_algorithm: str = "HS256"

@AuthJWT.load_config
def get_config():
    return AuthSettings()

def create_app() -> FastAPI:
    app = FastAPI(title="Cosmetics API")

    # Подключаем CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # или ["http://localhost:3000"] для фронтенда
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Создаём таблицы
    Base.metadata.create_all(bind=engine)

    # Подключаем роуты
    app.include_router(api.router, prefix="/api")

    return app
