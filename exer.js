function run(){

  let n = document.getElementById("input_number").value;


  let primeOrNot = n => {
    
    if (n < 2) return `${n} is not a prime number`;
        for (var i = 2; i <= n/2; i++) {
            if (n%i==0)
                return `${n} is not a prime number`;
        }
        return `${n} is a prime number`;
}

console.log(primeOrNot(n)); 
document.getElementById("output").innerHTML = primeOrNot(n);
}
