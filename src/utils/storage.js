export const setToLs = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  } else {
    return null
  }
};

export const removeItemFromLS = (key) => {
  localStorage.removeItem(key);
}