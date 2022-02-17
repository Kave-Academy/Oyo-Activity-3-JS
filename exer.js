function run() {

  let num = document.getElementById("input_number").value;
        
  let primeOrNot = num => {
        
      if (num == 2) {
          return `Is a prime number`;
        } 
        
        else if (num > 1) {
          for (var i = 2; i < num; i++) {
                
            if (num % i !== 0) {
              return `Is a prime number`;
            } 
                      
            else if (num === i * i) {
              return `Is not a prime number`
            } 
                      
            else {
              return `Is not a prime number`;
            }
          }
        }      
      }
              
console.log(primeOrNot(num))
document.getElementById("output").innerHTML = primeOrNot(num);
}