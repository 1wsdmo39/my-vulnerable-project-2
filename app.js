const _ = require('lodash');

// 취약한 Lodash 함수 사용
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const userNames = _.map(users, 'name');
console.log('User Names:', userNames);
