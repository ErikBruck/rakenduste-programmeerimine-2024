import React from "react";
import EsimeneKomponent from "./Komponendid/EsimeneKomponent";
import Counter from "./Komponendid/Counter";
import MinuInfoKomponent from "./Komponendid/MinuInfoKomponent";

const App = () => {
  return (
    <div>
      <EsimeneKomponent />
      <Counter />
      <MinuInfoKomponent name="Erik"/>
    </div>
  );
};

export default App;
