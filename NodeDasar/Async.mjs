function samplePromise() {
    return Promise.resolve("Johanes");
}

    const name = await samplePromise();
    console.info(name)

/* pada file mjs lebih singkat dalam penulisan function async funtion, karena 
pada file mjs sudah bersifat default async nya*/