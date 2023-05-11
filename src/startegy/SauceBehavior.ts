export type SauceType = "Pouring sauce..." | "No sauce";
export interface SauceBehavior {
    sauce(): SauceType;
}