// Q5. Build a Countdown Timer

function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds;
  let timerId = null;
  let endTime = null;
  let paused = false;

  function tick() {
    const now = Date.now();
    remaining = Math.max(0, Math.round((endTime - now) / 1000));
    onTick(remaining);

    if (remaining <= 0) {
      clearTimeout(timerId);
      timerId = null;
      onComplete();
    } else {
      // Schedule next tick precisely for the next second
      const nextTick = endTime - now - (remaining - 1) * 1000;
      timerId = setTimeout(tick, nextTick);
    }
  }

  function start() {
    endTime = Date.now() + remaining * 1000;
    tick();
  }

  function pause() {
    if (!paused && timerId) {
      clearTimeout(timerId);
      timerId = null;
      paused = true;
    }
  }

  function resume() {
    if (paused) {
      endTime = Date.now() + remaining * 1000;
      paused = false;
      tick();
    }
  }

  start();

  return { pause, resume };
}

const countdown = createCountdown(
  5,
  (timeLeft) => console.log("Remaining:", timeLeft),
  () => console.log("Countdown complete!")
);

setTimeout(() => countdown.pause(), 2000);   // Pause after 2s
setTimeout(() => countdown.resume(), 4000);  // Resume after 4s