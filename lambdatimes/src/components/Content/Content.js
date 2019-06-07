import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

// Once the component has mounted, get the data and reflect that data on the state.
//1. CDM setState to reference the arrays in data.js file

// this function should take in the tab and update the state with the new tab.
//2. created changeTab variable and set to tab
//3. set state of selected to changeTab

/* We're going to make this function more dynamic by using it to filter out our cards 
  for when a tab is selected. 
  Your algorithim for the logic here is as follows:
    - if the selected tab is 'all' it should return all 
      of the items from cardData.
    - else, it should only return those cards whose 'tab' matched this.state.selected.*/
//4. to filter cards by selected tab:
//        - IF selected key:value from state is equal to all THEN return all cards
//        - ELSE create activeCards array which is just the cards array from state and filter the new array
//        - RETURN only the cards whose tab is equal to the selected value from state 

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    const changeTab = tab;
    this.setState({selected: changeTab})
  };

  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      let activeCards = [...this.state.cards];
      activeCards = activeCards.filter(card => {
        return card.tab === this.state.selected;
      })
      return activeCards;
    }
  }

  render() {
    return (
      <div className="content-container">
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
