const btn=document.querySelector(".meme-gen");
const meme=document.querySelector(".cont img");
const mtitle=document.querySelector(".title");
const mauthor=document.querySelector(".author");

const update=(url,title,author) => {
    meme.setAttribute("src",url);
    mtitle.innerHTML=title;
    mauthor.innerHTML=`Meme by : ${author}`;
};

const genmeme=() => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>response.json()).then((data)=>{
        update(data.url,data.title,data.author);
    });
};

genmeme();

btn.addEventListener("click",genmeme);



