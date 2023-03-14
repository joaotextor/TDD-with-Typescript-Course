//~ Natural numbers
//~ Divisble by 3: Fizz
//~ Divisible by 5: Buzz
//~ Divisible by 3 and 5: FizzBuzz
//~ Any other number: return the number as a string

import { fizzBuzz } from "./fizzbuzz"

describe("FizzBuzz", () => {
    describe("Fizz", () => {
        test.each([
            {input: 3},
            {input: 6},
            {input: 669}
        ])("Number $input must return 'Fizz'", ({input}) => {
            const expected = "Fizz"
            const sut = fizzBuzz()

            const actual = sut.execute(input)

            expect(actual).toBe(expected)
        })
    })

    describe("Buzz", () => {
        test.each([
            {input: 5},
            {input: 55},
            {input: 1040}
        ])("Number $input must return Buzz", ({input}) => {
            const expected = "Buzz"
            const sut = fizzBuzz()

            const actual = sut.execute(input)

            expect(actual).toBe(expected)
        })
    })
    describe("FizzBuzz", () => {
        test.each([
            {input: 15},
            {input: 45},
            {input: 1050}
        ])("Number $input must return FizzBuzz", ({input}) => {
            const expected = "FizzBuzz"
            const sut = fizzBuzz()

            const actual = sut.execute(input)

            expect(actual).toBe(expected)
        })
    })

    describe("Number", () => {
        test.each([
            {input: 7, expected: "7"},
            {input: 49, expected: "49"},
            {input: 79, expected: "79"}
        ])("Number $input must return '$expected'", ({input, expected}) => {
            const sut = fizzBuzz()

            const actual = sut.execute(input)

            expect(actual).toBe(expected)
        })
    })
})