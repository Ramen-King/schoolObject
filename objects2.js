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
 let student = new Student('Jimmy', 'Student', 3, 'Beginner')

 console.log(student)

 let Student1 = {
     school: 'Code Immersives',
     name(){
         this.name
     }, 
     status(){
         this.status
     },
     term(){
        this.term
     },
     skillLevel(){
         this.skillLevel
     }
 }

let student