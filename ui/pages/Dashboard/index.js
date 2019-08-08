import React from 'react';
import ProjectsTimerCard from '../../components/ProjectsTimerCard';

const Dashboard = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <ProjectsTimerCard />
        </div>
        <div className="col-md-4">
          <h1>I am going to be the data from yesterday and the past 2 days</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
