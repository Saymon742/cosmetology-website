export const PRODUCT_CATEGORIES = [
  { id: 'face', name: 'Уход за лицом', icon: '💆‍♀️' },
  { id: 'serum', name: 'Сыворотки', icon: '💧' },
  { id: 'decorative', name: 'Декоративная', icon: '💄' },
  { id: 'cleaning', name: 'Очищение', icon: '🧼' },
  { id: 'body', name: 'Уход за телом', icon: '🛁' },
  { id: 'hair', name: 'Уход за волосами', icon: '💇‍♀️' },
  { id: 'perfume', name: 'Парфюмерия', icon: '🌸' },
  { id: 'men', name: 'Для мужчин', icon: '👨' }
];

export const SORT_OPTIONS = [
  { value: 'name', label: 'По названию' },
  { value: 'price-asc', label: 'По цене (возрастание)' },
  { value: 'price-desc', label: 'По цене (убывание)' },
  { value: 'rating', label: 'По рейтингу' },
  { value: 'newest', label: 'Сначала новые' }
];

export const DELIVERY_OPTIONS = [
  { id: 'courier', name: 'Курьерская доставка', price: 300, days: '1-2' },
  { id: 'pickup', name: 'Самовывоз', price: 0, days: '1' },
  { id: 'post', name: 'Почта России', price: 200, days: '5-10' }
];