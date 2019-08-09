import React from 'react';
import ProjectsTimerCard from '../../components/ProjectsTimerCard';
import PreviousDayData from '../../components/PreviousDayData';

const Dashboard = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <ProjectsTimerCard />
        </div>
        <div className="col-md-4">
          <PreviousDayData />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
