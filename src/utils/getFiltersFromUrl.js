import { defaultParams } from "../store/filtersStore";

export const getFiltersFromUrl = () => {
  const parsedParams = {};
  const url = new URL(window.location.href);
  for (let key in defaultParams) {
    const value = defaultParams[key];
    parsedParams[key] = Array.isArray(value)
      ? url.searchParams.getAll(key)
      : url.searchParams.get(key) || "";
  }

  return {
    ...parsedParams,
  };
};
