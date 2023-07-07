import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./Components/TodoList";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="todolist" element={<TodoList />} />
        </Route>
        <Route path="shopping" element={<Products />} />
        <Route path="/shopping/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
