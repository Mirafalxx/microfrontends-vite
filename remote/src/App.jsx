import DummyPage from "hostApp/DummyPage";
import DummyPage2 from "hostApp/DummyPage2";
import { getProducts, currency } from "hostApp/products";
import { useEffect } from "react";
import Tile from "./components/Tile/Tile";
function App() {
  const data = [
    { title: "Test Remote Title-1", id: new Date().valueOf() + 1 },
    { title: "Test Remote Title-2", id: new Date().valueOf() + 2 },
    { title: "Test Remote Title-3", id: new Date().valueOf() + 3 },
  ];

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="remote__app">
      <div className="wrapper">
        <DummyPage />
        <DummyPage2 />
        <div className="font-bold text-3xl flex-end">{currency.format(9.123)}</div>
        {data.map((todo) => (
          <Tile {...todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
