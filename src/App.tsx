import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  // hook模式
  const outlet = useRoutes(routes);
  return <div className="App">{outlet}</div>;
}

export default App;
