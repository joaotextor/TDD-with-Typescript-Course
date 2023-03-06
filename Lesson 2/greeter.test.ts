import { greeter } from "./greeter"

describe("greeter()", () => {
    describe("helloWorld", () => {
        it("should return 'Hello World!'", () => {
            // Arrange
            //---State, services, or SUT
            const expected = "Hello World!"
            const sut = greeter()

            // Act
            const actual = sut.helloWorld()

            //Assert
            expect(actual).toBe(expected)
        })
    })

    //using xdescribe will skip this describe

    describe("helloPerson", () => {
        describe("given name João", () => {
            //using it.only will only test this single test
            it("should return 'Hello João!'", () => {
                const expected = "Hello João!"
                const sut = greeter()

                const actual = sut.helloPerson("João")

                expect(actual).toBe(expected)
            })
        })

        describe("given empty name", () => {
            test("should return 'Hello !'", () => {
                const expected = "Hello !"
                const sut = greeter()

                const actual = sut.helloPerson("")

                expect(actual).toBe(expected)
            })
        })
    })
})
