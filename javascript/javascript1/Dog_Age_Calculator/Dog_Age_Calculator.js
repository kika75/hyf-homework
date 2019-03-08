var dogYearOfBirth = Number (prompt("What year was your dog born in"));
console.log (dogYearOfBirth + " Super.")
var dogYearOfFuture = Number (prompt("Type a year in the future to see your dog's age then!"))
console.log (dogYearOfFuture + "Thank you.")
var dogYear = dogYearOfFuture - dogYearOfBirth;
console.log (dogYear)
var shouldShowResultInDogYears = dogYear * 7;
alert("Your dog will be " + dogYear + " years old in " + dogYearOfFuture)||alert("Your dog will be " + shouldShowResultInDogYears + " dog-years old in " + dogYearOfFuture);
console.log("Your dog will be " + dogYear + " years old in " + dogYearOfFuture)||console.log("Your dog will be " + shouldShowResultInDogYears + " dog-years old in " + dogYearOfFuture);

