interface IFizzBuzz {
    execute(num: number): string
}

export function fizzBuzz(): IFizzBuzz {
    return {
        execute: function(num: number): string {
            // After refactoring

            if (num % 15 === 0) return "FizzBuzz" //If a number is divisible by 3 and 5, so it's also divisible by 15 (ie.: 15, 30, 45, 1050 etc)
            if (num % 5 === 0) return "Buzz"
            if (num % 3 === 0) return "Fizz"
            return num.toString()



            // Before refactoring
            // if (num % 5 === 0 && num % 3 !== 0) {
            //     return "Buzz"
            // }
            // if (num % 3 === 0 && num % 5 !== 0) {
            //     return "Fizz"
            // }
            // if (num % 3 === 0 && num % 5 === 0) {
            //     return "FizzBuzz"
            // }
            // return `${num}`
        }
    }
}