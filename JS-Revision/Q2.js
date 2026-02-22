// Q2. Build a Rate Limiter (Closure + Timers)

function createRateLimiter(limit, intervalMs) {

    let calls = 0;
    let timerId = null;

    return function() {
        if(calls < limit) {
            calls++;
            if(!timerId) {
                timerId = setTimeout(() => {
                    calls = 0;
                    clearTimeout(timerId);
                    timerId = null;
                }, intervalMs);
            }
            return true;
        }else {
            return false;
        }
    };
}

const limitCalls = createRateLimiter(2, 1000);

console.log("Call 1:", limitCalls());
console.log("Call 2:", limitCalls());
console.log("Call 3:", limitCalls());

setTimeout(() => {
    console.log("After 1 second, Call 4:", limitCalls());
}, 1000);
