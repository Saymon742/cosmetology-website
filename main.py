from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
import os

app = FastAPI(title="Cosmetics Shop")

app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

# Пример данных товаров
sample_products = [
    {"id": 1, "name": "Увлажняющий крем", "price": 450, "category": "Уход за лицом", "brand": "L'Oreal"},
    {"id": 2, "name": "Тонизирующая сыворотка", "price": 680, "category": "Сыворотки", "brand": "Vichy"},
    {"id": 3, "name": "Очищающий гель", "price": 320, "category": "Очищение", "brand": "La Roche-Posay"},
    {"id": 4, "name": "Питательная маска", "price": 550, "category": "Маски", "brand": "Caudalie"},
    {"id": 5, "name": "Восстанавливающий крем", "price": 720, "category": "Уход за лицом", "brand": "Avene"},
    {"id": 6, "name": "Омолаживающая сыворотка", "price": 890, "category": "Сыворотки", "brand": "Vichy"},
]

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {
        "request": request, 
        "products": sample_products[:3]
    })

@app.get("/catalog", response_class=HTMLResponse)
async def catalog(request: Request, category: str = None, brand: str = None):
    filtered_products = sample_products
    
    if category and category != "Все категории":
        filtered_products = [p for p in filtered_products if p["category"] == category]
    if brand and brand != "Все бренды":
        filtered_products = [p for p in filtered_products if p["brand"] == brand]
    
    categories = ["Все категории"] + list(set(p["category"] for p in sample_products))
    brands = ["Все бренды"] + list(set(p["brand"] for p in sample_products))
    
    return templates.TemplateResponse("catalog.html", {
        "request": request, 
        "products": filtered_products,
        "categories": categories,
        "brands": brands
    })

@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})

@app.get("/cart", response_class=HTMLResponse)
async def cart(request: Request):
    return templates.TemplateResponse("cart.html", {"request": request})

@app.get("/settings", response_class=HTMLResponse)
async def settings(request: Request):
    return templates.TemplateResponse("settings.html", {"request": request})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)