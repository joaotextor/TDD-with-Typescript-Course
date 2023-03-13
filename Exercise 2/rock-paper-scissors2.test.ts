import { rockPaperScissors, Move, Outcome } from "./rock-paper-scissors2"

//~ Same as before, but using test.each()

describe("rock, paper and scissors", () => {
    describe("play", () => {
        describe("player throws paper", () => {
            test.each([
                {playerMove: Move.Paper, opponentMove: Move.Scissors, expected: Outcome.PlayerLoses},
                {playerMove: Move.Paper, opponentMove: Move.Rock, expected: Outcome.PlayerWins},
                {playerMove: Move.Paper, opponentMove: Move.Paper, expected: Outcome.Tie}
            ])(`Opponent move: $opponentMove, Expected: $expected`, ({playerMove, opponentMove, expected}) => {
                const sut = rockPaperScissors()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
        })

        describe("player throws rock", () => {
            test.each([
                {playerMove: Move.Rock, opponentMove: Move.Scissors, expected: Outcome.PlayerWins},
                {playerMove: Move.Rock, opponentMove: Move.Rock, expected: Outcome.Tie},
                {playerMove: Move.Rock, opponentMove: Move.Paper, expected: Outcome.PlayerLoses}
            ])(`Opponent move: $opponentMove, Expected: $expected`, ({playerMove, opponentMove, expected}) => {
                const sut = rockPaperScissors()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
        })

        describe("player throws scissors", () => {
            test.each([
                {playerMove: Move.Scissors, opponentMove: Move.Scissors, expected: Outcome.Tie},
                {playerMove: Move.Scissors, opponentMove: Move.Rock, expected: Outcome.PlayerLoses},
                {playerMove: Move.Scissors, opponentMove: Move.Paper, expected: Outcome.PlayerWins}
            ])(`Opponent move: $opponentMove, Expected: $expected`, ({playerMove, opponentMove, expected}) => {
                const sut = rockPaperScissors()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
        })        
    })
})
