const personForm=document.querySelector('form')

const renderColor = (hairColor)=>{
    const colorDiv=document.createElement('div')
    //colorDiv.innerHTML=hairColor
    colorDiv.style.backgroundColor=hairColor
    colorDiv.style.height='50px'
    colorDiv.style.width='100px'
    return colorDiv
}

const renderItem = (name,value)=>{
    const list=document.createElement('li')
    list.innerHTML=`${name}: ${value}`
    return list
}

const elementAdding=(/*arr,*/doc,person)=>{
    const listhead=document.createElement('ul')

    //using form.elements and arrays
     Array.from(person).map((input,_i,_formElements)=>{
        if(input.value){
            const li=renderItem(input.name,input.value)
            listhead.appendChild(li)
        }
    })
    //using maps
    /*Object.keys(person).map((key,i,keys)=>{
        const li=renderItem(key,person[key])
        listhead.appendChild(li)
    })*/

    //using objects
    /*const keys=Object.keys(person)
    for(let i=0;i<Object.keys(person).length;i++){
        let li=renderItem(keys[i],person[keys[i]])
        listhead.appendChild(li)
    }*/
    //my shortened homework code
    /*let i=0
    for(;i<arr.length-1;i++){
        const em=document.createElement('li')
        if(arr[i].name!='hairColor'){
            em.textContent=arr[i].name+': '+arr[i].value
            listhead.appendChild(em)
        }else {
            em.textContent='hair color:'
            listhead.appendChild(em)
            listhead.appendChild(renderColor(arr[i].value))
        }
    }*/
    /*const em=document.createElement('li')
    em.textContent='hair color:'
    listhead.appendChild(em)
    listhead.appendChild(colorPatch)
    i++
    for(;i<arr.length-1;i++){
        const ema=document.createElement('li')
        ema.textContent=arr[i].name+': '+arr[i].value
        listhead.appendChild(ema)
    }*/
    doc.appendChild(listhead)
}

const handleSubmit= (ev) => {
    ev.preventDefault()
    const form=ev.target
    const details=document.querySelector('.details')

    //hard code things
    /*const person = {
        personName: form.name.value,
        hairColor: renderColor(form.hairColor.value).outerHTML,
        age: form.age.value,
        birthplace: form.birthplace.value,
    }*/
    
    //const personName=form.personName.value
    //const hairColor=form.hairColor.value
    /*const age=form.age.value
    const birthplace=form.birthplace.value

    const em=document.createElement('li')
    em.textContent='Name: '+ personName

    const colwords=document.createElement('li')
    colwords.textContent='Hair Color:'*/

    //const colorDiv=renderColor(hairColor)

    /*const ageWords=document.createElement('li')
    ageWords.textContent='Age: '+age

    const birthWords=document.createElement('li')
    birthWords.textContent='Birthplace: '+birthplace*/

    elementAdding(/*form*/details,form.elements)
    //using innerHTML
    /*details.innerHTML=`
        <ul>
            <li>Name: ${personName}</li>
            <li>Hair Color: ${colorDiv.outerHTML}</li>
            <li>Age: ${age}</li>
            <li>Birthplace ${birthplace}</li>
        </ul>`*/
}

personForm.addEventListener('submit',handleSubmit)