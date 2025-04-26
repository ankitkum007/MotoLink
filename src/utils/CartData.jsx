import {faker} from '@faker-js/faker';
function createRandom(){
    return{
        name:faker.vehicle.manufacturer(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://th.bing.com/th/id/OIP.7agxanOWUvM2ohb9u0PWzAHaE6?rs=1&pid=ImgDetMain',
        miles:100,
        gearType:"Automatic",
        price:faker.finance.amount({min:7000, max:10000})
    }
}

const CarLists = faker.helpers.multiple(createRandom,{
    count:8
})

export default {
    CarLists
}
