import {SauceBehavior, SauceType} from "./SauceBehavior";

export class PourSauceBehavior implements SauceBehavior{
    sauce(): SauceType{
        return "Pouring sauce...";
    }
}