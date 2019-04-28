
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const randomNumber = parseInt(Math.random() * 11);

for (let i = 1; i < numbersArray.length; i++)

    if (randomNumber === numbersArray[i]) {

        let numRemoved = numbersArray.splice(i, 1); //   the random number to be removed (one), the value is returned to numRemoved variable
        i--;                                        //   as it removes the item, the list gets smaller and therefore the i--
    }


console.log("Random number is"+" "+randomNumber); // the random number

console.log("Array after remove the item"+" "+numbersArray); // the leftover array
