
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import FilterHero from "../components/FilterHero";
import Reviev from "../components/Reviev";

import { useEffect } from "react";


function Puja() {


  return (
      <div className="bg-gray-50">
       
            <FilterHero/>
            <Filter/>
          
            <Reviev/>
            <Footer/>
    </div>
  );
}

export default Puja;