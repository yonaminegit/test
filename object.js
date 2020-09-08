var person = {
  'name' : 'bob',
  'age' : '32',
};

person['country'] = 'canada';

for (var value of Object.values(person)) {
  console.log(value);    
}
