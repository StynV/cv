'use client'

import { useMemo, useState } from "react"
import styles from './index.module.scss'

enum StateEnum {
    GEEN_REACTIE = "Gesolliciteerd zonder reactie",
    AFWIJZING = "Gesolliciteerd maar afwijzing",
    AFWIJZING_NA_GESPREK = "Afwijzing na eerste gesprek",
    TWEEDE_GESPREK_AFWIJZING = "Afwijzing na technisch gesprek",
    INTERESSE_MAAR_GEEN_WERK = "Technisch gesprek goed bevonden, maar bedrijf heeft te weinig werk in React"
}

interface Company {
    id: number,
    name: string,
    state: StateEnum
}

const FormWithActions = () => {
    const [companies, setCompanies] = useState<Company[]>([])

    const formAction = async (formData: FormData) => {
        try {
            const nameEntry = formData.get("name")
            const stateEntry = formData.get("state")

            if (typeof nameEntry === "string" && typeof stateEntry === "string") {
                const companyLength = companies[companies.length - 1]
                const latestId = companyLength ? companyLength.id + 1 : 1
                const newCompany: Company = { id: latestId, name: nameEntry, state: stateEntry as StateEnum };

                setCompanies((prevItems) => [...prevItems, newCompany]);
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getState = (state: StateEnum) => {
        return useMemo(() => {
            return companies.filter(item => item.state === state).length
        }, [companies])
    }

    const companiesWithGEEN_REACTIE = getState(StateEnum.GEEN_REACTIE)
    const companiesWithAFWIJZING = getState(StateEnum.AFWIJZING)
    const companiesWithAFWIJZING_NA_GESPREK = getState(StateEnum.AFWIJZING_NA_GESPREK)
    const companiesWithTWEEDE_GESPREK_AFWIJZING = getState(StateEnum.TWEEDE_GESPREK_AFWIJZING)
    const companiesWithINTERESSE_MAAR_GEEN_WERK = getState(StateEnum.INTERESSE_MAAR_GEEN_WERK)

    return (
        <div className={styles.main}>
            <form action={formAction}>
                <label>
                    <p>Naam van het bedrijf:</p>
                    <input
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label>
                    <p>Status:</p>
                    <select
                        name="state"
                        required
                    >
                        {Object.entries(StateEnum).map(([key, value]) => (
                            <option key={key} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </label>
                
                <button type="submit">Update</button>
            </form>

            <p>Gesolliciteerd zonder reactie: {companiesWithGEEN_REACTIE}</p>
            <p>Gesolliciteerd maar afwijzing: {companiesWithAFWIJZING}</p>
            <p>Afwijzing na eerste gesprek: {companiesWithAFWIJZING_NA_GESPREK}</p>
            <p>Afwijzing na technisch gesprek: {companiesWithTWEEDE_GESPREK_AFWIJZING}</p>
            <p>Technisch gesprek goed bevonden, maar bedrijf heeft te weinig werk in React: {companiesWithINTERESSE_MAAR_GEEN_WERK}</p>

            <table>
                <tbody>
                    {companies.map((item, key) => {
                        return(
                            <tr key={key}>
                                <td className={styles.tableName}>{item.name}</td>
                                <td>{item.state}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FormWithActions