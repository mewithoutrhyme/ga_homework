
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic

     if(a > b ) {
      comparison = ">";
     }

     if( b > a ) {
      comparison = "<";
     }
 
     if(a == b ) {
      comparison = "=";
     }

     if(isNaN(a) || isNaN(b)){
      comparison = "n/a";
     }
     
     document.querySelector('#comparison').innerText = comparison;
   }
 