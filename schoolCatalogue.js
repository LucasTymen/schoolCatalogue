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

  set numberOfStudents(value) {
    if (value.isNaN()) {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      this._numberOfStudents = value;
    }
  }

  quickFacts() {
    console.log(
      `${school.name} educates ${numberOfStudents} students at the ${level} school level`
    );
  }

  static pickSubtituteTeacher(substituteTeachers) {
    const randInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInt];
  }
}

class PrimarySchool extends School {
  constructor(name) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School{
  constructor(name){
    super(name, "HighSchool", numberOfStudents)
    this._sportsTeam = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
