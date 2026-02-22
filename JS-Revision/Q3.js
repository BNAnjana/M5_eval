// Q3. Implement setInterval Using setTimeout

function mySetInterval(callback, delay) {
  // Private store for timers
  const id = Symbol("intervalId");

  function tick() {
    callback();
    timers[id] = setTimeout(tick, delay);
  }

  timers[id] = setTimeout(tick, delay);
  return id;
}

function myClearInterval(id) {
  if (timers[id]) {
    clearTimeout(timers[id]);
    delete timers[id];
  }
}

// Private timer reference
const timers = {};

// Example usage
const intervalId = mySetInterval(() => {
  console.log("Hello every 1 second");
}, 1000);

setTimeout(() => {
  myClearInterval(intervalId);
  console.log("Stopped interval");
}, 5000);