import "./App.css";
import Form from "./components/form"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <div className="flex flex-col justify-between h-full">
      <Header></Header>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
