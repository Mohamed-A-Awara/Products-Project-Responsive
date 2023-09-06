let userData = document.querySelector("#userdata span a")
let deleteData = document.querySelector("#delete-data")
let username = document.querySelector("#name")
let userInfo = document.querySelector("#user-info")
let removeData = document.querySelector("#removeData")
if(localStorage.getItem("username")){
    deleteData.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("username")
}

removeData.addEventListener("click",function(e){
    e.preventDefault()
    localStorage.clear()
    setTimeout(()=>{
        window.location="code-HTML/login.html"
    },1000   )
})
//////////////////////////////////////////////////////////////////
let allproducts = document.querySelector("#products")
let productsDAta = [
    {
        id:1,
        title:"Sound Bar",
        buy:"4250 EGP",
        imgUrl:"imges/Soundbar.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:4250
    },
    {
        id:2,
        title:"I Phone 14 Pro",
        buy:"42,000 EGP",
        imgUrl:"imges/i-14-pro.jpeg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:42000
    },
    {
        id:3,
        title:"I Phone 14 Pro MAx",
        buy:"55,000 EGP",
        imgUrl:"imges/i-14 pro-max-1.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:55000
    },
    {
        id:4,
        title:"Samsung Smart TV",
        buy:"8400 EGP",
        imgUrl:"imges/sam-tv.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:8400
    },
    {
        id:5,
        title:"LG WebOS TV",
        buy:"15,200 EGP",
        imgUrl:"imges/tv-4.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:15200
    },
    {
        id:6,
        title:"Sony Android TV ",
        buy:"19,200 EGP",
        imgUrl:"imges/tv-5.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:19200
    },
    {
        id:7,
        title:"Bag for School ",
        buy:"450 EGP",
        imgUrl:"imges/bag-1.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:450
    },
    {
        id:8,
        title:"Oraimo Smart watch OSW-16  ",
        buy:"1240 EGP",
        imgUrl:"imges/watch-2.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:1240
    },
    {
        id:9,
        title:"Oraimo Riff Smaller airpod",
        buy:"600 EGP",
        imgUrl:"imges/airpod-1.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:600
    },
    {
        id:10,
        title:"HP Victus 15-fa0031ne",
        buy:"43,700 EGP",
        imgUrl:"imges/lab-1.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati similique odio corrupti <br> magni non eius blanditiis? Eos alias amet sit sint.",
        price:43700
    },


]
function drawItem (){
    let y = productsDAta.map((item)=>{
        return `
        <div class="col-12 pro-style">
        <img src="${item.imgUrl}" alt="" height="120" width="120" class="mt-4">
        <div>
            <h3 >${item.title}</h3>
            <p class="card-text">${item.text}</p>
            <h4 price="${item.price}">${item.buy}</h4>
            <a href="#" class="btn btn-outline-info">View More</a>
        </div>
        <div class="pro-buy">
            <button class="btn btn-outline-success" onClick="addItems(${item.id})">Add to Bag</button>
            <i class="fa-regular fa-heart buy-icon"></i>
        </div>
    </div>
        `
    })
    allproducts.innerHTML = y
}
drawItem()
let counter =document.querySelector("#counter")
let x =0
let productsBought =[]

function addItems(id){
    if (localStorage.getItem("username")){
        let data = productsDAta.find((item)=>item.id === id)
        // console.log(data)
        //for BagData Page ******** IMPROTANT ************
        productsBought=[...productsBought,data]
        localStorage.setItem("productsBought" , JSON.stringify(productsBought))
        /* **********************************  */
        counter.innerHTML = ++x
    }
    else{
        window.location="code-HTML/login.html"
    }
}












