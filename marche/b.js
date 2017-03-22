function Cat(name){
  this.name: name,
  age: 2,
  purr: function(){
    console.log('purrrr');
  }
};

console.log(cat);
cat.purr();

function catMaker(time){
  return {
    curTime: time,
    name: 'Bob',
    age: 2,
    purr: function(){
      console.log('purrrr');
    }
  };
}

cat.purr();
bob = catMaker();
bob.purr();
