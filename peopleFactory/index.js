const personForm=document.querySelector('form')

const renderColor = (hairColor)=>{
    const colorDiv=document.createElement('div')
    //colorDiv.innerHTML=hairColor
    colorDiv.style.backgroundColor=hairColor
    colorDiv.style.height='50px'
    colorDiv.style.width='100px'
    return colorDiv
}

const elementAdding=(arr,doc)=>{
    const listhead=document.createElement('ul')
    let i=0
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
    }
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

    /*for(let i=0;i<form.length;i++){
        
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

    elementAdding(form,details)

    /*details.innerHTML=`
        <ul>
            <li>Name: ${personName}</li>
            <li>Hair Color: ${colorDiv.outerHTML}</li>
            <li>Age: ${age}</li>
            <li>Birthplace ${birthplace}</li>
        </ul>`*/
}

personForm.addEventListener('submit',handleSubmit)