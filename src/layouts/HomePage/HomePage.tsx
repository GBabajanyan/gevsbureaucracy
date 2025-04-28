import React from "react";
// import "./App.css";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
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
                  <Link to='/friends'>Platonic/ new Friends</Link>
                  <Link to='/hr'>Business/ Recruiters/HR </Link>
                  <Link to='/rom'>Romantic/ dating/fwb/ ons </Link>
                </div>
              </div>
            </Modal>
    </div>
  );
};

export default HomePage;
