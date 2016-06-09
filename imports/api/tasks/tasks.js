import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('Tasks');

Tasks.initSampleData = function() {
  Tasks.remove({});
  Tasks.insert({name: "Testtask 1"});
  Tasks.insert({name: "Testtask 2"});
  Tasks.insert({name: "Testtask 3"});
  Tasks.insert({name: "Testtask 4"});
}
