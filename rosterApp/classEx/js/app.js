$(document).foundation()

const megaroster={
    max:0,
    studentList:document.querySelector('#student-list'),

    init(){
        //can put this.max=0 here to replace max above
       this.setupEventListeners()
       if(JSON.parse(localStorage.getItem('roster'))!=null){
           this.students=JSON.parse(localStorage.getItem('roster'))
           for(let i=0;i<this.students.length;i++){
               this.prependChild(this.studentList,this.buildListItem(this.students[i]))
           }
       }else{
           this.students=[]
       }
    },

    setupEventListeners(){
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

        localStorage.setItem('roster',JSON.stringify(this.students))
    },

    prependChild(parent,child){
        parent.insertBefore(child,parent.firstChild)
    },

    buildListItem(student){
        const template=document.querySelector('.student.template')
        const li=template.cloneNode(true)
        li.querySelector('.student-name').textContent=student.name
        li.className=li.className.replace('template','')
        li.dataset.id=student.id

        li
            .querySelector('button.remove')
            .addEventListener('click',this.removeStudent.bind(this))
        li.querySelector('button.promote')
            .addEventListener('click',this.promoteStudent.bind(this))

        return li
    },

    removeStudent(ev){
        const btn=event.target
        //experimental, wont work with android
        const num=btn.closest('.student').dataset.id
        btn.closest('.student').remove()
        //TODO: figure out this
        this.students.splice(this.studentList.length+1-num,1)
        localStorage.setItem('roster',JSON.stringify(this.students))
    },

    promoteStudent(ev){
        const btn=event.target
        btn.closest('.student').className=btn.closest('.student').className.replace('check','created')
    },
}
megaroster.init()
