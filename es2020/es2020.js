// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
//ANSWER: The negative of the MAX_SAFE_INTEGER?

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n
//ANSWER: 3 and 4 are of type int whereas 1n is of type bigint. We can fix it by making 3 and 4, 3n and 4n


// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

//ANSWER:
if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard){
    console.log('fight!')
}
else console.log('walk away...')

// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') // false CUZ ?? nullish coalescing operator resorts to second option if null or undefined
console.log(null ?? 'hellooo') // hellooo
console.log(null || 'hellooo') // null CUZ || operator resorts to second option if first is false
//ANSWER ^ hellooo. Apparently || thinks null is false I think...
console.log((false || null) ?? 'hellooo') // false CUZ parenthesis becomes false, and ?? doesn't care about false
//ANSWER ^ hellooo. The parenthesis results to null ofccc, cuz || doesn't like false specifically. then ?? doesn't like null
console.log(null ?? (false || 'hellooo')) // hellooo CUZ parenthesis becomes hellooo and ?? becomes hellooo since it doesn't like null and undefined