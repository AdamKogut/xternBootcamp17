const personForm=document.querySelector('form')

const renderColor = (hairColor)=>{
    const colorDiv=document.createElement('div')
    //colorDiv.innerHTML=hairColor
    colorDiv.style.backgroundColor=hairColor
    colorDiv.style.height='50px'
    colorDiv.style.width='100px'
    return colorDiv
}

const elementAdding=(arr,doc,listhead)=>{
    for(let i=0;i<arr.length;i++){
        listhead.appendChild(arr[i])
    }
    doc.appendChild(listhead)
}

const handleSubmit= (ev) => {
    ev.preventDefault()
    const form=ev.target
    const details=document.querySelector('.details')

    const personName=form.personName.value
    const hairColor=form.hairColor.value
    const age=form.age.value
    const birthplace=form.birthplace.value

    const whole=document.createElement('ul')

    const em=document.createElement('li')
    em.textContent='Name: '+ personName

    const colwords=document.createElement('li')
    colwords.textContent='Hair Color:'

    const colorDiv=renderColor(hairColor)

    const ageWords=document.createElement('li')
    ageWords.textContent='Age: '+age

    const birthWords=document.createElement('li')
    birthWords.textContent='Birthplace: '+birthplace

    details.innerHTML=''

    const arr=[em,colwords,colorDiv,ageWords,birthWords]
    elementAdding(arr,details,whole)

    /*details.innerHTML=`
        <ul>
            <li>Name: ${personName}</li>
            <li>Hair Color: ${colorDiv.outerHTML}</li>
            <li>Age: ${age}</li>
            <li>Birthplace ${birthplace}</li>
        </ul>`*/
}

personForm.addEventListener('submit',handleSubmit)