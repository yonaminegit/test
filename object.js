let array = [
  1,
  2,
  3
];

var person = {
  'name' : 'bob',
  'age' : '32',
  
  selfIntroduce : function () {
    for (var value of Object.values(person)) {
     console.log(value);    
    }
  },

  family : {
    father: 'Bobby',
    mother: 'Cathy',
  },

}

person['country'] = 'canada';

console.log('1.');
console.log(person.name);

console.log('2.');
console.log(person.country);

console.log('3.');
for (var value of Object.values(person)) {
  console.log(value);    
 }

 console.log('4.');
person.selfIntroduce();

console.log('5.');
for (var value of Object.values(person)) {
  console.log(value);    
 }

console.log('7.');
console.log(person.family.father);
console.log(person.family.mother);

console.log('8.');
for(var value of array){
  console.log(value);
}
