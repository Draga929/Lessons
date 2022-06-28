// Пример с вызовом пустой функции
// let f1 = () => console.log("Hello f1");
// let fL1 =11;
// let fL2 = 22;
// let func1 = (fL1, fL2) => {console.log("Hello func1", fL1, fL2)}
// func1()
// Пример с подачей на вход переменных
// let f1 = () => console.log("Hello f1");
// let fL11 =11;
// let fL22 = 22;
// let func1 = (fL1, fL2) => {console.log("Hello func1", fL1, fL2)}
// func1(fL11, fL22)
// Пример с подачей на вход переменных и +
// let f1 = () => console.log("Hello f1");
// let fL11 =11;
// let fL22 = 22;
// let func1 = (fL1, fL2) => {console.log("Hello func1", fL1 + fL2)}
// func1(fL11, fL22)
// Запуск функции, и дать на выполнение два условия
// let f1 = () => console.log("Hello f1");
// let fL11 =11;
// let fL22 = 22;
// let func1 = (fL1, fL2) => {console.log("Hello func1", fL1 + fL2)}
// func1(fL11, fL22)
// let func2 = (fL11 > 10) ?
// (fL1, fL2) => {console.log("Hello func2 1", fL1 + fL2)}:
// (fL1, fL2) => {console.log("Hello func2 2", fL1 - fL2)};
// func2(fL11, fL22)
// Запуск функции, и дать на выполнение два условия
// let f1 = () => console.log("Hello f1");
// let fL11 =11;
// let fL22 = 22;
// let func1 = (fL1, fL2) => {console.log("Hello func1", fL1 + fL2)}
// func1(fL11, fL22)
// let func2 = (fL11 < 10) ?
// (fL1, fL2) => {console.log("Hello func2 1", fL1 + fL2)}:
// (fL1, fL2) => {console.log("Hello func2 2", fL1 - fL2)};
// func2(fL11, fL22)
// Прототипы фнкций
// let fL11 =11;
// let fL22 = 22;
// function Yolochka(){}

// Yolochka.prototype.method1 = function(){
//     console.log("method1 --------")
// }
// Yolochka.prototype.method2 = function(n1, n2){
//     console.log("method2", n1 + n2)
// }
// Yolochka.prototype.method3 = () => {
//     console.log("method3")
// }
// let forest = new Yolochka()
// forest.method1()
// forest.method2(fL11, fL22)
// forest.method3()