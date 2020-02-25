var users = [
    {
      name: "Michael",
      age: 37
    },
    {
      name: "Jhon",
      age: 30
    },
    {
      name: "David",
      age: 27
    },
    {
      name: "Juan",
      age: 15
    }
  ]
  
  for (var u in users){
    if(users[u].name == "Jhon"){
      console.log(users[u].age);
    }
  }
  
  console.log(users[0].name);
  
  for (var u in users){
    console.log(users[u].name,users[u].age);
  }
  for (var u in users){
    if(users[u].age > 18){
      console.log(users[u].name);
    }
  }