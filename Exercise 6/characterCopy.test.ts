// Test doubles
// - fakes
// - stubs
// - mocks

import { Copier, IDestination, ISource } from "./characterCopy"

describe("charater-copy", () => {
    describe("copy", () => {

        describe("no character before new line", () => {
            test("", () => {
                const stubReadChar = jest.fn()
                stubReadChar.mockReturnValue("\n")
                const source: ISource = {
                    readChar: stubReadChar
                }
                const mockWriteChar = jest.fn()
                const destination: IDestination = {
                    writeChar: mockWriteChar
                }
                const sut = new Copier(source, destination)
    
                sut.copy()
    
                expect(mockWriteChar).toHaveBeenCalledTimes(0)
            })
        })
        describe("one character before new line", () => {
            test.each([
                {char: "a"},
                {char: "z"},
                {char: "!"},
            ])("char: $char", ({char}) => {
                const stubReadChar = jest.fn()
                stubReadChar.mockReturnValue("\n")
                stubReadChar.mockReturnValueOnce(char)
                const source: ISource = {
                    readChar: stubReadChar
                }
                const mockWriteChar = jest.fn()
                const destination: IDestination = {
                    writeChar: mockWriteChar
                }
                const sut = new Copier(source, destination)
    
                sut.copy()
    
                expect(mockWriteChar).toHaveBeenCalledTimes(1)
                expect(mockWriteChar).toHaveBeenCalledWith(char)
            })
        })
        describe("two characters before new line", () => {
            test.each([
                {chars: ["a", "b"]},
                {chars: ["z", "4"]},
                {chars: ["!", "*"]},
            ])("chars: $chars", ({chars: chars}) => {
                const stubReadChar = jest.fn()
                stubReadChar.mockReturnValue("\n")
                chars.map(c => stubReadChar.mockReturnValueOnce(c))
                const source: ISource = {
                    readChar: stubReadChar
                }
                const mockWriteChar = jest.fn()
                const destination: IDestination = {
                    writeChar: mockWriteChar
                }
                const sut = new Copier(source, destination)
    
                sut.copy()
    
                expect(mockWriteChar).toHaveBeenCalledTimes(chars.length)
                chars.map(c => expect(mockWriteChar).toHaveBeenCalledWith(c))
            })
        })
        describe("multiple characters before new line", () => {
            test.each([
                {chars: ["a", "z", "!"]},
                {chars: ["b", "s", "@", "8"]},
                {chars: ["c", "1", "^", "1", "%", "4", "^"]},
            ])("chars: $chars", ({chars: chars}) => {
                const stubReadChar = jest.fn()
                stubReadChar.mockReturnValue("\n")
                chars.map(c => stubReadChar.mockReturnValueOnce(c))
                const source: ISource = {
                    readChar: stubReadChar
                }
                const mockWriteChar = jest.fn()
                const destination: IDestination = {
                    writeChar: mockWriteChar
                }
                const sut = new Copier(source, destination)
    
                sut.copy()
    
                expect(mockWriteChar).toHaveBeenCalledTimes(chars.length)
                chars.map(c => expect(mockWriteChar).toBeCalledWith(c))
            })
        })

        //TODO: test order of characters
        //TODO: chars after new line shout not be written
    })
})