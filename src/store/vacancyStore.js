import { create } from 'zustand'
import { groupResultVacancyByDate, parseResultVacancy, schemeResultVacancy } from '../utils/parse-vacancy';

const defQuery='frontend';
const defPerPage='100';
const defOnlyWithSalary='true';
const defSort = 'publication_time';

export const useVacancyStore = create((set) => ({
  list: [],
  loading: false,
  error: '',
  fetch: async (city='', today=false) => {
    
    try {
      set({loading: true});
      
      const response = await fetch(`https://api.hh.ru/vacancies/?text=${defQuery}${city}&only_with_salary=${defOnlyWithSalary}&per_page=${defPerPage}&order_by=${defSort}`);

      if (!response.ok) throw new Error('Что-то пошло не так. Попробуйте позже');

      const result = await response.json();
      const res = parseResultVacancy(
        schemeResultVacancy(result.items)
      );
      
      const group = groupResultVacancyByDate(res);
      set({list: today? [group[0]]:group});

    } catch (e) { 

      if(e.name === 'TypeError') {
        set({error: 'Ошибка в запросе'});
      } else {
        set({error: e.message});
      }

    } finally {
      set({loading: false});
    }
  }
}));

