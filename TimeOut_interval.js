//*************************** */

function speakHowdy(){
    console.log("Howdy");
}

function testMe(){
    setTimeout(speakHowdy,0);
    console.log("Prayer");
}

//*************************** */

function delayedGreet(){
    setTimeout(() => {
        console.log("Welcome to our home");
    }, 4000);

}

//*************************** */

function sayGoodbye(){
    console.log("Hello, How are you doing");

    setTimeout(() => {
        console.log("Good bye, See you");
    }, 3000);
}

//*************************** */

function repeat(){
    setInterval(() => {
        console.log("hi there");
    }, 2000);
}

//*************************** */

function limitInterval() {

    const repeatation  = setInterval(() => {
        console.log("Hello there, how r u");
    }, 1000);

    setTimeout(() => {
        clearInterval(repeatation);
    }, 5000);
}

//************************************** */


function TheEnd(){
    console.log("this is end of the game!");
}
function everySec(TheEnd, interval, duration){
    const interval1 = setInterval(() => {
        console.log("Hi, just for now");
    }, interval * 1000);

    setTimeout(() => {
        clearInterval(interval1);
    }, duration * 1000);
} // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

everySec(TheEnd, 2, 10);

//***************************************** */


function delayCounter(target, wait) {
    return () => {
      let counter = 1;
      const interval = setInterval(() => {
        console.log(counter);
        counter++;
        if (counter > target) clearInterval(interval);
      }, wait);
    };
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  const countLogger = delayCounter(10, 1000);
  // countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3

  //*********************************************************

  function promised(val) {
    // ADD CODE HERE
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(val);
      }, 2000);
    });
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const createPromise = promised('wait for it...');
  // createPromise.then((val) => console.log(val));
  // will log "wait for it..." to the console after 2 seconds

//*********************************************************

function debounce(callback, interval) {
    // ADD CODE HERE
    let time = 0;
    return () => {
      const newTime = new Date().getTime();
      if (newTime - time < interval) {
        time = newTime;
        return;
      } else {
        time = newTime;
        return callback();
      }
    };
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  function giveHi() {
    return "hi";
  }
  const giveHiSometimes = debounce(giveHi, 3000);
  console.log(giveHiSometimes()); // -> 'hi'
  setTimeout(function () {
    console.log(giveHiSometimes());
  }, 2000); // -> undefined
  setTimeout(function () {
    console.log(giveHiSometimes());
  }, 4000); // -> undefined
  setTimeout(function () {
    console.log(giveHiSometimes());
  }, 8000);