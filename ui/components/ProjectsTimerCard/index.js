/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// eslint-disable-next-line import/named
import { ProjectTimerCardStyle } from './styles';
import Timer from '../Timer';

// eslint-disable-next-line react/prefer-stateless-function
class ProjectTimerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: 'Please Choose a Project',
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
            <div style={{ position: 'relative' }}>
              <h4>Current Projects</h4>
              <a onClick={this.handleShow}>
                <h6 style={{ position: 'absolute', right: '0', top: '-5px', cursor: 'pointer' }}>
                  + New Project
                </h6>
              </a>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                  <h3>New Project Form</h3>
                </Modal.Header>
                <Modal.Body>
                  <p>Here is where everything is going.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Close</Button>
                  <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
              </Modal>

              <div>
                <button type="button" className="btn btn-primary btn-block">
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
