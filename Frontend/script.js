//Target an element:
let cardData = document.querySelector(".cardData");

const url="http://localhost:4000/movies";


addEventListener("DOMContentLoaded",async ()=>{
    let data;
    let stringOfData="";
    try{
        let res=await fetch(url);
        res=await res.json();
        data=res;
        res.map((e)=>stringOfData+=template(e))
        cardData.innerHTML=stringOfData


    }catch(err){
        console.log(err);
    }
})


let template =(movies)=>{
   let temp = `
   <!-- CARD -->
   <div class="card" style="width: 18rem;">
        <img src="${movies.poster}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${movies.name}</h5>
        <p class="card-text">${movies.summary}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Rating: ${movies.rating}</li>
        </ul>
        <div class="card-body">
        <a href="${movies.trailer}" class="card-link">Trainer   Youtube</a>
        </div>
   </div>
   `;
   return temp
}
