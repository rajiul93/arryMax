var studentMark =[34,44,55,6,67,89,87,90];
var max =studentMark[0];
for (i= 0; i<studentMark.length; i++){
    var element = studentMark[i];
    if ( element>max){
        max = element;
    }
}
console.log("Our max value is =",max);

var number = [ 22,90,32,44,54,33,66];
var max = [0];
for (i=0; i<number.length;i++){
    element = number[i];
    if (element>max){
        max=element;
    }
}
console.log(max)