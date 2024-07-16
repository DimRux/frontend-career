import { useEffect } from "react"
import { useVacancyLocal, useVacancyHidden  } from "../../store/"
import Icon from "../icon/Icon"
import styles from './vacancyPage.module.css'
import { formatSalary, parseResultVacancy } from "../../utils/parse-vacancy"
import { scrollTop } from "../../utils/scrollTop"
import { VacancyMore } from "./VacancyMore"
import { VacancyDetail } from "./VacancyDetail"

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
        if (isOpen && pageDetail >=0 ) {
            fetchVacancies(vacancy.id, pageDetail)
        }
    }, [pageDetail])

    if (!isOpen) return null
    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={close}>
                <Icon name='chevron2' /> К результату поиска
            </button>
            <VacancyDetail {...{vacancy, logoUrl, toggleHiddenVacancyHandler, salary, isHidden}}/>
            <VacancyMore {...{vacanciesList, incPage,loadingVacancy, pageDetail, maxPages}}/>
        </div>
    )
}