interface Hamburger {
    prepare():void
}


class ChickenHameburger implements Hamburger {
    prepare(): void {
        console.log("preparing chicken hamburger")
    }
}

class BeefHameburger implements Hamburger {
    prepare(): void {
        console.log("preparing beef hamburger")
    }
}

abstract class Restaurant {
    abstract createHamburger(): Hamburger;

    orderHamburger(): void{
        const hamburger = this.createHamburger()
        hamburger.prepare()
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new ChickenHameburger()
    }
}

class BeefRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeefHameburger()
    }
}



function main(){
    let restaurant: Restaurant;
    const burgerType = prompt('que tipo de hamburguesa deseas (chicken/beef)? ')

    switch(burgerType){
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        default:
            throw new Error('tipo de hamburguesa no soportada')
    }
    restaurant.orderHamburger()
}

main()
