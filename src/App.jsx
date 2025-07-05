import { useState } from "react";
import { Modal } from "./components";

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open modal
      </button>
      <Modal
        buttonShowModal={showModal}
        setButtonShowModal={setShowModal} />
    </div>
  );
}
export default App;