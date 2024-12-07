function gcd(a, b) {
  var R;
  a  = document.querySelector(".value1").value;

  var x = b
  var y = a
  var r  = null;
  var val = "null";
  if ( a <= 0){
      return alert("your value is not a positive interger ");
  }
  else if (a > 0){
     
      while (r === null){
          r =  a % 2 
          if (r > 0 ){
              
              val = "an odd number";
          }
          else if (r <= 0){
             val = "a even number";
          }
      }
      return document.querySelector(".gcd").innerHTML = `Your value ${a} is ${val}`;
  } 
 
}
  

