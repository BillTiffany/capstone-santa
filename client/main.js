const giftContainer = document.querySelector('#gift-container')
const form = document.getElementById('giftForm')

const baseURL = `/api/gift`

const giftCallback = ({ data: gift }) => displaygift(gift)
const errCallback = err => console.log(err)

const getAllgift = () => axios.get(baseURL).then(giftCallback).catch(errCallback)
const creategift = body => axios.post(baseURL, body).then(giftCallback).catch(errCallback)
const deletegift = id => axios.delete(`${baseURL}/${id}`).then(giftCallback).catch(errCallback)
const updategift = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(giftCallback).catch(errCallback)
let resetBtn = document.querySelector('.reset-btn')
let cartCountText = document.querySelector("#cart-count")
let count = 0;
let signUpBtn = document.querySelector('#sign-up')
let signUpForm = document.querySelector('.email-sign-up')
let footer = document.querySelector('footer')
let emailInput = document.querySelector('.emailIn');

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
    <h4 class="item">${gift.item}</h4>
    <div class="btns-container">
    <button class = "minus" onclick="updategift(${gift.id}, 'minus')">-</button>
    <h4 class="gift-price">$${gift.price}</h4>
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

function emailSubmitHandler(){
    var confirmationMsg = document.createElement('p')
    confirmationMsg.textContent = "Thank you for entering your email address, " + emailInput.value;
    signUpForm.remove();
    footer.appendChild(confirmationMsg);
  }

signUpBtn.addEventListener('click', emailSubmitHandler);
resetBtn.addEventListener("click", resetCart);
