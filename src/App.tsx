import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Modal } from "antd";

function App() {
  return (
    <div className="App">
      <Modal open footer={null} closable={false} centered>
        <div>
          <div>
            <h4>Gev's Personal Bureaucracy.</h4>
            <p>
              This page was created because I got tired of telling everyone the
              same story during aquantances. I figured out that almost all
              relationships/aquantances can be divided to three types. Click on
              what you think suits your case the best:D
            </p>
          </div>
          <div>
            <Button>Platonic/ new Friends</Button>
            <Button>Business/ Recruiters/HR </Button>
            <Button>Romantic/ dating/fwb/ ons </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
