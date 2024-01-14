import { useState } from "react";

export function Person() {
    const [person, setPerson] = useState({ name: 'John', age: 100 });
  
    // BAD - Don't do this!
    const handleIncreaseAgeWrong = () =>{
      // mutating the current state object
      person.age = person.age + 1;
      setPerson(person);
    };
  
    // GOOD - Do this!
    const handleIncreaseAge = () =>{
      // copy the existing person object into a new object
      // while updating the age property
      console.log("in handleIncreaseAge (before setPerson call): ", person)
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
      console.log("in handleIncreaseAge (after setPerson call): ", person);
    };

    const handleIncrease = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    }
    console.log("during render: ", person)
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
        <button onClick={handleIncreaseAgeWrong}>Increase age Wrong</button>
        <button onClick={handleIncrease}>Incr Again</button>
      </>
    );
  }
  