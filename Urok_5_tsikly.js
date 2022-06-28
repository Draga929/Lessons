// Циклы бесконечный
// while (true) {
//     console.log('Hello !!!')
// }
// Циклы с условиями
// let count = 0
// let count_stop = 10
// console.log("Before", count)
// while (count <= count_stop) {
//     console.log('Hello!!!=', count )
//     count += 2
// }
// console.log("After", count)
// Цикл FOR с инкрементом
// for (let count =0; count < 10; count++) {
//     console.log("Count = ", count)
// }
// Цикл FOR с дескриментом
// for (let count = 10; count != 0; count -= 1) {
//     console.log("Count = ", count)
// }
// Вывод четных чисел до 10
// let count_stop = 10
// let count = 0

// for (count; count <= 10; count += 1) {
//     if (count % 2 == 0) {
//             console.log("Count = ", count)
//     }
// }
// console.log("Count_stop =", count)
// Вывод нечетных чисел до 10
// let count_stop = 10
// let count = 0

// for (count; count <= 10; count += 1) {
//     if (count % 2 != 0) {
//             console.log("Count = ", count)
//     }
// }
// console.log("Count_stop =", count)
// Массивы
// let count_stop = 10
// let count = 0
// let names = ["Kate",
//              "Alex",
//              "Ivan",
//              "Ignat",
//              "Andrey",
//              "Vika"]

// for (let item in names) {

//     console.log("name =", names[item], item)
// }
// Массив без индекса in
// let count_stop = 10
// let count = 0
// let names = ["Kate",
//              "Alex",
//              "Ivan",
//              "Ignat",
//              "Andrey",
//              "Vika"]

// for (let item of names) {

//     console.log("name =", item)
// }
// Массив и вытянуть обьект
// let count_stop = 10
// let count = 0
// let names = ["Kate",
//              "Alex",
//              "Ivan",
//              "Ignat",
//              "Andrey",
//              "Vika"]
// let obj1 = {
//     "n1": "Kate",
//     "n2": "Alex",
//     "n3": "Ivan",
//     "n4": "Ignat",
//     "n5": "Andrey",
//     "n6": "Vika",

// }

// for (let item in obj1) {

//     console.log("name =", obj1[item])
// }
// Массив выводим только Игната
// let count_stop = 10
// let count = 0
// let names = ["Kate",
//              "Alex",
//              "Ivan",
//              "Ignat",
//              "Andrey",
//              "Vika"]
// let obj1 = {
//     "n1": "Kate",
//     "n2": "Alex",
//     "n3": "Ivan",
//     "n4": "Ignat",
//     "n5": "Andrey",
//     "n6": "Vika",

// }

// for (let item in obj1) {
//     if (obj1[item] == "Ignat") {
//         console.log("name =", obj1[item])
//     }
// }
// или 
let count_stop = 10
let count = 0
let names = ["Kate",
             "Alex",
             "Ivan",
             "Ignat",
             "Andrey",
             "Vika"]
let obj1 = {
    "n1": "Kate",
    "n2": "Alex",
    "n3": "Ivan",
    "n4": "Ignat",
    "n5": "Andrey",
    "n6": "Vika",

}

for (let item in obj1) {
    if (item == "n4") {
        console.log("name =", obj1[item])
    }
}

