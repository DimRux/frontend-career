export const updateUrlWithFilters = (filters) => {
  const url = new URL(window.location.href.split("?")[0]);
  for (let key in filters) {
    const value = filters[key];
    if (value) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          url.searchParams.append(key, item);
        });
      } else {
        url.searchParams.append(key, value);
      }
    }
  }

  window.history.pushState(null, "", url.toString());
};
