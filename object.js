var person = {
  'name' : 'bob',
  'age' : '32',
  
  family : {
    father: 'Bobby',
    mother: 'Cathy',
  },

}

person['country'] = 'canada';

console.log(person.family.father);
console.log(person.family.mother);
