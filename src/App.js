import RoutesApp from "./routes";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <RoutesApp/>
    </div>
  );
}

export default App;
