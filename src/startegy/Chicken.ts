import {ChickenBehavior} from "./ChickenBehavior";
import {CookBehavior} from "./CookBehavior";
import {SauceBehavior} from "./SauceBehavior";

export abstract class Chicken {
    cookBehavior: CookBehavior;
    sauceBehavior: SauceBehavior;

    constructor(cookBehavior: CookBehavior, sauceBehavior: SauceBehavior) {
        this.cookBehavior = cookBehavior;
        this.sauceBehavior = sauceBehavior;
    }

    performCook(): string {
        return this.cookBehavior?.cook();
    }
    performSauce(): string {
        return this.sauceBehavior?.sauce();
    }

    setCookBehavior(cookBehavior: CookBehavior): void {
        this.cookBehavior = cookBehavior;
    }

    setSauceBehavior(sauceBehavior: SauceBehavior): void {
        this.sauceBehavior = sauceBehavior;
    }
}