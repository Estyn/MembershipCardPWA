import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MembershipCard from './membership-card';
import { MembershipProps } from './membership';
import { useEffect, useState } from 'react';
const cacheName = "memberCache";
const cacheKey = "member";

function App() {
  const [member, setMember] = useState<MembershipProps>();
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
  useEffect(() => {

    async function fetchMemberFromCache() {
      let m: MembershipProps | undefined;
      const cache = await caches.open(cacheName);
      const response = await cache.match(cacheKey);

      if (response) {
        const responseBody = await response.json();
        setMember(responseBody as MembershipProps);
        m = responseBody;
      }
      {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const queryId = params.get('id');
        if (queryId === 'secret') {
          setMember(members[0]);
          m = members[0];
        }
        else if (queryId === 'flintStones')
          setMember(members[1]);
        m = members[1]
      }
      if (m !== undefined) {
        const responseBody = JSON.stringify(m);
        const responseSave = new Response(responseBody);
        await cache.put(cacheKey, responseSave);
      }

    }

    fetchMemberFromCache();

  }, []);




  return (
    <div className="App">
      {member !== undefined ?
        <MembershipCard {...member} /> : <p>Nope</p>}
    </div>
  );
}

export default App;
