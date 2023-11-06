fetch('persons.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
   
    data.forEach(person => {
      console.log(`Name: ${person.name}, Age: ${person.age}`);
      document.writeln("Name : ",person.name,"&nbsp & Age : ",person.age,"<br>");
    })
  })
  .catch(error => {
    console.error('Error:', error);
  });

