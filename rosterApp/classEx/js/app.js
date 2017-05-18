$(document).foundation()

class megaroster{

    constructor(){
        this.max=0
        this.studentList=document.querySelector('#student-list')
       this.setupEventListeners()
       if(JSON.parse(localStorage.getItem('roster'))){
           this.students=JSON.parse(localStorage.getItem('roster'))
           for(let i=this.students.length-1;i>=0;i--){
               const li=this.buildListItem(this.students[i])
               if(this.students[i].promoted){
                    li.classList.add('promoted')
               }
               this.prependChild(this.studentList,li)
               
           }
       }else{
           this.students=[]
       }
    }

    setupEventListeners(){
        document
            .querySelector('#new-student')
            .addEventListener('submit',this.addStudent.bind(this))
    }

    addStudent(ev){
        ev.preventDefault()
        const f=ev.target
        const student={
            id: ++this.max,
            name:f.studentName.value,
            promoted:false,
        }
        
        this.students.unshift(student)
        const li=this.buildListItem(student)
        this.prependChild(this.studentList,li)
        f.reset()

        if(student.id>this.max)
            this.max=student.id

        localStorage.setItem('roster',JSON.stringify(this.students))
    }

    prependChild(parent,child){
        parent.insertBefore(child,parent.firstChild)
    }

    buildListItem(student){
        const template=document.querySelector('.student.template')
        const li=template.cloneNode(true)
        li.querySelector('.student-name').textContent=student.name
        li.setAttribute('title',student.name)
        li.className=li.className.replace('template','')
        li.dataset.id=student.id

        li
            .querySelector('button.remove')
            .addEventListener('click',this.removeStudent.bind(this))
        li.querySelector('button.promote')
            .addEventListener('click',this.promoteStudent.bind(this))

        return li
    }

    removeStudent(ev){
        const btn=event.target
        //experimental, wont work with android
        btn.closest('.student').remove()
        //TODO: figure out this
        const li=btn.closest('.student')
        for(let i=0;i<this.students.length;i++){
            let currId=this.students[i].id.toString()
            if(currId===li.dataset.id){
                this.students.splice(i,1)
                break
            }
        }
        localStorage.setItem('roster',JSON.stringify(this.students))
    }

    promoteStudent(ev){
        const btn=event.target
        const li=btn.closest('.student')
        for(let i=0;i<this.students.length;i++){
            if(this.students[i].id==btn.closest('.student').dataset.id){
                this.students[i].promoted=!this.students[i].promoted
                if(this.students[i].promoted){
                    li.classList.add('promoted')
                    this.students[i].promoted=true
                }else{
                    li.classList.remove('promoted')
                    this.students[i].promoted=false
                }
            }
        }
        localStorage.setItem('roster',JSON.stringify(this.students))
    }
}
const roster=new megaroster()
