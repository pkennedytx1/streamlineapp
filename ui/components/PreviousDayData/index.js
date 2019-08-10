import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { PreviousDayDataStyle } from './styles';
import PreviousDayChartOne from '../PreviousDayDataCharts';

const PreviousDayData = () => (
  <PreviousDayDataStyle>
    <h3>Previous Day Workflow</h3>
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="-1">
        <PreviousDayChartOne />
      </Tab>
      <Tab eventKey={2} title="-2">
        Tab 2 content
      </Tab>
      <Tab eventKey={3} title="-3">
        Tab 3 content
      </Tab>
    </Tabs>
  </PreviousDayDataStyle>
);

export default PreviousDayData;
