const students = [
    {
        name: "Anna",
        sex: "f",
        grades: [4.5, 3.5, 4]
    },
    {
        name: "Dennis",
        sex: "m",
        country: "Germany",
        grades: [5, 1.5, 4]
    },
    {
        name: "Martha",
        sex: "f",
        grades: [5, 4, 2.5, 3]
    },
    {
        name: "Brock",
        sex: "m",
        grades: [4, 3, 2]
    }
];
// Compute female student results - return verified results
// const femaleStudentsResults = [];
// for (const student of students) {
//     if (student.sex === "f") {
//         let gradesSum = 0;
//         for (const grade of student.grades) {
//             gradesSum += grade;
//         }
//         const averageGrade = gradesSum / student.grades.length;
//         femaleStudentsResults.push({
//             name: student.name,
//             avgGrade: averageGrade
//         });
//     }
// }

const isFemale = student => student.sex === "f";
const average = array => array.reduce((sum, x) => sum + x, 0) / array.length;
const femaleStudentsResults = (students) => {
    const femaleStudentsResults = [];
    students.filter(x => isFemale(x)).map(x => femaleStudentsResults.push({
        name: x.name,
        avgGrade: average(x.grades)
    }));
    return femaleStudentsResults;
}

console.log(femaleStudentsResults(students));