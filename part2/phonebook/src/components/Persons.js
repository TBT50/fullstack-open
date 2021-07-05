const Persons = ({ persons, filter }) => {
  return (
    <ul>
      {persons
        .filter((person) => person.name.includes(filter))
        .map((person, i) => (
          <li key={i}>
            {person.name}:<span>{person.number}</span>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
