import React from 'react';
import logo from './logo.svg';
import './App.css';
import MembershipCard from './membership-card';
import { MembershipProps } from './membership';

function App() {
  var m: MembershipProps = {
    name: 'Jack Edwards',
    grandLodgeNumber: '63044',
    lodgeName: 'Avon Glen',
    lodgeNumber: '170',
    duesExpireDate: 'Dec 31, 2020',
    attestedBy: 'Louis Fradette'
  };
  return (
    <div className="App">
      <MembershipCard {...m} />
    </div>
  );
}

export default App;
