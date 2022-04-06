

function isPrime(n){
    let flag = true;
    for(i = 2; i <= n - 1; i++)
    {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function fib_s(){
    
    let num = prompt("please enter the number till which fibonnaci sequence you want to print");
    
    let a = 0;
    let b = 1;
    let res = '0 1 1 ';
    
    
    for(let i = 1; i<=num; i++){
       
      
        if(a>1){

            if(isPrime(a)){

                res = res + '<span>'+a+'</span> ';
                
            }else{
                res = res + a + ' ';
            }
        }
        t = a + b;
        a = b;
        b = t;
    }

    document.getElementById('str').innerHTML = res+"</br>";

}