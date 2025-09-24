// Форматирование номера телефона
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }
  return phone;
};

// Форматирование рейтинга
export const formatRating = (rating) => {
  return rating.toFixed(1);
};

// Форматирование количества товаров
export const formatQuantity = (quantity, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    quantity % 100 > 4 && quantity % 100 < 20 
      ? 2 
      : cases[Math.min(quantity % 10, 5)]
  ];
};