export const fetchHandler = async (url, options = {}) => {
  const fetchCall = await fetch(url, options)
  return [{}, null]
};


