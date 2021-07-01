const Course = ({ course }) => {
  if (course.parts && course.parts.length > 0) {
    const sum = course.parts.reduce((prev, cur) => {
      return prev + cur.exercises;
    }, 0);

    return (
      <>
        <h2>{course.name}</h2>
        <ul>
          {course.parts.map((part) => {
            return (
              <li key={part.id}>
                {part.name}:<span>{part.exercises}</span>
              </li>
            );
          })}
        </ul>
        <p>
          total number of exercises: <span>{sum}</span>
        </p>
      </>
    );
  } else {
    return (
      <>
        <h2>{course.name}</h2>
        <p>Didn't provide parts</p>
      </>
    );
  }
};

export default Course;
