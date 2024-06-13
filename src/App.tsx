import './App.css';
import Task1 from "./components/Task1/Task1.tsx";
import Task2 from "./components/Task2/Task2.tsx";

const App = () => {

  return (
    <div className="d-flex align-items-center justify-content-center">
        <div className="me-5">
            <Task1 />
        </div>

        <div className="ms-5 col-6">
            <Task2/>
        </div>
    </div>
  )
};

export default App
