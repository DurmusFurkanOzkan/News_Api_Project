const allBtns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");

allBtns.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        getData(e.target.innerText);
    });
});

const getData = async (subject) =>{
    const url = `https://newsapi.org/v2/everything?q=${subject}&apiKey=038d009114be45ceb78d31623931b16a`
    const response = await fetch(url);

    const data = await response.json();

    
    renderData(data.articles);
}

const renderData = (articles) =>{
    container.innerHTML = "";

    articles.filter((item) =>{
        return item.urlToImage != null
    }).map((item) => {
        const {title, description, urlToImage, url, publishedAt, author} = item;
    
        let card = document.createElement("div");

        card.classList.add("card");
        card.innerHTML = `
        <div class="news-image-container m-3">
          
          <img width="%35" src="${urlToImage}" alt="${title}">
          <br>
          <button class="close-button text-light p-3 mt-2 bg-warning border-0 rounded fs-5">Delete</button>
        </div>
        <div class="news-content">
          <div class="news-title">${title}</div>
          <br>
          <div class="news-description">${description || content || ""}</div>
          <br>
          <div class="news-author">Author: ${author}</div>
          <div class="news-published">Published At: ${publishedAt}</div>
          <a class="view-button btn mb-2 btn-outline-info" href="${url}">Read more</a>
        </div>
      `;
      container.appendChild(card);

      const deleteBtn = card.querySelector(".close-button");
      deleteBtn.addEventListener("click", (e) =>{
        card.remove();
      });
    });
}