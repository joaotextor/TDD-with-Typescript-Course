//~ Natural numbers
//~ Divisble by 3: Fizz
//~ Divisible by 5: Buzz
//~ Divisible by 3 and 5: FizzBuzz
//~ Any other number: return the number as a string

import { fizzBuzz } from "./fizzbuzz"

describe("FizzBuzz", () => {
    describe("Fizz", () => {
        test("Given number is 3, return 'Fizz'", () => {
            const expected = "Fizz"
            const sut = fizzBuzz

            const actual = sut.execute(3)

            expect(actual).toBe(expected)
        })

        test("Given number is 669, return 'Fizz'", () => {
            const expected = "Fizz"
            const sut = fizzBuzz

            const actual = sut.execute(669)

            expect(actual).toBe(expected)
        })
    })

    describe("Buzz", () => {
        test("Given number is 5, return Buzz", () => {
            const expected = "Buzz"
            const sut = fizzBuzz

            const actual = sut.execute(5)

            expect(actual).toBe(expected)
        })
        test("Given number is 1040, return Buzz", () => {
            const expected = "Buzz"
            const sut = fizzBuzz

            const actual = sut.execute(1040)

            expect(actual).toBe(expected)
        })
    })
    describe("FizzBuzz", () => {
        test("Given number is 15, return FizzBuzz", () => {
            const expected = "FizzBuzz"
            const sut = fizzBuzz

            const actual = sut.execute(15)

            expect(actual).toBe(expected)
        })
        test("Given number is 60, return FizzBuzz", () => {
            const expected = "FizzBuzz"
            const sut = fizzBuzz

            const actual = sut.execute(60)

            expect(actual).toBe(expected)
        })
    })

    describe("Number", () => {
        test("Given number is 7, should return '7'", () => {
            const expected = "7"
            const sut = fizzBuzz

            const actual = sut.execute(7)

            expect(actual).toBe(expected)

        })
        test("Given number is 49, should return '49'", () => {
            const expected = "49"
            const sut = fizzBuzz

            const actual = sut.execute(49)

            expect(actual).toBe(expected)

        })
    })
})