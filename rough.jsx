//timer function in javascript
function timer() {
    var count = 10;
    var timer = setInterval(function() {
        console.log(count);
        count--;
        if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
        }
    }, 1000);
}