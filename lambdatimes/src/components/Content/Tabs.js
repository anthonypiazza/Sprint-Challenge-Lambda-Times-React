import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

//1. Mapped over tabs which derived from tabsData from state
//2. passed it index for key and created a new Tab component for each iteration
//   with props passed for each Tab to use
//3. validated PropTypes used in this component:
//   tabs: which is an array made up of strings
//   selectedTab: is a string from state

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) => (
          <Tab key={index} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes={
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string
}

export default Tabs;
