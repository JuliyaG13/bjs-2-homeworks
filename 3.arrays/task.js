function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; 
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.marks) return; 
    const validMarks = marksToAdd.filter(mark => mark >= 1 && mark <= 5); 
    this.marks.push(...validMarks); 
};

Student.prototype.getAverage = function() {
    if (!this.marks || this.marks.length === 0) return 0; 
    const total = this.marks.reduce((sum, mark) => sum + mark, 0); 
    return total / this.marks.length; 
};

Student.prototype.exclude = function(reason) {
    delete this.subject; 
    delete this.marks; 
    this.excluded = reason; 
};

Student.prototype.getInfo = function() {
    return `${this.name}, ${this.gender}, ${this.age} years old`;
};

Student.prototype.getMarksCount = function() {
    return this.marks.length;
};

Student.prototype.getBestMark = function() {
    return Math.max(...this.marks);
};
