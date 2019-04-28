//Julia's house buying proposal. 

//This is the square area of the house (here represented as volume meters)
var wide=5;
console.log (wide);
var deep=11;
console.log (deep);
var high=8;
console.log (high);
var volumeInMeters=wide*deep*high;
console.log (volumeInMeters);       //asking price is 1,000,000, the true value is 1,121,000 (save 121,000)


//We plug this into the rest of the formula including the garden parameters

var gardenSizeInM2=70; 
console.log(gardenSizeInM2)
var housePrice=volumeInMeters*2.5*1000+gardenSizeInM2*300
console.log (housePrice)


//Peter's house buying proposal.

//house
var wide=8;
console.log (wide);
var deep=10;
console.log (deep);
var high=10;
console.log (high);
var volumeInMeters=wide*deep*high;
console.log (volumeInMeters);

//garden
var gardenSizeInM2=100; 
console.log(gardenSizeInM2)
var housePrice=volumeInMeters*2.5*1000+gardenSizeInM2*300
console.log (housePrice)    
var askingPrice=2500000
console.log(askingPrice);
var diffHouseValue=100
var diffHouseValue=housePrice-askingPrice;
console.log(diffHouseValue) //asking price is 2,500,000 but the true value is 2,030,000. This would mean they would be overpaying by 470,000 above the ture value.


//And this is the interactive method :)))

var wide=prompt("Please input the width of the house");
console.log (wide);
var deep=prompt ("Thanks! Now write the length of the house");
console.log (deep);
var high=prompt("How tall is the house?");
console.log (high);
var volumeInMeters=wide*deep*high;
alert("The volume of the house is " + volumeInMeters);
console.log (volumeInMeters);
var gardenSizeInM2=prompt("How many square meters is the garden?");
console.log(gardenSizeInM2)
var housePrice=volumeInMeters*2.5*1000+gardenSizeInM2*300
alert("The estimated value of the house is " + housePrice)
console.log (housePrice)    
var askingPrice=prompt("Now let's see if you are OVER-paying or saving with your new house! Please insert the asking price.")
console.log(askingPrice);
var diffHouseValue=100
var diffHouseValue=housePrice-askingPrice;
if (housePrice > askingPrice) {
    alert("You are saving " + diffHouseValue )
}
else {
    alert ("Sorry. It seems like you are overpaying by" + " " + diffHouseValue)
}


