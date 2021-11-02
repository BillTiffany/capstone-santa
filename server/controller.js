const gift = require('./db.json')
let globalId = 17

module.exports = {
    getgift: (req,res) =>{
        res.status(200).send(gift)
        // console.log(gift)
    },
    deletegift: (req,res) => {
        const {id} = req.params
        let index = gift.findIndex(elem => elem.id === +req.params.id)
        gift.splice(index, 1)
        res.status(200).send(gift)
    },
        
    creategift: (req,res) => {const {item, price, imageURL} =req.body
    const newgift = {
        id: globalId,
        item,
        price,
        imageURL
    }

    gift.push(newgift)
    res.status(200).send(gift)
    globalId++
    },
        updategift: (req,res) => {
            const {id} = req.params
            const {type} = req.body

            let index = gift.findIndex((elem) => +elem.id=== +id)
            if(type === 'plus'){
                console.log(gift[index])
                let newPrice = gift[index].price += 1 
                let newPriceString = newPrice.toFixed(2)
                gift[index].price = parseFloat(newPriceString)
                res.status(200).send(gift)
            }else if(gift[index].price < 1 && type === 'minus'){
                gift[index].price = 0
                res.status(200).send(gift)
            }else if(type === 'minus'){
                let newPrice = gift[index].price -= 1.00
                let newPriceString = newPrice.toFixed(2)
                gift[index].price = parseFloat(newPriceString)
                res.status(200).send(gift)
            }else {
                res.status(400).send("you broke it Cartman")
            }
    }
}






