from app import create_app
from app.models import db
import os

app = create_app()

@app.cli.command('init-demo')
def init_demo():
    """Инициализация демо-данных"""
    with app.app_context():
        db.create_all()
        
        # Импортируем здесь чтобы избежать циклических импортов
        from app.routes.api import init_demo_data
        init_demo_data()
        
    print('Demo data initialized!')

if __name__ == '__main__':
    app.run(debug=True)