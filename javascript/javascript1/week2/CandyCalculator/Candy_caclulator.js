/* the aim is to calculate how much (given price/weight) can we spend on candy from a randomly generated amount.
So the steps are building a function that does the calculation for the price. Pushing the prices into an array. Having another function calculate the
difference. 
*/

const spentOnCandy=[i]; // this is the array where the prices will be pushed to.
//this is the function that calculates the prices per type of candy and their weight.
function addCandy(candyType, weight){
    
    if (candyType==="sweet"){
        spentOnCandy.push(weight*0.5);
    }else if(candyType==="chocolate"){
        spentOnCandy.push(weight*0.7);
    }else if(candyType==="toffee"){
        spentOnCandy.push(weight*1.1);
    }else(candyType==="chewing-gum")
        spentOnCandy.push(weight*0.03);
}
   


function canBuyMoreCandy(){
var cashForCandy = Math.random()*100; //This is the random amount generated to be spent on candy.
var totalThusFar =0; //this will be changing according to input
    for (var i=0; i<spentOnCandy.length; i++){
        totalThusFar+=spentOnCandy[i]; // adding the prices
    }
    if (totalThusFar<cashForCandy){
        return "You can buy more. Please do!"
    }else{
        return "No more candies for you"
    }
}

addCandy("chocolate", 20);
console.log(canBuyMoreCandy());