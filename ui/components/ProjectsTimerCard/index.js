import React from 'react';
// eslint-disable-next-line import/named
import { ProjectTimerCardStyle } from './styles';
import Timer from '../Timer';

const ProjectTimerCard = () => (
  <ProjectTimerCardStyle>
    <h3>Current Project</h3>
    <div className="row">
      <div className="col-md-6">
        <h3>Stopwatch</h3>
        <h3>
          <Timer />
        </h3>
      </div>
      <div className="col-md-6">
        <p>Current Projects go here</p>
      </div>
    </div>
  </ProjectTimerCardStyle>
);

export default ProjectTimerCard;
