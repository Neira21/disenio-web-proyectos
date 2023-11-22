class LearningPath {
    constructor({
      id,
      name,
      courses = [],
    }) {
      this.id = id;
      this.name = name;
      this.courses = courses;
    }
}

const DesarrolloWeb = new LearningPath({
    id: 1,
    name: 'Desarrollo Web',
    courses: ["Html", "Css", "Js"]
})

const DesarrolloMovil = new LearningPath({
    id: 2,
    name: 'Desarrollo Movil',
    courses: ["Android", "Ios", "React Native"]
})
const DesarrolloBackend = new LearningPath({
    id: 3,
    name: 'Desarrollo Backend',
    courses: ["NodeJs", "Java", "Python"]
})



class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses=[],
        learningPaths=[],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;
    }
}

const alvaro = new Student({
    name: "Alvaro",
    user: "Neira21",
    email: "alvaroneira98@gmail.com",
    twitter: "alvaroneira98@gmail.com",
    learningPaths: [DesarrolloWeb, DesarrolloMovil, DesarrolloBackend]
})
const miguelito = new Student({
    name: "Miguelito",
    user: "Miguelito",
    email: "miguel",
    twitter: "miguel",
    learningPaths: [DesarrolloWeb]
})

console.log(alvaro);
console.log(miguelito);







