

function matchClothesToWeather(temperature){
    var temperature=0;
    if ((temperature <=-20) && (temperature===0)){
        matchClothesToWeather="wooly coat, warm hat and gloves";
    }else if
        ((temperature >0) && (temperature <10)){
            matchClothesToWeather="jacket, sweater and boots";
        }else if((temperature >10) && (temperature<25)){
            matchClothesToWeather="jeans, shirt and sneackers";
        }else(temperature >25);{
            matchClothesToWeather=("shorts, t-shirt and sandals!")
        }
     return matchClothesToWeather;   
} 


const clothesToWear=matchClothesToWeather(18);
console.log (clothesToWear);

