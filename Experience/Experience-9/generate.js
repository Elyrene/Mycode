addEventListener("message", Message => {
    if(Message.data.command === "gernerate") {
        generatePrimes(Message.data.quota);
    }
});

function generatePrimes(quota) {
    function isPrimes(n) {
        for(let c = 2; c <= quota; ++c) {
            if(n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const Maximum = 100000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (Maximum + 1));
        if (isPrimes(candidate)) {
            primes.push(candidate);
        }
    }

    postMessage(primes.length);
}