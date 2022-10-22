function sum(numbers){
    let s=0;
    numbers.forEach((n) => {s += n;});
    return s;
}

function avg(numbers){
    return sum(numbers)/numbers.length;
}

function max(numbers){
    let m= numbers[0];
    for(let i=0 ; i<numbers.length;i++){
        if(m<numbers[i]){
            m=numbers[i];
        }
    }
    return m;
}

module.exports={
    sum,
    avg,
    max,
};