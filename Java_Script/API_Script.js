fetch("http://quotes.stormconsultancy.co.uk/random.json")
.then((r) => r.json())
.then((inspo) => {
    console.log(inspo);
    handelInspo(inspo)
});

const handelInspo = (inspoDetails) => {
    document.querySelector("blockquote").innerText = inspoDetails.quote;
};