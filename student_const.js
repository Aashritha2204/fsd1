function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.study = function () {
      console.log(`${this.name} is studying.`);
    };
    this.getGrade = function () {
      return this.grade;
    };
  }
  const student1 = new Student("Alice", "A");
  student1.study();
  console.log(student1.getGrade());
  