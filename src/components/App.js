import React, { useState } from 'react'
import '../styles/App.css';

function App() {
  const [teams, setTeams] = useState([
    { name: 'Team A', target: 10, achieved: 8 },
    { name: 'Team B', target: 8, achieved: 6 },
    { name: 'Team C', target: 12, achieved: 12 },
    { name: 'Team D', target: 15, achieved: 10 },
    { name: 'Team E', target: 5, achieved: 4 },
  ]);
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState("desc");

  return (
    <div id="main">
      <h1>Work Progress Tracker</h1>
      <table>
        <thead>
          <tr>
            <th className='team-name'>Team Name</th>
            <th className='tasks-achieved'>Tasks Achieved</th>
            <th className='target'>Target</th>
            <th>Performance</th>
          </tr>
        </thead>
        <tbody>

            {/* Map teams array using the below HTML */}
            <tr key="team-name">
              <td>team-name</td>
              <td>tasks-achieved</td>
              <td>target</td>
              <td>tasks-achieved / target %</td>
            </tr>

        </tbody>
      </table>
    </div>
  );
}


export default App;
