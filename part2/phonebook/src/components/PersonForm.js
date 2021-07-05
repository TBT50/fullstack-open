const PersonForm = ({
  handleAddPerson,
  newName,
  handleChangeName,
  newNumber,
  handleChangeNumber,
}) => {
  return (
    <form onSubmit={handleAddPerson}>
      <div className="form-group">
        <label htmlFor="person" className="form-group__label">
          Name:
        </label>
        <input
          className="form-group__input"
          type="text"
          id="person"
          value={newName}
          onChange={handleChangeName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number" className="form-group__label">
          Number:
        </label>
        <input
          className="form-group__input"
          type="text"
          id="number"
          value={newNumber}
          onChange={handleChangeNumber}
        />
      </div>
      <button type="submit" className="addPersonBtn">
        Add
      </button>
    </form>
  );
};

export default PersonForm;
