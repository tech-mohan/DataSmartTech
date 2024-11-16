import "./App.css";
import Navbar from "./Components/navbar";
import Routing from "./Router";

function App() {
  const rootStyles = getComputedStyle(document.documentElement);
  const gradients = [
    rootStyles.getPropertyValue("--gradient-1").trim(),
    rootStyles.getPropertyValue("--gradient-2").trim(),
    rootStyles.getPropertyValue("--gradient-3").trim(),
    rootStyles.getPropertyValue("--gradient-4").trim(),
    rootStyles.getPropertyValue("--gradient-5").trim(),
  ];
  let index = 0;
  setInterval(() => {
    document.body.style.backgroundImage = gradients[index];
    index = (index + 1) % gradients.length;
  }, 3000);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
