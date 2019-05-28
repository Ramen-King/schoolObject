/**
 * 1 Represent our school {branch term class students}
 * 2 upload file to girhub repo
 */

 

function Student(name, status, term, skillLevel){
    this.name = name
    this.status = status
    this.term = term
    this.skillLevel = skillLevel
 }
 let student1 = new Student('Jimmy', 'Student', 3, 'Beginner')
 let student2 = new Student('Manish', 'Student', 3, 'Beginner')
 let student3 = new Student('Alex', 'Student', 3, 'Beginner')
 let student4 = new Student('Mintae', 'Student', 3, 'Beginner')
 
 let students = [student1, student2, student3, student4]


 console.log(students)//?

 let Stud = {
     school: 'Code Immersives',
     Profile(name, status, term, skillLevel){
         this.name = name
         this.status = status
         this.term = term
         this.skillLevel = skillLevel
     }
 }


