// Test doubles
// - fakes
// - stubs
// - mocks

import { Copier, IDestination, ISource } from "./characterCopy"
describe("charater-copy", () => {
    describe("copy", () => {

        describe("no character before new line", () => {
            test("", () => {
                const source = createSource([])
                const destination = createDestination()
                const sut = createCopier(source, destination)
    
                sut.copy()
    
                expect(destination.writeChar).toHaveBeenCalledTimes(0)
            })
        })

        describe("one character before new line", () => {
            test.each([
                {char: "a"},
                {char: "z"},
                {char: "!"},
            ])("char: $char", ({char}) => {
                const source = createSource([char])
                const destination = createDestination()
                const sut = createCopier(source, destination)
    
                sut.copy()
    
                expect(destination.writeChar).toHaveBeenCalledWith(char)
            })
        })
        describe("two characters before new line", () => {
            test.each([
                {chars: ["a", "b"]},
                {chars: ["z", "4"]},
                {chars: ["!", "*"]},
            ])("chars: $chars", ({chars: chars}) => {
                const source = createSource(chars)
                const destination = createDestination()
                const sut = createCopier(source, destination)
    
                sut.copy()
    
                chars.map(c => expect(destination.writeChar).toHaveBeenCalledWith(c))
            })
        })
        describe("multiple characters before new line", () => {
            test.each([
                {chars: ["a", "z", "!"]},
                {chars: ["b", "s", "@", "8"]},
                {chars: ["c", "1", "^", "1", "%", "4", "^"]},
            ])("chars: $chars", ({chars: chars}) => {
                const source = createSource(chars)
                const destination = createDestination()
                const sut = createCopier(source, destination)
    
                sut.copy()
    
                expect(destination.getWrittenChars()).toStrictEqual(chars)
            })
        })
        describe("characters after new line are not written", () => {
            test.each([
                {chars: ["a", "b", "b", "\n", "a", "b"], result: ["a", "b", "b"]},
            ])("chars: $chars | result: $result", ({chars: chars, result: expected}) => {
                const source = createSource(chars)
                const destination = createDestination()
                const sut = createCopier(source, destination)
    
                sut.copy()
    
                expect(destination.getWrittenChars()).toStrictEqual(expected)
            })
        })
    })
})

function createSource(chars: string[]): ISource {
    const stubReadChar = jest.fn()
    stubReadChar.mockReturnValue("\n")
    chars.map(c => stubReadChar.mockReturnValueOnce(c))
    return {
        readChar: stubReadChar
    }
}

function createDestination() {
    const writtenChars: string[] = []
    return {
        writeChar: jest.fn((c) => writtenChars.push(c)),
        getWrittenChars: () => writtenChars
    }
}

function createCopier(source: ISource, destination: IDestination): Copier {
    return new Copier(source, destination)
}