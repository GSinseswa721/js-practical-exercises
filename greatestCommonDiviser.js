function gcf(y,x){
    let divisor; //declare for varible for storing the greatest c factor
    for (let i = 1; i<=y && i<= x; i++) { //
        
        if( x % i == 0 && y % i == 0){
            divisor = i;
        }
    }
    return divisor
}
let answer = gcf(900,280);
console.log(answer);