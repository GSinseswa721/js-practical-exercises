function dublicateRemove(arr){
    let dublicateArry = [];

    for(let i of arr){
        if(dublicateArry.indexOf(i) === -1){
            dublicateArry.push(i)
        }
    }
    console.log(dublicateArry);
}
const array = [1,2,3,4,2];
dublicateRemove(array);