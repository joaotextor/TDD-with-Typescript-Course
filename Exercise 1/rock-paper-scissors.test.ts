import { rockPaperScissors, Move, Outcome } from "./rock-paper-scissors"

describe("rock, paper and scissors", () => {
    describe("play", () => {
        describe("player 1 throws paper and player 2 throws scissors", () => {
            it("should return 'Player loses'", () => {
                const expected = Outcome.PlayerLoses
                const sut = rockPaperScissors()

                const actual = sut.play(Move.Paper, Move.Scissors)

                expect(actual).toBe(expected)
            })
        })
        describe("player 1 throws paper and player 2 throws rock", () => {
            it("should return 'Player wins'", () => {
                const expected = Outcome.PlayerWins
                const sut = rockPaperScissors()

                const actual = sut.play(Move.Paper, Move.Rock)

                expect(actual).toBe(expected)
            })
        })
        describe("players throw same move", () => {
            it("should return 'It was a tie'", () => {
                const expected = Outcome.Tie
                const sut = rockPaperScissors()

                const actual = sut.play(Move.Scissors, Move.Scissors)

                expect(actual).toBe(expected)
            })
        })
        describe("player 1 throws rock and player 2 throws paper", () => {
            it("should return 'Player loses'", () => {
                const expected = Outcome.PlayerLoses
                const sut = rockPaperScissors()

                const actual = sut.play(Move.Rock, Move.Paper)

                expect(actual).toBe(expected)
            })
        })

        describe("player 1 throws rock and player 2 throws scissors", () => {
            it("should return 'Player wins'", () => {
                const expected = Outcome.PlayerWins
                const sut = rockPaperScissors()

                const actual = sut.play(Move.Rock, Move.Scissors)

                expect(actual).toBe(expected)
            })
        })

        describe("player 1 throws scissors and player 2 throws paper", () => {
            it("should return 'Player wins'", () => {
                const expected = Outcome.PlayerWins
                const sut = rockPaperScissors()

                const actual = sut.play(Move.Scissors, Move.Paper)

                expect(actual).toBe(expected)
            })
        })

        describe("player 1 throws scissors and player 2 throws rock", () => {
            it("should return 'Player wins'", () => {
                const expected = Outcome.PlayerLoses
                const sut = rockPaperScissors()

                const actual = sut.play(Move.Scissors, Move.Rock)

                expect(actual).toBe(expected)
            })
        })
        
    })
})
