export const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const getRandomArray = (arr, min, max) => {
  const sortedArray = arr.slice().sort(() => Math.random() - 0.5);
  const randomMax = getRandomNum(min, max);

  return sortedArray.slice(min, randomMax);
};

export const generateData = () => new Array(getRandomNum(5,15))
  .fill('')
  .map((elem, i) => ({
    id: i**2,
    type: [
      'Fruit',
      'Candy',
      'Vegetable'
    ][Math.floor(Math.random() * 3)],
    avatar: `https://i.picsum.photos/id/${getRandomNum(1, 100)}/200/200.jpg`,
    name: 'Product name',
    count: getRandomNum(1, 4),
    price: getRandomNum(100, 999),
  }));

export const getFullPrice = arr => arr.reduce((acc, { price, count }) => acc + (price * count) , 0);

export const getAllTypes = array => [...new Set(array.map(({ type }) => type))].sort();

export const replaceArrayItem = (array, newItem) => {
  const oldItemIndex = array.findIndex(({ id }) => id === newItem.id);

  return [...array.slice(0, oldItemIndex), newItem, ...array.slice(oldItemIndex + 1)];
};

export const changeItemCount = (allItems, itemId, itemCount) => {
  const oldItem = {
    ...allItems.find(({ id }) => id === itemId)
  };

  oldItem.count = itemCount;

  return replaceArrayItem(allItems, oldItem);
};

export const removeArrayItem = (allItems, itemId) => {
  const itemIndex = allItems.findIndex(({ id }) => id === itemId);

  if (itemIndex === -1) {
    return [];
  }

  return [...allItems.slice(0, itemIndex), ...allItems.slice(itemIndex + 1)];
}
