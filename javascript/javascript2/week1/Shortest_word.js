let danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestWord(arr){

    return arr.reduce(function(wordBefore, wordAfter){
        if (wordAfter.length < wordBefore.length){
            return wordAfter;
        }
            else {
                return wordBefore;
            } 
        }
       
    
     
    )

}
console.log (shortestWord(danishWords));