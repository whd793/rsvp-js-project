const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul =  document.getElementById('invitedList');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const span = document.createElement('span');
    if (input.value === '') {
        
    } else {
    span.textContent = input.value;
    li.appendChild(span);
        
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.style.border = '5px solid black';
    removeButton.type = "submit";
    li.appendChild(removeButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.style.border = '5px solid black';
    editButton.type = "submit";
    li.appendChild(editButton);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);


    ul.appendChild(li);

    input.value = '';
    }
})

ul.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    const li = e.target.parentNode;
    const ul = e.target.parentNode.parentNode;
    
    if (e.target.textContent === 'remove') {
        //remove the li element, the parent node of e.target
        ul.removeChild(li);
    } else if (e.target.textContent === 'edit') {
        const editinput = document.createElement('input');
        editinput.type = 'text';

        const span = li.querySelector('span');
        editinput.value = span.textContent;
        li.insertBefore(editinput, span);
        li.removeChild(span);
        e.target.textContent = 'save';


        // li.appendChild(editinput);

        // const savebutton = document.createElement('button');
        // savebutton.textContent = 'save';
        // li.appendChild(savebutton);
    } else if (e.target.textContent === 'save') {
      const input = li.querySelector('input');
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      input.remove();
      e.target.textContent = "edit";
    } 

})
// button.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const li= e.target.parentNode;
//     ul.removeChild(li);
// })