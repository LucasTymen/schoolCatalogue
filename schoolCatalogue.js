class School {
  constructor(name) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._numberOfStudents;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (this._numberOfStudents === "number") {
      return this._numberOfStudents;
    } else {
      return "Invalid input: numberOfStudents must be set to a Number.";
    }
  }
}
