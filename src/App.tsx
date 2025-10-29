import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App(soool) {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
