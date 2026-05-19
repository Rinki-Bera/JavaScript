for(let n=3;n<100;n++){
    let isprime =true
for(i=2;i<=n;i++){
    if(n%i==0){
        isprime=false
        break
    }}
    if(isprime){
        console.log(n, "is prime")
    }
    else{
        console.log(n, "is not prime")
    }
}


