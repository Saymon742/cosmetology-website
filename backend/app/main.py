from fastapi import FastAPI
from app.database import engine, Base
from app.routes import api
from app import create_app

app = create_app()

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Cosmetics API")

app.include_router(api.router, prefix="/api")