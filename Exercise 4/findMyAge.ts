interface IFindMyAge {
    birthDate: Date
    targetDate: Date
}

type age = number

export function findMyAge(props: IFindMyAge): age {
    const birthDate = props.birthDate
    const targetDate = props.targetDate
    const years = targetDate.getFullYear() - birthDate.getFullYear()
    let age = years
    if ((targetDate.getMonth() < birthDate.getMonth()) 
        || (targetDate.getMonth() === birthDate.getMonth() 
            && targetDate.getDate() < birthDate.getDate()
        )) {
        age = years - 1
    }
    return age
}