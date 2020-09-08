var person = {
  'name' : 'bob',
  'age' : '32',

  selfIntroduce : function () {
      for (var value of Object.values(person)) {
       console.log(value);    
      }
  },
};

person['country'] = 'canada';

person.selfIntroduce();
