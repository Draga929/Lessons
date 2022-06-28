function workDays(day) {
 let h_days = ['Saturday', 'Sunday']
 let w_days = ['Mondey', 'Tueday', 'Wednesday', 'Thursday', 'Friday']
 
 
  if (typeof day == "string") {
    if (w_days.includes(day)){
      return true
    } else if (h_days.includes(day)){
      return false
    } else {
      return false
    } 
  } else {  
    console.log("Error! Word nat a Day title")
    return false
    }
  
}
function check_hours(hour) {
  if (hour < 18 && hour >= 8) {
      return true
    } else if (hour >= 24 || hour <= 0) {
      return false
    }
}
let day = 'Tueday'
let hour = 14
if (workDays(day) && check_hours(hour)) {
  console.log("Open")
} else {
  console.log("Close")
}





// let test_day = "Satufzgdfgy"

// switch(test_day){
//   case "Saturday":
//     console.log("Cool! Saturday")
//     break;
//   case "Monday":
//     console.log("Cool! Monday")
//     break;
//   case "Sunday":
//       console.log("Cool! Sunday")
//       break;
//       default:
//         console.log("Defeult!!!")    

    
// }