export const fizzBuzz = {
    execute: function(num: number): string {
        if (num % 5 === 0 && num % 3 !== 0) {
            return "Buzz"
        }
        if (num % 3 === 0 && num % 5 !== 0) {
            return "Fizz"
        }
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz"
        }
        return `${num}`
    }
}