console.clear();

const buttonAdd = document.querySelector('[data-btn-add]');
const areaInput = document.querySelector('[data-input]');
const list = document.querySelector('[data-todo-list]');
const footer = document.querySelector('[data-footer]');


buttonAdd.addEventListener('click', todoGenerate);
areaInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13){
        todoGenerate();
    }
}); 

function todoGenerate(){
    const content = areaInput.value;

    if(content.trim()){
        const todoItem = document.createElement('li');
        todoItem.classList.add('item');
        todoItem.innerText = content;
        list.appendChild(todoItem);
        areaInput.value = '';

        showFooter();

        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('item--done');
        });

        todoItem.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            todoItem.remove();
            showFooter();
        });
    }
}

function showFooter(){
    if(!list.hasChildNodes()){
        footer.classList.remove('footer--show');
    }else{
        footer.classList.add('footer--show');
    }
}

