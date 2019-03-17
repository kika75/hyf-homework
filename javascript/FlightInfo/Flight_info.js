function getFullname(firstname,surname, useFormalName){
    var fullname1=firstname;
    var fullname2=surname;
    var useFormalName="Lady";
    
    if(useFormalName){
        return (useFormalName + " " + fullname1 +" " +fullname2);
    } else {
        return (fullname1 + " " +       fullname2);
    }
    }
    
    console.log(userName2);