import SkeletonVacancyList from '../vacancyList/SkeletonVacancyList'
import VacancyCard from '../vacancyList/vacancyBlock/vacancyCard/VacancyCard'
import styles from './vacancyPage.module.css'

export function VacancyMore({ vacanciesList, incPage, loadingVacancy, pageDetail, maxPages }) {
    if (vacanciesList.length === 0) return null;
    return (
        <section className={styles.vacancies}>
            <h2 className={styles.vacacy__title2}>Похожие вакансии</h2>
            <ul className={styles.vacancies__list}>
                {vacanciesList.map((card) => (
                    <VacancyCard card={card} key={card.id + card.name} />
                ))}
            </ul>
            {loadingVacancy && <SkeletonVacancyList length={6} title={false} />}
            {maxPages - 1 > pageDetail ?
                <button onClick={incPage} className={styles.vacancies__btn}>Показать еще</button>
                :
                null
            }
        </section>
    )
}