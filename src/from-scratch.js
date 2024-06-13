export const fetchHandler = async (url, options = {}) => {
  try {
    const fetchCall = await fetch(url, options)
    if (!response.ok) throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`)
    return [{}, null]
  } catch(error) {
    console.warn(error)
    return [null, error]
  }
};


