import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import Mainbar from '../components/Mainbar/Mainbar';
import './Proposal.css'; 
import proposal1 from '/proposal1.pdf';
import proposal2 from '/proposal2.pdf';
import proposal3 from '/proposal3.pdf';
import proposal4 from '/proposal4.pdf';

function Proposal() {
  const [activeTab, setActiveTab] = useState(0); 

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const proposals = [proposal1, proposal2, proposal3, proposal4];

  return (
    <div>
      <h1>Proposal</h1>
      <Mainbar />

      <div>
        <ul className="tab-list">
          <li><button onClick={() => handleTabClick(0)}>1차 기획서</button></li>
          <li><button onClick={() => handleTabClick(1)}>2차 기획서</button></li>
          <li><button onClick={() => handleTabClick(2)}>3차 기획서</button></li>
          <li><button onClick={() => handleTabClick(3)}>4차 기획서</button></li>
        </ul>
        <div>
          <h2>{activeTab + 1}차 기획서</h2>
          <div className="pdf-container" style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px' }}>
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js">
              <Viewer fileUrl={proposals[activeTab]} />
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposal;

