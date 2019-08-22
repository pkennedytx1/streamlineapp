/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line import/named
import { ProjectTimerCardStyle } from './styles';
import Timer from '../Timer';

// eslint-disable-next-line react/prefer-stateless-function
class ProjectTimerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: 'Please Choose a Project',
    };
  }

  render() {
    return (
      <ProjectTimerCardStyle>
        <h3>Current Project</h3>
        <div className="row">
          <div className="col-md-6">
            <h4>{this.state.projectTitle}</h4>
            <h3>
              <Timer />
            </h3>
          </div>
          <div className="col-md-6">
            <div>
              <h4>Current Projects</h4>
              <div>
                <button type="button" className="btn btn-success">
                  Project Title
                </button>
              </div>
            </div>
          </div>
        </div>
      </ProjectTimerCardStyle>
    );
  }
}

export default ProjectTimerCard;
