let data = localStorage.getItem("productsBought")
let allproducts = document.querySelector("#products")
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
        window.location="login.html"
    },1000   )
})

if (data){
    let item = JSON.parse(data)
    drawdata(item)
}
function drawdata(products){
    let y = products.map((item)=>{
        return `
        <div class="col-12 pro-style" id="allitemsprice">
        <img src="..//${item.imgUrl}" alt="" height="120" width="120" class="mt-4">
        <div>
            <h3 >${item.title}</h3>
            <p class="card-text">${item.text}</p>
            <h4 price="${item.price}" id="totalprice">${item.buy}</h4>
            <a href="#" class="btn btn-outline-info">View More</a>
        </div>
        <div class="pro-buy">
            <button class="btn btn-outline-success" onClick="Addtosum(${item.id})">Delete</button>
            
        </div>
        
    </div>
        `
    })
    allproducts.innerHTML = y
}


