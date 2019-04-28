const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

//function for calculating the mean (average price of houses)

function mean(housePrices) {
    let total = 0;
    let i;
    for (i=0; i < housePrices.length; i++){
        total += housePrices[i];
    }
    return total / housePrices.length;
}

console.log ("The average price of houses is " + mean(housePrices));


// function for calculating the median (middle price of houses)

function median(housePrices){
    let median = 0;
    let priceCost = housePrices.length;
    housePrices.sort();

    if (
        priceCost % 2 === 0  // is even
    ){

        median = (housePrices[priceCost/2 - 1] + housePrices[priceCost / 2])/2; // average of two middle numbers
    } else {
        median = housePrices[(priceCost - 1) / 2];
    }
    return median;
}

console.log ("The middle price for houses is " + median(housePrices));





