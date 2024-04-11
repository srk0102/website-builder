export const categorizeItems = (items) => {
  const categories = {};
  items.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  return categories;
};


export const countAndCategorizeItems = (cart) => {
  const countMap = {};
  cart.forEach((item) => {
    if (countMap[item.id]) {
      countMap[item.id].quantity++;
    } else {
      countMap[item.id] = { ...item, quantity: 1 };
    }
  });
  return Object.values(countMap);
};