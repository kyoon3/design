import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FriedChicken} from "./startegy/FriedChicken";
import {PourSauceBehavior} from "./startegy/PourSauceBehavior";
import {BakedCookBehavior} from "./startegy/BakedCookBehavior";
import {Chicken} from "./startegy/Chicken";

function App() {
  const friedChicken = new FriedChicken();
  const test = () => {
    console.log(friedChicken.performCook());
    console.log(friedChicken.performSauce());
    friedChicken.display();
    const sauceBakedChicken = new Chicken(new BakedCookBehavior(), new PourSauceBehavior());
    console.log(sauceBakedChicken.performCook());
    console.log(sauceBakedChicken.performSauce());
  }
  return (
    <div className="App">
      <button children={"click me"} onClick={() => test()}/>
    </div>
  );
}

export default App;
