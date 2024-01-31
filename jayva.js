// console.log('shit works');

const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const vessels = [
    {
        name: 'Waffle Cone',
        price: .75,
        quantity: 0
    },
    {
        name: 'Sugar Cone',
        price: .25,
        quantity: 0
    },
    {
        name: 'Basic Bitch Cup',
        price: .00,
        quantity: 0
    }
]
const toppings = [{
    name: 'Sprinkiles',
    price: .25,
    quantity: 0,
},
{
    name: 'Chocky Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Worms',
    price: .5,
    quantity: 0
}]


function orderVessels(vesselType) {
    // console.log('vessel type', vesselType);

    const vesselDesired = vessels.find(vessel => vessel.name == vesselType)
    vesselDesired.quantity++
    // console.log(`this is the type of vessel, ${vesselDesired.name}`);
    cartTotal()
}

function orderToppings(toppingType) {
    // console.log('Topping type', toppingType);

    const toppingDesired = toppings.find(topped => topped.name == toppingType)
    toppingDesired.quantity++
    // console.log(`this is the type of topping, ${toppingDesired.name}`);
    cartTotal()
}

function orderIceCream(iceCreamType) {
    // console.log('ice cream type', iceCreamType);

    const iceCreamDesired = iceCream.find(cream => cream.name == iceCreamType)
    iceCreamDesired.quantity++
    // console.log(`this is the type of vessel, ${iceCreamDesired.name}`);
    cartTotal()
}

function cartTotal() {
    let total = 0

    iceCream.forEach(iceCreamtotal => { total += iceCreamtotal.price * iceCreamtotal.quantity })

    toppings.forEach(toppingTotal => { total += toppingTotal.price * toppingTotal.quantity })

    vessels.forEach(vesselTotal => { total += vesselTotal.price * vesselTotal.quantity })

    console.log('total', total)

    const cartTotalElement = document.getElementById('priceTotal')
    cartTotalElement.innerText = total
    drawCart()
}

function drawCart() {
    let cartContentElement = ''
    cartContentElement = document.getElementById('itemNames')
    cartContentElement.innerHTML = `<p>Ice Cream Flavor | qty: $() </p>`
}


