function samplePromise() {
    return Promise.resolve("Johanes");
}

async function run() {
    const name = await samplePromise();
    console.info(name)
}

run();

/* terdapat perbedaan antara file js dengan mjs, pada file mjs pada function 
defaultnya adalah async sedanngkan pada file js tidak ada async function, sehingga harus dituliskan seperti diatas*/
