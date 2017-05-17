$(document).foundation()

const megaroster={
    max:0,
    studentList:document.querySelector('#student-list'),
    students:[],

    init(){
        //can put this.max=0 here to replace max above
        document
            .querySelector('#new-student')
            .addEventListener('submit',this.addStudent.bind(this))
    },

    addStudent(ev){
        ev.preventDefault()
        const f=ev.target
        const student={
            id: ++this.max,
            name:f.studentName.value,
        }
        
        this.students.reverse()
        this.students.push(student)
        this.students.reverse()
        const li=this.buildListItem(student)
        this.studentList.insertBefore(li,this.studentList.firstChild)
        f.reset()
    },

    buildListItem(student){
        const li=document.createElement('li')
        li.textContent=student.name
        li.dataset.id=student.id
        return li
    },
}
megaroster.init()
