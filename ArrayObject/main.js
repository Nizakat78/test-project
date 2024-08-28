// // // // // // // // import { log } from "console"
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // // // // // import { log } from "console"
// // // // // // import { setTimeout } from "timers/promises"
// // // // // // // // let object = [ {
// // // // // // // //     name:"Nizakat Ali",
// // // // // // // //     Age: 25,
// // // // // // // //     Address: {
// // // // // // // //         postalcode: 11,
// // // // // // // //         age  :12,
// // // // // // // //         street: "flat1"
// // // // // // // //     }
// // // // // // // // }]
// // // // // // // // console.log(object[0].Address.street)
// // // // // // // function data1(happy){
// // // // // // //     console.log("Happy new year")
// // // // // // //     happy();
// // // // // // // }
// // // // // // // setTimeout(()=>{
// // // // // // // console.log("Happy Birth day")
// // // // // // // },4000)
// // // // // // // data1(happy)
// // // // // // // function data1(happy){
// // // // // // //     console.log("Happy new year");
// // // // // // //     happy();
// // // // // // // }
// // // // // // // setTimeout(() => {
// // // // // // //     console.log("Happy Birthday");
// // // // // // // }, 4000);
// // // // // // // data1(happy);
// // // // // // // function happy(){
// // // // // // //     setTimeout(() => {
// // // // // // //         console.log("Happy new years with friend")
// // // // // // //     }, 80000); setTimeout(()=>{
// // // // // // //         console.log("Happy new years with family")
// // // // // // //     }, 6000) 
// // // // // // //     setTimeout(() => {
// // // // // // //         happy()
// // // // // // //     }, 2000);
// // // // // // // }
// // // // // // // function  dataOne(Name: string, newOne:string, callback:(call)=> void) {
// // // // // // //    console.log("Hello ", "Hellllo")
// // // // // // //    callback("Hello")
// // // // // // // }
// // // // // // // function delayMessage(message: string, delay: number, callback: (msg: string) => void) {
// // // // // // //     setTimeout(() => {
// // // // // // //         console.log(message);
// // // // // // //         callback(message);
// // // // // // //     }, delay);
// // // // // // // }
// // // // // // // function finalCallback(message: string) {
// // // // // // //     console.log("Callback completed for message: " + message);
// // // // // // // }
// // // // // // // const message: string = "Hello, World!";
// // // // // // // delayMessage(message, 2000, finalCallback);
// // // // // // // function letResponse( message1: string, age: number, Callback1:(goodGirl: string)=>void ){
// // // // // // //     setTimeout(()=>{
// // // // // // //         console.log(message1)
// // // // // // //         Callback1(message1)
// // // // // // //     }, age);
// // // // // // // }
// // // // // // // function finalCallback1(message1: string){
// // // // // // //     console.log("Call backComleted for message 1"+ message1)
// // // // // // // }
// // // // // // // const message1 : string="Hello Typescript"
// // // // // // // letResponse(message1,2000, finalCallback1)
// // // // // // // function  kamranAli(testcode: number, Goli: number,  Golli:()=>void ){
// // // // // // //     setTimeout(()=>{
// // // // // // //          console.log(testcode+Goli)
// // // // // // //     }, 3000)
// // // // // // //     Golli()
// // // // // // // }
// // // // // // // function Golli(){
// // // // // // //     console.log('How are you')
// // // // // // // }
// // // // // // // kamranAli(1223,12312, Golli)
// // // // // // // setTimeout(() => {
// // // // // // //     console.log("Health")
// // // // // // // }, 7000);
// // // // // // function sum(a,b,callba1ck){
// // // // // //     console.log(a+b)
// // // // // //     callba1ck()
// // // // // // }
// // // // // // function classback (){
// // // // // //     console.log("Class back")
// // // // // // }
// // // // // // sum (12,34,classback)
// // // // // // setTimeout(()=>{
// // // // // //     console.log("Hello Word")
// // // // // // }, 10000)
// // // // // function ali(callback3):void{
// // // // //     setTimeout(()=>{
// // // // //         console.log("Hello Wolrd")
// // // // //     }, 3000
// // // // //     )
// // // // //     callback3()
// // // // // }
// // // // // function Ali(){
// // // // // }
// // // // let c =((a,b)=>++a+b++)
// // // // (1,2)
// // // // console.log(c)
// // // // let value: string="123"
// // // // // let num:number=<number> value;
// // // // // let num:number=value as number;
// // // // // let num:number=Number(value)
// // // // let num: number=parseInt(value)
// // // // console.log(value)
// // // enum Color2{Red= 1, Green= 2, White= 4}
// // // console.log(Color2.Red)
// // let sumvalue : any = "Hello Wolrd!"
// // let value:number=(sumvalue as string).length
// // 
// let num:0
// if(true){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
var mytuple = [123, "Hello"];
var Newtuple = __spreadArray(__spreadArray([], mytuple, true), [true], false);
console.log(Newtuple);
