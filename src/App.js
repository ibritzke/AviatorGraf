import { BarChart } from "./components/barchart";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header />
      <BarChart />
      <GlobalStyle />
    </div>
  );
}
