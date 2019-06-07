import React from 'react';
import PropTypes from 'prop-types';

//Using your props, determine if the 'tab' prop matches the 'selectedTab' prop
//if they match, the className should be: 'tab active-tab', if not then just 'tab'

//1. created variable activeTab and set to false as a default
//2. if the current tab is equal to the selected tab then change activeTab to true
//3. to declare the class I bracketed for the current tab and added ternary operators that say:
//        IF  activeTab is true, THEN use 'tab active-tab' class, ELSE use 'tab' class
//4. replaced dummy clickhandler with props passed function selectTabHandler.
//5. passed in tab as an argument per instruction from props
//6. added and imported proptypes 

const Tab = props => {
  let activeTab = false;
  if (props.tab === props.selectedTab) {
    activeTab = true;
  }
  return (
    <div
      className={activeTab ? 'tab active-tab' : 'tab'}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes ={
  tab: PropTypes.string,
  selectedTab: PropTypes.string
}

export default Tab;
