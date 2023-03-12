export enum Move {
    Paper = "paper",
    Rock = "rock",
    Scissors = "scissors",
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
    //~ After refactoring
    const scenarios = [
        {playerMove: Move.Paper, opponentMove: Move.Rock, outcome: Outcome.PlayerWins},
        {playerMove: Move.Paper, opponentMove: Move.Scissors, outcome: Outcome.PlayerLoses},
        {playerMove: Move.Rock, opponentMove: Move.Paper, outcome: Outcome.PlayerLoses},
        {playerMove: Move.Rock, opponentMove: Move.Scissors, outcome: Outcome.PlayerWins},
        {playerMove: Move.Scissors, opponentMove: Move.Paper, outcome: Outcome.PlayerWins},
        {playerMove: Move.Scissors, opponentMove: Move.Rock, outcome: Outcome.PlayerLoses},
    ]
    return {
        
        play(playerMove: Move, opponentMove: Move) {

            //~ After refactoring
            const result = scenarios.find(scenario => scenario.playerMove === playerMove && scenario.opponentMove === opponentMove)

            return (result) ? result.outcome : Outcome.Tie

            //~ Before refactoring
            // let outcome: Outcome
            // if (playerMove === opponentMove) {
            //     outcome = Outcome.Tie
            //     return outcome
            // }

            // if (opponentMove === Move.Rock) {
            //     outcome =
            //         playerMove === Move.Scissors
            //             ? Outcome.PlayerLoses
            //             : Outcome.PlayerWins
            //     return outcome
            // }

            // if (opponentMove === Move.Paper) {
            //     outcome =
            //         playerMove === Move.Rock
            //             ? Outcome.PlayerLoses
            //             : Outcome.PlayerWins
            //     return outcome
            // }

            // if (opponentMove === Move.Scissors) {
            //     outcome =
            //         playerMove === Move.Paper
            //             ? Outcome.PlayerLoses
            //             : Outcome.PlayerWins
            //     return outcome
            // }

            
        },
    }
}
