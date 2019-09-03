/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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
      value: '',
      value2: '',
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const { length } = this.state.value;
    if (length > 2) return 'success';
    if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.setState({ value2: e.target.value2 });
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
                <form>
                  <Modal.Header>
                    <h3>New Project Form</h3>
                  </Modal.Header>
                  <Modal.Body>
                    <FormGroup
                      controlId="formBasicText"
                      validationState={this.getValidationState()}
                    >
                      <ControlLabel>Project Name</ControlLabel>
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Project Name"
                        onChange={this.handleChange}
                      />
                      <ControlLabel>Project Name</ControlLabel>
                      <FormControl
                        type="text"
                        value={this.state.value2}
                        placeholder="Project Name"
                        onChange={this.handleChange}
                      />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                  </Modal.Footer>
                </form>
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
