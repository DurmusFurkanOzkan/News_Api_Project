const allBtns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");

allBtns.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        getData(e.target.innerText);
    });
});

const getData = async () =>{
    const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=038d009114be45ceb78d31623931b16a"
    const response = await fetch(url)
}