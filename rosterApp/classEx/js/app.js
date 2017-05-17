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
        
        this.students.unshift(student)
        const li=this.buildListItem(student)
        this.prependChild(this.studentList,li)
        f.reset()
    },

    prependChild(parent,child){
        parent.insertBefore(child,parent.firstChild)
    },

    buildListItem(student){
        const li=document.createElement('li')
        li.textContent=student.name
        li.dataset.id=student.id
        return li
    },
}
megaroster.init()
