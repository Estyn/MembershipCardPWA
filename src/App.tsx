import React from 'react';
import logo from './logo.svg';
import './App.css';
import MembershipCard from './membership-card';
import { MembershipProps } from './membership';

function App() {

  var members: Array<MembershipProps> = [{
    name: 'Jack Edwards',
    grandLodgeNumber: '63044',
    lodgeName: 'Avon Glen',
    lodgeNumber: '170',
    duesExpireDate: 'Dec 31, 2020',
    attestedBy: 'Louis Fradette'
  }, {
    name: 'Fred Flinstone',
    grandLodgeNumber: '63044',
    lodgeName: ' Loyal Order of Water Buffalo',
    lodgeNumber: '170',
    duesExpireDate: 'Dec 31, 2020',
    attestedBy: 'Barney Rubble'
  }];
  let m: MembershipProps | undefined;
  //check local storage first
  const localMember = localStorage.getItem('member');
  //if found, then use it
  if (localMember !== null)
    m = JSON.parse(localMember) as MembershipProps;
  else {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const queryId = params.get('id');
    if (queryId === 'secret') {
      m = members[0];
    }
    else if (queryId == 'flintStones')
      m = members[1];
  }
  //if not check url
  if (m !== undefined) {
    localStorage.setItem('member', JSON.stringify(m));
  }
  //make "api" call

  //store in storage



  return (
    <div className="App">
      {m !== undefined ?
        <MembershipCard {...m} /> : <p>Nope</p>}
    </div>
  );
}

export default App;
