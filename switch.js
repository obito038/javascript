// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break; //it breaks the control flow
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}



const mnth = "apr"

switch (mnth) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break; //it breaks the control flow
    case "apr":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}