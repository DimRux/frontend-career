import { create } from "zustand";
import { deepEqual } from "../utils/deepEqual";
import { getFiltersFromUrl } from "../utils/getFiltersFromUrl";

export const defaultParams = {
  city: [],
  employment: [],
  period: "",
  experience: "",
  schedule: [],
  stack: [],
  education: [],
  salary: "",
  only_with_salary: [],
  part_time: [],
  label: [],
};

export const useFiltersStore = create((set, get) => ({
  params: {
    ...defaultParams,
    ...getFiltersFromUrl(),
  },
  set: (field, value) => {
    const newParams = { ...get().params };

    // let fieldValue = newParams[field];

    if (Array.isArray(newParams[field])) {
      const foundedValue = newParams[field].some((item) => item === value);
      foundedValue
        ? (newParams[field] = newParams[field].filter((item) => item !== value))
        : newParams[field].push(value);
    } else {
      newParams[field] = value;
    }

    set({
      params: {
        ...newParams,
      },
    });
  },
  isChecked: (field, value) => {
    const fieldValue = get().params[field];
    return Array.isArray(fieldValue)
      ? fieldValue.some((item) => item === value)
      : fieldValue === value;
  },
  reset: () => {
    set({
      params: {
        city: [],
        employment: [],
        period: "",
        experience: "",
        schedule: [],
        stack: [],
        education: [],
        salary: "",
        only_with_salary: [],
        part_time: [],
        label: [],
      },
    });
  },
  isChanged: () => !deepEqual(get().params, defaultParams),
}));
