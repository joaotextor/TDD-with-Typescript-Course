import { findMyAge } from "./findMyAge"

describe("findMyAge", () => {
    describe("Did you have birthday this year already?", () => {
        test.each([
            {birthDate: new Date("1990/03/28"), targetDate: new Date("2023/03/21"), age: 32},
            {birthDate: new Date("1990/01/28"), targetDate: new Date("2023/03/21"), age: 33},
            {birthDate: new Date("1992/12/21"), targetDate: new Date("2023/03/21"), age: 30},
            {birthDate: new Date("1992/02/21"), targetDate: new Date("2023/03/21"), age: 31},
            {birthDate: new Date("1992/03/21"), targetDate: new Date("2023/03/21"), age: 31},
        ])("birthDate $birthDate, targetDate $targetDate, age $age", ({birthDate,targetDate, age}) => {
            const sut = findMyAge

            const actual = sut({birthDate, targetDate})

            expect(actual).toBe(age)
        })
    })
})