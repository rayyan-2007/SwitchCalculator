let a=10;
let b = 0;
let operator = "/";

switch(operator){
    case "+":
        console.log(a+b);
        break;
        case "-":
            console.log(a-b);
            break;
            case"*":
            console.log(a*b);
            break;
            case"/":
            a !==0 && b!==0 ? console.log(a/b) : console.log("Division by zero is not allowed");
            break;
            default:
                console.log("Invalid operator");
}

