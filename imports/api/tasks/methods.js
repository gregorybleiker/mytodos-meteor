import { Meteor } from 'meteor/meteor';
import { Tasks } from './tasks.js';

export const initSampleData = new ValidatedMethod({
  name: 'tasks.methods.initSampleData',
  validate: null,
  run() {
    Tasks.initSampleData();
  }
});
