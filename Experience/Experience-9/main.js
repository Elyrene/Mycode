const worker = new Worker('./generate.js');

document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
        command: "gernerate",
        quota: quota,
    });
});

worker.addEventListener("message", message => {
    document.querySelector("#output").textContent = 
    `Finish gernerate ${message.data} primes`;
});

document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value = 
    `按下按钮后，尝试在此处输入文本`;
    document.location.reload();
});