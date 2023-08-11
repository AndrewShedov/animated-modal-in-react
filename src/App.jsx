import { useState } from "react";
import Modal from "./components/modal/modal";
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
      <Modal showModalButton={showModal} setShowModalButton={setShowModal} />
    </div>
  );
}
export default App;
