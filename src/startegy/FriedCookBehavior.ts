import {CookBehavior} from "./CookBehavior";

export class FriedCookBehavior implements CookBehavior {
    cook(): "Frying..."{
        return "Frying...";
    };
}