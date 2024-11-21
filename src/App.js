// import "./App.css";
import AzureTranslator from "./AzureTranslator";
import GoogleTranslator from "./GoogleTranslator";
function App() {
  return (
    <div className="App" style={{ margin: "2% 2% 0% 2%" }}>
      <GoogleTranslator />
      <hr />
      <AzureTranslator />
    </div>
  );
}

export default App;
