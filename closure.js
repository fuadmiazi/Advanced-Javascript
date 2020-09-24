function stopWatch() {
    let count = 0;
    return function(){
        count = count+1;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());