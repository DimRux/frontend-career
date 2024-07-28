import { create } from "zustand";
import { CARD_FOR_PAGE } from "../constants";
import {
  groupResultVacancyByDate,
  parseResultVacancy,
  schemeResultVacancy,
} from "../utils/parse-vacancy";
import { scrollTop } from "../utils/scrollTop";

const defQuery = "frontend";
const defSort = "publication_time";

export const useVacancyStore = create((set) => ({
  list: [],
  page: 1,
  setPage: (newPage) => set({ page: newPage }),
  loading: false,
  totalCountPage: null,
  error: "",
  fetch: async (city = "", today = false, page, filters) => {
    try {
      set({ loading: true });

      const searchParams = new URLSearchParams();
      for (let key in filters) {
        const value = filters[key];
        if (value && key !== "stack") {
          if (Array.isArray(value)) {
            value.forEach((item) => {
              searchParams.append(key, item);
            });
          } else {
            searchParams.append(key, value);
          }
        }
      }

      if (filters.stack.length) {
        searchParams.append("query", filters.stack.join("+"));
      }
      searchParams.append("text", [defQuery, ...filters.stack].join(" "));

      searchParams.append("order_by", defSort);
      searchParams.append("per_page", CARD_FOR_PAGE);
      searchParams.append("page", `${page - 1 ?? 0}`);
      /* page - 1 тк HH ищет с 0 */

      const response = await fetch(
        `https://api.hh.ru/vacancies/?${searchParams.toString()}`
      );

      if (!response.ok)
        throw new Error("Что-то пошло не так. Попробуйте позже");

      const result = await response.json();

      const res = parseResultVacancy(schemeResultVacancy(result.items));

      const group = groupResultVacancyByDate(res);
      set({ totalCountPage: result.found });
      set({ list: today ? [group[0]] : group });
      scrollTop();
    } catch (e) {
      if (e.name === "TypeError") {
        set({ error: "Ошибка в запросе" });
      } else {
        set({ error: e.message });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
