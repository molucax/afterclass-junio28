import AxiosExample from "./components/AxiosExample";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/axios" element={<AxiosExample />} />
        <Route path="/axios/:house" element={<AxiosExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
