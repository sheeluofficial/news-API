async function apiCall(url) {


    //add api call logic here
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
    return data.articles;


}


function appendArticles(articles, main) {
    //add append logic here
    main.innerHTML = null;

    articles.forEach(({title,image,description},index) => {
        
        let news_box = document.createElement("div")
        news_box.setAttribute("class","news-box")
        news_box.addEventListener("click",(event)=>{
          localStorage.setItem("article",JSON.stringify(articles[index]))
          window.location.href = "news.html"
        })
        let title_box = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.innerText = title;
        title_box.append(h3)
        let desc_box = document.createElement("div")
        let p = document.createElement("p")
            p.innerText = description;
            desc_box.append(p)
        let img_box = document.createElement("div")
        let img = document.createElement("img")
        img.src = image;
        img_box.append(img)
        news_box.append(title_box,desc_box,img_box)
        main.append(news_box)

        

    });



}

export { apiCall, appendArticles }