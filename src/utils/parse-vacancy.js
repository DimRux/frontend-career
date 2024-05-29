import { formatNumber } from "./format-number";

const currency = {
  RUR: '₽',
  EUR: '€',
  USD: '$'
};

export const parseResultVacancy = (arr=[]) => {
  //arr.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

  return arr.map((el)=>{
    let salary = '';

    if(el.salary.from && el.salary.to) {

      if(el.salary.from !== el.salary.to) {
        salary = [formatNumber(el.salary.from), `${formatNumber(el.salary.to)}`].join(' - ');
      } else {
        salary = formatNumber(el.salary.from);
      }
      
    } else if(el.salary.from) {
      salary = `от ${formatNumber(el.salary.from)}`;
    } else if(el.salary.to) {
      salary = `до ${formatNumber(el.salary.to)}`;
    }

    if(salary.length) {
      salary += currency[el.salary.currency] ? ' '+currency[el.salary.currency] : '';
    } else {
      salary = 'Доход не указан';
    }

    return {
      ...el,
      salaryFormat: salary
    };
  });
};

export const schemeResultVacancy = (arr=[]) => {
  return arr.map((el)=>{
    return {
      id: el.id,
      name: el.name,
      city: el.address? el.address.city : el.area.name,
      salary: el.salary? el.salary : null,
      published_at: el.published_at,
      experience: el.experience.name ? el.experience.name : '',
      company: el.employer? el.employer.name: '',
      url: el.alternate_url,
      employerUrl: el.employer? el.employer.alternate_url: ''
    };
  });
};

export const groupResultVacancyByDate = (arr=[]) => {
  const groups = arr.reduce((groups, el) => {
    const date = el.published_at.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(el);
    return groups;
  }, {});

  
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      items: groups[date]
    };
  });

  return groupArrays;
}