$(document).foundation()

class megaroster{
    constructor(){
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
           this.max=JSON.parse(localStorage.getItem('maxNum'))
       }else{
           this.students=[]
           this.max=0
       }
    }

    setupEventListeners(){
        document
            .querySelector('#new-student')
            .addEventListener('submit',this.addStudent.bind(this))
        document
            .querySelector('.student-name')
            .addEventListener('submit',this.changeName.bind(this))
    }

    addStudent(ev){
        ev.preventDefault()
        const f=ev.target
        this.max++
        const student={
            id: this.max,
            name:f.studentName.value,
            promoted:false,
        }
        
        this.students.unshift(student)
        const li=this.buildListItem(student)
        this.prependChild(this.studentList,li)
        f.reset()

        if(student.id>this.max)
            this.max=student.id
        localStorage.setItem('maxNum',JSON.stringify(this.max))
        localStorage.setItem('roster',JSON.stringify(this.students))
    }

    changeName(student,ev){
        student.name=ev.target.textContent
        localStorage.setItem('roster',JSON.stringify(this.students))
        //inefficient
        /*const f=ev.target
        const li=f.closest('.student-name')
        for(let i=0;i<this.students.length;i++){
            if(student.name===this.students[i].name){
                student.name=li.innerHTML
                this.students[i].name=li.innerHTML
                localStorage.setItem('roster',JSON.stringify(this.students))
            }
        }*/
    }

    prependChild(parent,child){
        parent.insertBefore(child,parent.firstChild)
    }

    buildListItem(student){
        const template=document.querySelector('.student.template')
        const li=template.cloneNode(true)
        li.querySelector('.student-name').textContent=student.name
        li.setAttribute('title',student.name)
        li.className=li.className.replace('template','').trim()
        li.dataset.id=student.id

        this.setupActions(li,student)

        return li
    }

    setupActions(li,student){
        li
            .querySelector('button.remove')
            .addEventListener('click',this.removeStudent.bind(this))
        li.querySelector('button.promote')
            .addEventListener('click',this.promoteStudent.bind(this))
        li.querySelector('button.up')
            .addEventListener('click',this.moveUp.bind(this,student))
        li.querySelector('button.down')
            .addEventListener('click',this.moveDown.bind(this,student))
        li.querySelector('[contenteditable]')
            .addEventListener('blur',this.changeName.bind(this, student))
        li.querySelector('[contenteditable]')
            .addEventListener('keypress',this.saveOnEnter.bind(this))
    }

    saveOnEnter(ev){
        if(ev.key=='Enter'){
            ev.preventDefault()
            ev.target.blur()
        }
    }

    moveUp(student,ev){
        const btn=ev.target
        const li=btn.closest('.student')

        const index=this.students.findIndex((currentStudent,i) => {
            return currentStudent.id==student.id
        })
        if(index>0){
            const pstudent=this.students[index-1]
            this.students[index-1]=this.students[index]
            this.students[index]=pstudent

            this.studentList.insertBefore(li,li.previousElementSibling)
            localStorage.setItem('roster',JSON.stringify(this.students))
        }
        
    }

    moveDown(student,ev){
        const btn=ev.target
        const li=btn.closest('.student')

        const index=this.students.findIndex((currentStudent,i)=>{
            return currentStudent.id===student.id
        })
        if(index<this.students.length-1){
            const pstudent=this.students[index+1]
            this.students[index+1]=this.students[index]
            this.students[index]=pstudent

            this.studentList.insertBefore(li,li.nextElementSibling.nextElementSibling)
        }
        localStorage.setItem('roster',JSON.stringify(this.students))
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
