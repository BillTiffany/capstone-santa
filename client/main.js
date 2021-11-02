const giftContainer = document.querySelector('#gift-container')
const form = document.getElementById('giftForm')

const baseURL = `http://localhost:4000/api/gift`

const giftCallback = ({ data: gift }) => displaygift(gift)
const errCallback = err => console.log(err)

const getAllgift = () => axios.get(baseURL).then(giftCallback).catch(errCallback)
const creategift = body => axios.post(baseURL, body).then(giftCallback).catch(errCallback)
const deletegift = id => axios.delete(`${baseURL}/${id}`).then(giftCallback).catch(errCallback)
const updategift = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(giftCallback).catch(errCallback)
let resetBtn = document.querySelector('.reset-btn')
let cartCountText = document.querySelector("#cart-count")
let count = 0;

function submitHandler(e) {
    e.preventDefault()
    
    let item = document.querySelector('#item')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')
    
    let bodyObj = {
        item: item.value,
        price: price.value, 
        imageURL: imageURL.value
    }
    
    creategift(bodyObj)
    
    item.value = ''
    price.value = ''
    imageURL.value = ''
}

function creategiftCard(gift) {
    const giftCard = document.createElement('div')
    giftCard.classList.add('gift-card')
    
    giftCard.innerHTML = `<img alt='gift cover image' src=${gift.imageURL} class="gift-cover-image"/>
    <p class="item">${gift.item}</p>
    <div class="btns-container">
    <button class = "minus" onclick="updategift(${gift.id}, 'minus')">-</button>
    <p class="gift-price">$${gift.price}</p>
    <button class = "plus" onclick="updategift(${gift.id}, 'plus')">+</button>
    </div>
    <button onclick="deletegift(${gift.id})">delete</button>
    <button class="bagadd">Add item to Santa's bag</button>
    `
    
    
    giftContainer.appendChild(giftCard)
}

function displaygift(arr) {
    giftContainer.innerHTML = ''; 
    for (let i = 0; i < arr.length; i++) {
        creategiftCard(arr[i])
    }
    let santaBag = document.getElementsByClassName('bagadd')
    for(let i=0; i<santaBag.length; i++) {
        santaBag[i].addEventListener('click', addToCartList);
    }
}


form.addEventListener('submit', submitHandler)

getAllgift()


function addToCartList() {

    count = count + 1;
    if(count === 1) {
        cartCountText.textContent = '1 item';
    } else {
        cartCountText.textContent = count + " items"
    }
}
function resetCart() {
    count = 0;
    cartCountText.textContent = count + ' items';
}


resetBtn.addEventListener("click", resetCart);
