// CODE here for your Lambda Classes

class Person {
    constructor (attribute) {
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location;
        this.gender = attribute.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
            this.specialty = attributes.specialty;
            this.favoriteLanguage = attributes.favoriteLanguage;
            this.catchPhrase = attributes.catchPhrase;
        }
        demo(subject) {
            return `Today we are learning about ${subject}`
        }
        grade(student, subject) {
            return `${student.name} recieves a perfect score on ${subject}`
        }
    }

    class Student extends Person {
        constructor(attributes) {
            super(attributes);
            this.previousBackground = attributes.previousBackground;
            this.className = attributes.className;
            this.favSubjects = attributes.favSubjects;
            this.grade = attributes.grade;
        }
        listsSubjects() {
            return `${this.favoriteSubjects}`;
        }
        PRAssigntments(subject) {
            return `${this.name} has submitted a PR for ${subject}`;
        }
        sprintChallenge(subject) {
            return `${this.name} has begun sprint challenge on ${subject}`;
        }
    }

    class ProjectManager extends Instructor {
        constructor(attributes) {
            super(attributes);
            this.gradClassName = attributes.gradClassName;
            this.favInstructor = attributes.favInstructor;
        }

        standUp (channel) {
            return `${this.name} announces to ${channel}, @channel standup times`;
        }

        debugsCode (student, subject) {
            return `${this.name} debugs ${student}'s code on ${subject}.`;
        }
    }

    const sam = new Person ({
        name: "sam",
        age: "30",
        location: "Wichita, KS",
        gender: "Male",
        specialty: "JavaScript",
        favoriteLanguage: ["HTML", "CSS", "JS"],
    });

    const tony = new Instructor({
        name: "tony",
        age: 45,
        location: "Atlanta, GA",
        gender: "Male",
        specialty: "HTML",
        favoriteLanguage: ["HTML", "REACT", "JS"],
        catchPhrase: "That Sizzled my spirit"
    });

    const me = new Student({
        new: "Shayaan",
        age: "24",
        location: "Barcelona",
        gender: "Male",
        previousBackground: "Franchisee",
        className: "FSWPT4",
        favoriteSubjects: ["HTML", "CSS", "PYTHON"],
        grade: 100
    });

    const malcolm = new ProjectManager ({
        name: "Malcolm",
        age: "25",
        location: "Dallas, Texas",
        gender: "Male",
        specialty: "Singing",
        favoriteLanguage: ["JavaScript", "TypeScript", "React"],
        catchPhrase: "HA HA",
        gradClassName: "CS19",
        favInstructor: "Elvis"
    });
