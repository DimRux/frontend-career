import { create } from 'zustand'
import { CARD_FOR_PAGE, CARD_FOR_PAGE_DETAIL } from '../constatns';
import { groupResultVacancyByDate, parseResultVacancy, schemeResultVacancy } from '../utils/parse-vacancy';
import { scrollTop } from '../utils/scrollTop';

const defQuery = 'frontend';
const defOnlyWithSalary = 'true';
const defSort = 'publication_time';

export const useVacancyStore = create((set) => ({
  list: [],
  page: 1,
  setPage: (newPage) => set({ page: newPage }),
  loading: false,
  totalCountPage: null,
  error: '',
  fetch: async (city = '', today = false, page) => {

    try {
      set({ loading: true });

      const response = await fetch(`https://api.hh.ru/vacancies/?text=${defQuery} ${city}&only_with_salary=${defOnlyWithSalary}&order_by=${defSort}&per_page=${CARD_FOR_PAGE}&page=${page - 1 ?? 0}`); /* page - 1 тк HH ищет с 0 */

      if (!response.ok) throw new Error('Что-то пошло не так. Попробуйте позже');

      const result = await response.json();

      const res = parseResultVacancy(
        schemeResultVacancy(result.items)
      );

      const group = groupResultVacancyByDate(res);
      set({ totalCountPage: result.found });
      set({ list: today ? [group[0]] : group });
      scrollTop();

    } catch (e) {

      if (e.name === 'TypeError') {
        set({ error: 'Ошибка в запросе' });
      } else {
        set({ error: e.message });
      }

    } finally {
      set({ loading: false });
    }
  }
}));






