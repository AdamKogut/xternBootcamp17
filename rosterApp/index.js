const App={
    

    init(){
        const personForm=document.querySelector('form')
        personForm.addEventListener('submit',this.handleSubmit.bind(this))
        //this.handlesubmit.bind(this) can also be (ev)=>this.handleSubmit(ev)
    },
    renderItem(name,value){
        const list=document.createElement('li')
        list.innerHTML=`${name}: ${value}`
        return list
    },

    elementAdding(/*arr,*/doc,person){
        const listhead=document.createElement('ul')

        //using form.elements and arrays
        Array.from(person).map((input,_i,_formElements)=>{
            if(input.value){
                let value=input.value
                if(input.type==='color')
                    value=this.renderColor(value).outerHTML
                const li=this.renderItem(input.name,value)
                listhead.appendChild(li)
            }
        }),
        doc.appendChild(listhead)
    },
    handleSubmit (ev) {
        ev.preventDefault()
        const form=ev.target
        const details=document.querySelector('.listing')
        const current=details.innerHTML
        details.innerHTML=``
        this.elementAdding(/*form*/details,form.elements)
        details.innerHTML+=current
    },
}
App.init()