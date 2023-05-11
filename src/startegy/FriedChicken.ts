import {Chicken} from "./Chicken";
import {FriedCookBehavior} from "./FriedCookBehavior";
import {NoSauceBehavior} from "./NoSauceBehavior";

export class FriedChicken extends Chicken {
    constructor() {
       super(new FriedCookBehavior(), new NoSauceBehavior())
    }

     display(){
        console.log("I'm a fried chicken");
     }

}