let marks = 98;
let bonusMarks = 1;
let grade;
let result;
let remarks;

if(marks>=90 && marks<=100){
    marks+=bonusMarks;
    grade="A";
    console.log("High Marks with bonus: " + marks);
    console.log("Grade: " + grade);
    result = marks<50 ? "Failed": "Passed";
    console.log("Result : " + result);
    switch(grade){
        case "A":
            remarks = "Excellent";
            console.log("Remarks: " + remarks);
            break;
    }
}
else if(marks>=70 && marks<=89){
    grade="B";
    console.log("Marks :" + marks);
    console.log("Grade: " + grade);
    result = marks<50 ? "failed" : "Passed";
    console.log("Result: " + result);
    console.log("Remarks: Good");

}
else if(marks>=50 && marks<=69){
    console.log("Marks: " + marks);
    grade="C";
    console.log("Grade: " + grade);
    result = marks<50 ? "Failed" : "Passed";
    console.log("Result: " + result);
    console.log("Remarks: Average");
}
else{
    console.log("Marks: " + marks);
    grade = "F";
    console.log("Grade: " + grade);
    result = marks<50 ? "Failed" : "Passed";
    console.log("Result: " + result);
    console.log("Remarks: Poor");
}

