async function postData(url = '', data = {}) {
    const responce = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        headers: {
            "Content-type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });

    return responce.json();
}

postData("https://example.com/answer",{answer: 42}).then((data)=>{
    console.log(data);
})
