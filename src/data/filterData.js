export const otherFiltersData = [
  {
    type: "dropdown",
    text: "Дата публикации вакансии",
    icon: "calendar",
    items: [
      {
        type: "radio",
        name: "period",
        value: "",
        text: "За все время",
      },
      {
        type: "radio",
        name: "period",
        value: "30",
        text: "За месяц",
      },
      {
        type: "radio",
        name: "period",
        value: "7",
        text: "За неделю",
      },
      {
        type: "radio",
        name: "period",
        value: "3",
        text: "За последние 3 дня",
      },
      {
        type: "radio",
        name: "period",
        value: "1",
        text: "За сутки",
      },
    ],
  },
  {
    type: "dropdown",
    text: "Опыт работы",
    icon: "star",
    items: [
      {
        type: "radio",
        name: "experience",
        value: "",
        text: "Не имеет значения",
      },
      {
        type: "radio",
        name: "experience",
        value: "noExperience",
        text: "Нет опыта",
      },
      {
        type: "radio",
        name: "experience",
        value: "between1And3",
        text: "От 1 года до 3 лет",
      },
      {
        type: "radio",
        name: "experience",
        value: "between3And6",
        text: "От 3 до 6 лет",
      },
      {
        type: "radio",
        name: "experience",
        value: "moreThan6",
        text: "Более 6 лет",
      },
    ],
  },
  {
    type: "dropdown",
    text: "График работы",
    icon: "clock",
    items: [
      {
        type: "checkbox",
        name: "schedule",
        value: "fullDay",
        text: "Полный день",
      },
      {
        type: "checkbox",
        name: "schedule",
        value: "flyInFlyOut",
        text: "Вахтовый метод",
      },
      {
        type: "checkbox",
        name: "schedule",
        value: "shift",
        text: "Сменный график",
      },
      {
        type: "checkbox",
        name: "schedule",
        value: "flexible",
        text: "Гибкий график",
      },
      {
        type: "checkbox",
        name: "schedule",
        value: "remote",
        text: "Удаленная работа",
      },
    ],
  },
  {
    type: "dropdown",
    text: "Теги технологий",
    icon: "stack",
    items: [
      {
        type: "checkbox",
        name: "stack",
        value: "jquery",
        text: "JQuery",
      },
      {
        type: "checkbox",
        name: "stack",
        value: "js",
        text: "JavaScript",
      },
      {
        type: "checkbox",
        name: "stack",
        value: "css3",
        text: "CSS3",
      },
      {
        type: "checkbox",
        name: "stack",
        value: "react",
        text: "React",
      },
      {
        type: "checkbox",
        name: "stack",
        value: "git",
        text: "Git",
      },
      {
        type: "checkbox",
        name: "stack",
        value: "vue",
        text: "Vue",
      },
      {
        type: "checkbox",
        name: "stack",
        value: "flexbox",
        text: "Flexbox",
      },
      {
        type: "checkbox",
        name: "stack",
        value: "html5",
        text: "HTML5",
      },
    ],
  },
  {
    type: "dropdown",
    text: "Образование",
    icon: "graduation",
    items: [
      {
        type: "checkbox",
        name: "education",
        value: "not_required_or_not_specified",
        text: "Не требуется или не указано",
      },
      {
        type: "checkbox",
        name: "education",
        value: "special_secondary",
        text: "Среднее профессиональное",
      },
      {
        type: "checkbox",
        name: "education",
        value: "higher",
        text: "Высшее",
      },
    ],
  },
  {
    type: "dropdown",
    text: "Уровень дохода",
    icon: "salary",
    items: [
      {
        type: "radio",
        name: "salary",
        value: "",
        text: "Не имеет значения",
      },
      {
        type: "radio",
        name: "salary",
        value: "25000",
        text: "от 25 000 ₽",
      },
      {
        type: "radio",
        name: "salary",
        value: "50000",
        text: "от 50 000 ₽",
      },
      {
        type: "radio",
        name: "salary",
        value: "100000",
        text: "от 100 000 ₽",
      },
      {
        type: "radio",
        name: "salary",
        value: "150000",
        text: "от 150 000 ₽",
      },
      {
        type: "checkbox",
        name: "only_with_salary",
        value: "true",
        text: "Указан доход",
      },
    ],
  },
  {
    type: "dropdown",
    text: "Подработка",
    icon: "tomeJob",
    items: [
      {
        type: "checkbox",
        name: "part_time",
        value: "employment_part",
        text: "Неполный день",
      },
      {
        type: "checkbox",
        name: "part_time",
        value: "from_four_to_six_hours_in_a_day",
        text: "От 4 часов в день",
      },
      {
        type: "checkbox",
        name: "part_time",
        value: "start_after_sixteen",
        text: "По вечерам",
      },
      {
        type: "checkbox",
        name: "part_time",
        value: "only_saturday_and_sunday",
        text: "По выходным",
      },
      {
        type: "checkbox",
        name: "part_time",
        value: "employment_project",
        text: "Разовое задание",
      },
    ],
  },
  {
    type: "dropdown",
    text: "Другие параметры",
    icon: "moreFilters",
    items: [
      {
        type: "checkbox",
        name: "label",
        value: "accept_handicapped",
        text: "Доступные людям с инвалидностью",
      },
      {
        type: "checkbox",
        name: "other-parameters",
        value: "hidden",
        text: "Скрытые вакансии",
      },
      {
        type: "checkbox",
        name: "part_time",
        value: "from_four_to_six_hours_in_a_day",
        text: "От 4х часов в день",
      },
      {
        type: "checkbox",
        name: "label",
        value: "accredited_it",
        text: "От аккредитованных ИТ компаний",
      },
      {
        type: "checkbox",
        name: "label",
        value: "not_from_agency",
        text: "Без вакансий от кадровых агенств",
      },
    ],
  },
];

export const briefCase = [
  {
    type: "checkbox",
    name: "employment",
    value: "full",
    text: "Полная занятость",
  },
  {
    type: "checkbox",
    name: "employment",
    value: "part",
    text: "Частичная занятость",
  },
  {
    type: "checkbox",
    name: "employment",
    value: "probation",
    text: "Стажировка",
  },
  {
    type: "checkbox",
    name: "employment",
    value: "project",
    text: "Проектная работа",
  },
];
