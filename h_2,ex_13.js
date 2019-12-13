var number = 152;
var a=parseInt(number/100);
var b=parseInt((number-a*100)/10);
var c=parseInt((number-a*100)-(b*10));

//console.log(a,b,c);
if (a>b>c) {
  console.log(a-c);
  } else if (a>b<c && a>c) {
    console.log(a-b);
  } else if (a>b<c && a<c) {
    console.log(c-a);
  } else if (a<b>c && a>c) {
    console.log(b-c);
  } else if (a<b>c && a<c) {
    console.log (b-a)
  } else if (a<b<c) {
    console.log(c-a);
  }


//es avelacreci nor var d f g

// var number = 152;
// var a=parseInt(number/100);
// var b=parseInt((number-a*100)/10);
// var c=parseInt((number-a*100)-(b*10));
// var d=a;
// var f=b;
// var g=c;
// console.log(d,f,g);
// if (d>f>g) {
//   console.log(a-g);
//   } else if (d>f<g && d>g) {
//     console.log(d-f);
//   } else if (d>f<g && d<g) {
//     console.log(g-d);
//   } else if (d<f>g && d>g) {
//     console.log(f-g);
//   } else if (d<f>g && d<g) {
//     console.log (f-d)
//   } else if (d<f<g) {
//     console.log(g-d);
//   }
