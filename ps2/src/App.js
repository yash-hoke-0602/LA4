import ElectiveForm from "./components/electiveForm";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header title="Elective Selection" />
      <ElectiveForm />
      <Footer email="yashhoke0602@gmail.com" name="MR xyz" />
    </div>
  );
}

export default App;
