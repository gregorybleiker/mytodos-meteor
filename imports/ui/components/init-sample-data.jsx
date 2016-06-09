import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks/tasks.js';

import { initSampleData } from '/imports/api/tasks/methods.js';

export default class InitSampleData extends React.Component {

  constructor(props) {
    Meteor.subscribe('Tasks.all');
    super(props);
  }
  initData(event) {
    initSampleData.call();

    event.preventDefault();
  }

  render() {
    if(Meteor.isDevelopment)
{
    return (
      <div>
        <button onClick={this.initData}>Init Sample Data</button>
      </div>)
  }
}
}
