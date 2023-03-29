import { StringCalculator } from "./stringCalculator"

describe("String Calculator", () => {
    describe("Clean function", () => {
        describe("Should split numbers separated by a comma, returning an array", () => {
            test.each([
                {numbers: "1,2,3,4,5", result: [1,2,3,4,5]},
                {numbers: "901,902,903,904,905", result: [901,902,903,904,905]}
            ])("Input: $numbers | Result: $result" ,({numbers, result}) => {
                const sut = new StringCalculator()

                const actual = sut.clean(numbers)

                expect(actual).toStrictEqual(result)
            })
        })
        describe("Should split numbers separated by a new line character, returning an array", () => {
            test.each([
                {numbers: "1\n2\n3\n4\n5", result: [1,2,3,4,5]},
                {numbers: "901\n902\n903\n904\n905", result: [901,902,903,904,905]}
            ])("Input: $numbers | Result: $result" ,({numbers, result}) => {
                const sut = new StringCalculator()

                const actual = sut.clean(numbers)

                expect(actual).toStrictEqual(result)
            })
        })
        describe("Should split numbers separated by custom character, returning an array", () => {
            test.each([
                {numbers: ":1:2:3:4:5", result: [1,2,3,4,5]},
                {numbers: "-1-2-3-4-5", result: [1,2,3,4,5]},
                {numbers: "~1~2~3~4~5", result: [1,2,3,4,5]},
                {numbers: ":901:902:903:904:905", result: [901,902,903,904,905]}
            ])("Input: $numbers | Result: $result" ,({numbers, result}) => {
                const sut = new StringCalculator()

                const actual = sut.clean(numbers)

                expect(actual).toStrictEqual(result)
            })
        })
        describe("Should throw error if there's any negative number", () => {
            test.each([
                {numbers: "1,2,-3,4,5", result: "Error: cannot have negative numbers"}
            ])("Input: $numbers | Result: $result" ,({numbers, result}) => {
                const sut = new StringCalculator()

                const actual = sut.clean(numbers)

                expect(actual).toStrictEqual(result)
            })
        })
        describe("Should ignore numbers over 1000", () => {
            test.each([
                {numbers: "1,2,3,4,5, 1001", result: [1,2,3,4,5]},
                {numbers: "9001,1,2,3,4,5", result: [1,2,3,4,5]},
            ])("Input: $numbers | Result: $result" ,({numbers, result}) => {
                const sut = new StringCalculator()

                const actual = sut.clean(numbers)

                expect(actual).toStrictEqual(result)
            })
        })
        describe("Should sum the numbers", () => {
            test.each([
                {numbers: "1,2,3,4,5, 1001", result: 15},
                {numbers: "9001,1,2,3,4,5", result: 15},
                {numbers: ":1:2:3:4:5:1001", result: 15},
                {numbers: ":901:902:903:904:905", result: 4515},
            ])("Input: $numbers | Result: $result" ,({numbers, result}) => {
                const sut = new StringCalculator()

                const actual = sut.sum(numbers)

                expect(actual).toBe(result)
            })
        })
        describe("Should return error when sum negative numbers", () => {
            test.each([
                {numbers: ":-901:902:903:904:905", result: Error},
            ])("Input: $numbers | Result: $result" ,({numbers, result}) => {
                const sut = new StringCalculator()

                const actual = () => sut.sum(numbers)

                expect(actual).toThrow(result)
            })
        })
    })
})