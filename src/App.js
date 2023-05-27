import { useState } from "react";
import "./App.css";
import { list, list2 ,list3,list4} from "./assets/cards-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
// import { Card } from "@mui/material";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {(() => {
                switch(selectedFilter) {
                  case 0: return <Cards list={list} />;
                  case 1: return <Cards list={list2} />;
                  case 2: return <Cards list={list3} />;
                  default: return <Cards list={list4}/>;
                }
            })()}
      {/* {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
      {selectedFilter === 2 ? <Cards list={list3} /> : <Cards list={list4} />} */}
    </div>
  );
}

export default App;
