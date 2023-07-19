function countZeros(number){
    let count= 0;
    let divide= 10;

    while(number >= divide){
        count += Math.floor(number / divide);
        divide *= 10
    }
    return count;
}

let nber = 1001;
let zeroCount = countZeros(nber);
console.log(zeroCount)