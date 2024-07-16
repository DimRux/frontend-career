import { create } from 'zustand';
import { CARD_FOR_PAGE_DETAIL } from '../constatns';
import { parseResultVacancy, schemeResultVacancy } from '../utils/parse-vacancy';
import { scrollTop } from '../utils/scrollTop';

export const useVacancyLocal = create((set) => ({
    isOpen: false,
    vacancy: null,
    loadingVacancy: false,
    vacanciesList: [],
    pageDetail: -1,
    maxPages: 0,
    error: '',
    getVacancyById: async (id) => {
      const res = await fetch(`https://api.hh.ru/vacancies/${id}`)
      const data = await res.json()
      set({ vacancy: data, isOpen: true })
      scrollTop()
    },
  
    close: () => { set({ isOpen: false, vacancy: null, vacanciesList: [], pageDetail: 0 }) },
    incPage: () => set((state) => ({ pageDetail: state.pageDetail + 1 })),
  
    fetchVacancies: async (id, page = 0) => {
  
      try {
        set({ loadingVacancy: true });
        const response = await fetch(`https://api.hh.ru/vacancies/${id}/similar_vacancies?order_by=publication_time&only_with_salary=true&per_page=${CARD_FOR_PAGE_DETAIL}&page=${page}`)
        if (!response.ok) throw new Error('Что-то пошло не так. Попробуйте позже');
  
        const result = await response.json();

        const res = parseResultVacancy(
          schemeResultVacancy(result.items)
        );
  
        set((state) => ({
          vacanciesList: [...state.vacanciesList, ...res],
          maxPages: result.pages
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