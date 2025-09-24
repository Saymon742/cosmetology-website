import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import './CatalogPage.css';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories] = useState([
    { id: 'all', name: 'Всі товари' },
    { id: 'face', name: 'Догляд за обличчям' },
    { id: 'body', name: 'Догляд за тілом' },
    { id: 'hair', name: 'Догляд за волоссям' },
    { id: 'makeup', name: 'Декоративна косметика' },
    { id: 'perfume', name: 'Парфумерія' }
  ]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const mockProducts = [
      {
        id: 1, name: 'Омолоджуючий крем з гіалуроновою кислотою', 
        price: 2500, category: 'face', image: '💆‍♀️',
        description: 'Глибоке зволоження та розгладжування зморшок', 
        rating: 4.8, inStock: true
      },
      {
        id: 2, name: 'Вітамінна сироватка з вітаміном C', 
        price: 1800, category: 'face', image: '💧',
        description: 'Освітлення та сяйво шкіри', 
        rating: 4.6, inStock: true
      },
      {
        id: 3, name: 'Натуральна матова помада', 
        price: 1200, category: 'makeup', image: '💄',
        description: 'Стійке покриття на 12 годин', 
        rating: 4.9, inStock: true
      },
      {
        id: 4, name: 'Очищаючий гель для вмивання', 
        price: 800, category: 'face', image: '🧼',
        description: "М'яке очищення без сухості", 
        rating: 4.5, inStock: true
      },
      {
        id: 5, name: 'Нічний крем з ретинолом', 
        price: 3200, category: 'face', image: '🌙',
        description: 'Інтенсивне відновлення шкіри', 
        rating: 4.7, inStock: true
      },
      {
        id: 6, name: "Туш для вій об'ємна", 
        price: 950, category: 'makeup', image: '👁️',
        description: 'Ефект накладних вій', 
        rating: 4.8, inStock: true
      },
      {
        id: 7, name: 'Зволожуючий лосьйон для тіла', 
        price: 1500, category: 'body', image: '🛁',
        description: 'Ніжна текстура для щоденного догляду', 
        rating: 4.4, inStock: true
      },
      {
        id: 8, name: "Шампунь для об'єму волосся", 
        price: 1300, category: 'hair', image: '💇‍♀️',
        description: "Надає об'єм та блиск", 
        rating: 4.6, inStock: true
      }
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'name': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy, searchTerm]);

  return (
    <div className="catalog-page">
      <div className="container">
        <div className="catalog-header">
          <h1>Каталог товарів</h1>
          <p>Знайдіть ідеальні засоби для вашої краси</p>
        </div>

        <div className="catalog-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Пошук товарів..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="name">За назвою</option>
              <option value="price-asc">За ціною (зростання)</option>
              <option value="price-desc">За ціною (спадання)</option>
              <option value="rating">За рейтингом</option>
            </select>
          </div>
        </div>

        <div className="products-info">
          <span>Знайдено товарів: {filteredProducts.length}</span>
        </div>

        <div className="catalog-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <span className="product-emoji">{product.image}</span>
                <div className="product-rating">
                  ⭐ {product.rating}
                </div>
                {!product.inStock && (
                  <div className="out-of-stock">Немає в наявності</div>
                )}
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                
                <div className="product-footer">
                  <div className="price">{product.price} ₴</div>
                  <button 
                    className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                    onClick={() => product.inStock && addToCart(product)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'В кошик' : 'Немає в наявності'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <div className="no-products-icon">😔</div>
            <h3>Товари не знайдено</h3>
            <p>Спробуйте змінити параметри пошуку або вибрати іншу категорію</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;