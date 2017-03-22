var personGreets = function(name) {
  return function(anotherName) {
    console.log(name + ' says hi to ' + anotherName);
  };
}

var bob = personGreets('bob');
bob('ross');

var catBuilder = function(name){
  var cat = {
    name: name,
    age: 36,
    favFood: function(p){console.log(p);}
  };
  return cat;
}

var raob = catBuilder('bobbert').favFood('catnip');
