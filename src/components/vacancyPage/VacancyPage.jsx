import { useEffect } from "react"
import { useVacancyHidden, useVacancyLocal } from "../../store/vacancyStore"
import Icon from "../icon/Icon"
import styles from './vacancyPage.module.css'
import { formatSalary, parseResultVacancy } from "../../utils/parse-vacancy"
import { formatDate } from "../../utils/format-date"
import SkeletonVacancyList from "../vacancyList/SkeletonVacancyList"
import VacancyCard from "../vacancyList/vacancyBlock/vacancyCard/VacancyCard"
import { scrollTop } from "../../utils/scrollTop"

export function VacancyPage() {
    const {
        isOpen,
        vacancy,
        close,
        loadingVacancy,
        fetchVacancies,
        vacanciesList,
        pageDetail,
        maxPages,
        incPage
    } = useVacancyLocal()

    const { hiddenVacancy, removeVacancy, addVacancy } = useVacancyHidden()

    const isHidden = hiddenVacancy?.includes(vacancy?.id)

    const salary = vacancy && formatSalary(parseResultVacancy([vacancy])[0]?.salaryFormat)

    const logoUrl = vacancy?.employer.logo_urls?.original || null

    const toggleHiddenVacancyHandler = (id) => {
        if (hiddenVacancy.includes(id)) {
            removeVacancy(id)
        } else {
            addVacancy(id)
        }
    }

    useEffect(() => {
        if (isOpen) {
            scrollTop();
            incPage();
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            fetchVacancies(vacancy.name, pageDetail, 'москва')
        }
    }, [pageDetail])

    if (!isOpen) return null
    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={close}>
                <Icon name='chevron2' /> К результату поиска
            </button>
            <section className={styles.vacancy}>
                <div className={styles.vacancy__desc}>
                    <h1 className={styles.vacacy__title}>{vacancy.name}</h1>
                    <p className={styles.vacancy__salary}>{salary}</p>
                    <div className={`${styles.vacancy__needs} ${styles.needs}`}>
                        <h2 className={styles.needs__title}>Треборвания к вакансии</h2>
                        <ul className={styles.needs__list}>
                            <li>
                                <Icon name='star' />
                                {vacancy?.experience.name}
                            </li>
                            <li>
                                <Icon name='briefCase' />
                                {vacancy?.employment.name}
                            </li>
                            <li>
                                <Icon name='clock' />
                                {vacancy?.schedule.name}
                            </li>
                        </ul>
                    </div>
                    <button
                        className={styles.vacancy__btn}
                        onClick={() => { toggleHiddenVacancyHandler(vacancy?.id) }}
                    >
                        {isHidden ? <Icon name='eye' className={styles.slashEye} /> : <Icon name='slashEye' className={styles.slashEye} />}
                        {isHidden ? 'Показать' : 'Скрыть'}
                    </button>
                    <div>
                        <h2 className={styles.vacancy__title2}>Описание</h2>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: vacancy?.description }} />
                    </div>
                    <div className={styles.vacancy__skillsWrapper}>
                        <h3 className={styles.vacancy__title2}>Ключевые навыки</h3>
                        <ul className={styles.skills}>
                            {vacancy?.key_skills.map((el, index) => {
                                return (
                                    <li key={index}>
                                        {el.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <p className={styles.vacancy__footer}>
                        {vacancy?.published_at && `Вакансия опубликована ${formatDate(vacancy?.published_at)}  ${vacancy?.address?.city ? 'в г. ' + vacancy?.address?.city : ''}`}
                    </p>
                </div>
                <div className={styles.vacancy__owner}>
                    {logoUrl &&
                        <a href={vacancy.employer.alternate_url} target="_blank">
                            <img src={logoUrl} alt="логотип компании" />
                        </a>}
                    <h2>
                        {vacancy.employer.name}
                    </h2>
                    <p>
                        {vacancy.address?.raw}
                    </p>
                </div>
            </section>
            {vacanciesList.length > 0 &&
                <section className={styles.vacancies}>
                    <h2 className={styles.vacacy__title2}>Похожие вакансии</h2>
                    <ul className={styles.vacancies__list}>
                        {vacanciesList.map((card) => (
                            <VacancyCard card={card} key={card.id + card.name} />
                        ))}
                    </ul>
                    {loadingVacancy && <SkeletonVacancyList length={6} title={false} />}
                    {maxPages > pageDetail ?
                        <button onClick={incPage} className={styles.vacancies__btn}>Показать еще</button>
                        :
                        null
                    }
                </section>
            }
        </div>
    )
}