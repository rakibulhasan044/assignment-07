import { useState } from "react";
import "./App.css";
import Caart from "./components/Caart/Caart";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cook, setCook] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const wantToCook = (item) => {
    const isExist = cook.find((p) => p.id === item.id);
    if (!isExist) {
      setCook([...cook, item]);
      toast.success("Item added !")
    } else {
      toast.warn("Already selected!")
    }
  };
  const prepairFood = (i) => {
    const newCook = cook.filter((p) => p.id !== i.id);
    const isExist = preparing.find((p) => p.id === i.id);
    if (!isExist) {
      setPreparing([...preparing, i]);
      toast.success("Preparing item !")
    }
    console.log(newCook);
    console.log("delete");
    if (newCook) {
      setCook(newCook);
    }
  };


  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-3 flex gap-4">
        <div className="w-3/5">
          <Recipes wantToCook={wantToCook}></Recipes>
        </div>
        <div className="w-2/5">
          <Caart
            cook={cook}
            prepairFood={prepairFood}
            preparing={preparing}
          ></Caart>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
