//~ Create a function that takes in string input and parses it to return the sum.
//~ Implement each requirement one at a time, doint TDD

//~ 1. Numbers separated by a comma
//~ 2. Numbers can also be separated by a new line character
//~ 3. Numbers separated by a custom delimiter (specified in the first line of the string)
//~ 4. Reject negative numbers (throw an exception if there are any)
//~ 5. Ignore numbers over 1000

export class StringCalculator {
    public clean(input: string): number[] | string {
        let output: number[] = []
        const ignoreNumbersOver = 1000
        
        if (!Number.parseInt(input.slice(0,1))) {
            output = input.split(input.slice(0,1)).slice(1).map(n => Number.parseInt(n)).filter(n => n <= ignoreNumbersOver)

            if (output.filter(n => n < 0).length > 0) return "Error: cannot have negative numbers"

            return output
        }

        output = input.split(/[\n,]/).map(n => Number.parseInt(n)).filter(n => n <= ignoreNumbersOver)

        if (output.filter(n => n < 0).length > 0) return "Error: cannot have negative numbers"

        return output
    }

    public sum(input: string): number {
        const numArr = this.clean(input)
        if (!Array.isArray(numArr)) {
            throw new Error("Cannot have negative numbers")
        }
        
        return numArr.reduce((acc, curr) => acc + curr)
    }
}