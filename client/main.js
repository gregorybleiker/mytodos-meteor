import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import MyTodos from '/imports/ui/components/my-todos.js';
import InitSampleData from '/imports/ui/components/init-sample-data.jsx';

Meteor.startup(() => {
  render(<MyTodos />, document.getElementById('my-todos'));
  render(<InitSampleData />, document.getElementById('my-todos'));

});
