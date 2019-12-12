//example 1

var a=45;
b=26;
c=78;

if (a>b>c) {
  console.log(c,b,a)
} 
else if (a>b>c) {
  console.log(a,b,c);
} 
else if (a>b<c && a>c) {
  console.log(b,c,a);
} 
else if (a>b<c && a<c) {
  console.log(b,a,c);
}
else if (a<b>c && a<c) {
  console.log (a,c,b)
}
else (a<b>c && a>c) {
  console.log (c,a,b)
};


//example 2, but I got a problem, I can't understand why it doesn't read "-" numbers

var a=-23;
b=-456;
c=0;

if (a>b>c) {
  console.log(c,b,a);
} 
else if (a>b>c) {
  console.log(a,b,c);
} 
else if (a>b<c && a>c) {
  console.log(b,c,a);
} 
else if (a>b<c && a<c) {
  console.log(b,a,c);
} 
else if (a<b>c && a<c) {
  console.log(a,c,b);
} 
else (a<b>c && a>c); {
  console.log (c,a,b)
};
