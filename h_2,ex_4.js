//example 1

var number = 367;
var b=(number %10)*100+ (number/10);

if (number%10){
  console.log(parseInt(b));
} else {
  console.log(number)
};


//example 2

var number = 1002;
if (number%10){
  console.log (parseInt((number %10)*1000+ number/10));
} else {
  console.log(number)
};


//example 3

var number = 250;
if (number%10){
  console.log (parseInt((number %10)*100+ (number/10)));
} else {
  console.log(number)
};


//example 4

var number = 8;
if (number%10 && number>=10){
  console.log (parseInt((number %10)*100+ number/10));
} else {
  console.log(number)
};




