import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { PreviousDayDataStyle } from './styles';
import PreviousDayChartOne from '../PreviousDayDataChartOne';
import PreviousDatChartTwo from '../PreviousDayDataChartTwo';

const PreviousDayData = () => (
  <PreviousDayDataStyle>
    <h3>Previous Day Workflow</h3>
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="-1">
        <PreviousDayChartOne />
      </Tab>
      <Tab eventKey={2} title="-2">
        <PreviousDatChartTwo />
      </Tab>
      <Tab eventKey={3} title="-3">
        <h3>Hello</h3>
      </Tab>
    </Tabs>
  </PreviousDayDataStyle>
);

export default PreviousDayData;
