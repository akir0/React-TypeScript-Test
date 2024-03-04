import "./App.css";
import Card, { CardVariant } from "./components/Card";

function App() {
  return (
<div>
  <Card onClick={(num) => console.log('click', num)
  } variant={CardVariant.outlined} width="200px" height="200px">
    <button>Button</button>
  </Card>
</div>

  )
}

export default App;
