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

//==========================================

export const useVacancyLocal = create((set) => ({
  isOpen: false,
  vacancy: null,
  loadingVacancy: false,
  vacanciesList: [],
  pageDetail: 0,
  maxPages: 0,
  error: '',
  getVacancyById: async (id) => {
    const res = await fetch(`https://api.hh.ru/vacancies/${id}`)
    const data = await res.json()
    set({ vacancy: data, isOpen: true })
    scrollTop()
  },

  close: () => { set({ isOpen: false, vacancy: null, vacanciesList: [], pageDetail: 0}) },
  incPage: () => set((state) => ({ pageDetail: state.pageDetail + 1 })),

  fetchVacancies: async (query, page = 0, city = 'москва') => {

    try {
      set({ loadingVacancy: true });

      const response = await fetch(`https://api.hh.ru/vacancies/?text=${query}${city}&only_with_salary=${defOnlyWithSalary}&order_by=${defSort}&per_page=${CARD_FOR_PAGE_DETAIL}&page=${page}`); /* page - 1 тк HH ищет с 0 */

      if (!response.ok) throw new Error('Что-то пошло не так. Попробуйте позже');

      const result = await response.json();

      set({ maxPages: result.pages });
      set((state) => ({
        vacanciesList: [...state.vacanciesList, ...parseResultVacancy(
          schemeResultVacancy(result.items)
        )]
      }))

    } catch (e) {

      if (e.name === 'TypeError') {
        set({ error: 'Ошибка в запросе' });
      } else {
        set({ error: e.message });
      }

    } finally {
      set({ loadingVacancy: false });
    }
  }

}))

export const useVacancyHidden = create((set)=> ({
  hiddenVacancy:[],
  addVacancy: (id) => set((state)=> ({hiddenVacancy: [...state.hiddenVacancy, id]})),
  removeVacancy: (id) => set((state)=> ({hiddenVacancy: state.hiddenVacancy.filter(el => el!==id)})),
  clearHiddenvacancy: ()=> set({hiddenVacancy: []})
}))

