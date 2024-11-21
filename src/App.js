// import "./App.css";
import AzureTranslator from "./AzureTranslator";
import GoogleTranslator from "./GoogleTranslator";
function App() {
  return (
    <div className="App" style={{ margin: "25% 25% 0% 25%" }}>
      <GoogleTranslator />
      <hr />
      <AzureTranslator />
    </div>
  );
}

export default App;
