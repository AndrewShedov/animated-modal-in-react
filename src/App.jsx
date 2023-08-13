import {useState} from "react";
import Modal from "./components/modal";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className={"button"}
      >
        Open modal
      </button>  
      <Modal buttonShowModal={showModal} setButtonShowModal={setShowModal} />
    </div>
  );   
}
export default App;
