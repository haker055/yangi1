let api = 'https://fakestoreapi.com/products/'
let joy = document.getElementById("place")
fetch(api).then((res) => res.json()).then((res) => {
    let text = ""
    res.forEach(element => {

        text += `
        <div class="katta">
        <div class="kich">
        <img src="${element.image}" alt="">
        <h1 id="title">${element.title}</h1>
        <p>${element.price + "ming so'm"}</p>
        <div class="center">
        <button>sotib olish</button>
        </div>
        </div>
</div>
        `
    });

    joy.innerHTML = text
})


window.onload = function(){
    setTimeout(function(){
        document.body.classList.add("load")
    },8000)
}