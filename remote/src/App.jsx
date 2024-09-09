import DummyPage from "hostApp/DummyPage";

import "./App.css";
function App() {
  const data = { title: "Test Remote Title", name: "Sibers" };

  return (
    <div className="App">
      <DummyPage />
    </div>
  );
}

export default App;
