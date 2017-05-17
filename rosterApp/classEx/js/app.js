$(document).foundation()

const megaroster={
    max:0,

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
        
        this.buildListItem(student)
    },

    buildListItem(student){
        console.log(student)
    },
}
megaroster.init()
