


const seriesDurations = [

    {

        title: 'Game of thrones',

        days: 3,

        hours: 1,

        minutes: 0,

    },

    {

        title: 'Sopranos',

        days: 3,

        hours: 14,

        minutes: 0,

    },

    {

        title: 'The Wire',

        days: 2,

        hours: 12,

        minutes: 0,

    }

]
console.log (seriesDurationOfLife.length);

// Adding My favourite series//

function addSeries(title, days, hours, minutes) {

    let addNewSeries = { title, days, hours, minutes };

    seriesDurations.push(addNewSeries);

}

addSeries("Greys Anatomy", 9, 23, 21);

addSeries("Elementary", 14, 4, 5);

console.log(seriesDurations);


/*  Declaring global variables to "collect" the data from inside the function, since we will use that data in the console
    output so need to be accessable everywhere. Assigning value of "0" as an added guarantee that returned value is nubmber (not NaN)*/



let totalPercentSeries =0;
let timeSpentSeries = 0;
let percentPerSeries = 0;

function seriesDurationOfLife(avgLifeSpan)


{
    
    let lifeExpct = avgLifeSpan * 365 * 24 * 60; // least common denominator for both the series and the life expectancy is seconds, hence use formula to convert years (and series) to seconds

    for (let i = 0; i < seriesDurations.length; i++) {

        // breaking down the series to seconds

        let seriesInMins = ((seriesDurations[i].days * 24) * 60) + seriesDurations[i].hours * 60 + seriesDurations[i].minutes;

        // calculating percent from life expectancy

        seriesInPercent = (seriesInMins /lifeExpct) * 100 ;

        percentPerSeries = seriesInPercent.toFixed(3);

        console.log(seriesDurations[i].title + "  " + "took" + " " + percentPerSeries +" "+ "%"+" "+ "of my life");

        timeSpentSeries = timeSpentSeries + seriesInPercent;

        totalPercentSeries = timeSpentSeries.toFixed(3);

    }

    return totalPercentSeries;

}

let timePerSeries = seriesDurationOfLife(43);

console.log("So far I have spent a total of " + " "+timePerSeries + " " + "%" + " " + "of my life watching these " + timePerSeries.length + " series");



