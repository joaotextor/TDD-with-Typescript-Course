interface IFindMyAge {
    birthDate: Date
    targetDate: Date
}

type age = number

export function findMyAge(props: IFindMyAge): age {
    const birthDate = props.birthDate
    const targetDate = props.targetDate
    const age = targetDate.getFullYear() - birthDate.getFullYear()
    if ((targetDate.getMonth() < birthDate.getMonth()) 
        || (targetDate.getMonth() === birthDate.getMonth() && targetDate.getDate() < birthDate.getDate())
    ) {
        return age - 1
    }
    return age
}