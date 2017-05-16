const personForm=document.querySelector('form')

const renderColor = (hairColor)=>{
    const colorDiv=document.createElement('div')
    //colorDiv.innerHTML=hairColor
    colorDiv.style.backgroundColor=hairColor
    colorDiv.style.height='50px'
    colorDiv.style.width='100px'
    return colorDiv
}

const elementAdding=(arr,doc,listhead,colorPatch)=>{
    let i=0
    for(;i<arr.length,arr[i].name!='hairColor';i++){
        const em=document.createElement('li')
        em.textContent=arr[i].name+': '+arr[i].value
        listhead.appendChild(em)
    }
    const em=document.createElement('li')
    em.textContent='hair color:'
    listhead.appendChild(em)
    listhead.appendChild(colorPatch)
    i++
    for(;i<arr.length-1;i++){
        const ema=document.createElement('li')
        ema.textContent=arr[i].name+': '+arr[i].value
        listhead.appendChild(ema)
    }
    doc.appendChild(listhead)
}

const handleSubmit= (ev) => {
    ev.preventDefault()
    const form=ev.target
    const details=document.querySelector('.details')

    const whole=document.createElement('ul')
    /*for(let i=0;i<form.length;i++){
        
    }*/
    //const personName=form.personName.value
    const hairColor=form.hairColor.value
    /*const age=form.age.value
    const birthplace=form.birthplace.value

    

    const em=document.createElement('li')
    em.textContent='Name: '+ personName

    const colwords=document.createElement('li')
    colwords.textContent='Hair Color:'*/

    const colorDiv=renderColor(hairColor)

    /*const ageWords=document.createElement('li')
    ageWords.textContent='Age: '+age

    const birthWords=document.createElement('li')
    birthWords.textContent='Birthplace: '+birthplace*/

    details.innerHTML=''

    elementAdding(form,details,whole,colorDiv)

    /*details.innerHTML=`
        <ul>
            <li>Name: ${personName}</li>
            <li>Hair Color: ${colorDiv.outerHTML}</li>
            <li>Age: ${age}</li>
            <li>Birthplace ${birthplace}</li>
        </ul>`*/
}

personForm.addEventListener('submit',handleSubmit)