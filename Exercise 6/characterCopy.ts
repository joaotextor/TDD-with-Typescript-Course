/*
TODO: Task: Write a Copier class with a copy() method on it. When the copy() method is called, the copier should read from a Source one character at a time and write this character to a Desfinafion. It should do this repeatedly until a newline ('\n') is encountered when reading, at which point it should stop, without writing the newline to the Destination.

~ Do the above withouf using "real" Source and Desfination implemenfafions — test doubles should be used for fhese.

*/

export interface ISource {
    readChar(): string
}

export interface IDestination {
    writeChar(char: string): void
}

export class Copier {
    constructor(
        private source: ISource,
        private destination: IDestination
    ) {}

    copy() {
        let char = this.source.readChar()
        while (char !== "\n") {
            this.destination.writeChar(char)
            char = this.source.readChar()
        }
    }
}