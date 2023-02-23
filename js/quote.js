function restQuotes(){
    fetch("https://api.kanye.rest/")
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>displayQuotes(data))
}

const displayQuotes = quote =>{
    // console.log(quote)
    const showQuotes = document.getElementById("quote");
    showQuotes.innerHTML = quote.quote;
}
restQuotes();