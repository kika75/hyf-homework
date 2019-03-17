var class07Students=[];
function addStudentToClass (studentName){
    var studentName;

    if (studentName === "Queen") {
        class07Students.push("Queen");
        return;

    } else if (class07Students.includes(studentName)){
        return;
    }
    else if(class07Students >6){
          return;
    }
    else {
        return class07Students.push(studentName); 

    }
}
function getNumberOfStudents(){
    return getNumberOfStudents.lenght;
}