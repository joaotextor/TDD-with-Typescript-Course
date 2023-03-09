export enum Move {
    Paper,
    Rock,
    Scissors,
}

export enum Outcome {
    PlayerWins = "Player wins",
    PlayerLoses = "Player loses",
    Tie = "It was a tie",
}

interface IRockPaperScissors {
    play(playerMove: Move, opponentMove: Move): Outcome
}

export function rockPaperScissors(): IRockPaperScissors {
    return {
        play(playerMove: Move, opponentMove: Move) {
            let outcome: Outcome

            if (playerMove === opponentMove) {
                outcome = Outcome.Tie
                return outcome
            }

            if (opponentMove === Move.Rock) {
                outcome =
                    playerMove === Move.Scissors
                        ? Outcome.PlayerLoses
                        : Outcome.PlayerWins
                return outcome
            }

            if (opponentMove === Move.Paper) {
                outcome =
                    playerMove === Move.Rock
                        ? Outcome.PlayerLoses
                        : Outcome.PlayerWins
                return outcome
            }

            if (opponentMove === Move.Scissors) {
                outcome =
                    playerMove === Move.Paper
                        ? Outcome.PlayerLoses
                        : Outcome.PlayerWins
                return outcome
            }

            outcome = Outcome.PlayerLoses
            return outcome
        },
    }
}
