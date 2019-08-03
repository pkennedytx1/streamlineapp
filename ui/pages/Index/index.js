import React from 'react';
import { Button } from 'react-bootstrap';
import Styles from './styles';

const Index = () => (
  <Styles.Index>
    <div className="landingPageImage">
      <h1>
        Stream
        <b>Line</b>
      </h1>
      <p>A Freelancers Bread and Butter.</p>
      <div>
        <Button href="/signup">Sign Up</Button>
        <Button href="/login">Login</Button>
      </div>
    </div>
  </Styles.Index>
);

export default Index;
