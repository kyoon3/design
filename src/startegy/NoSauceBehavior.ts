import {SauceBehavior} from "./SauceBehavior";

export class NoSauceBehavior implements SauceBehavior{
    sauce(): "No sauce"{
        return "No sauce";
    }
}