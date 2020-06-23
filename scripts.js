function toDoList() {

    let widget = document.createElement('div');
    document.body.appendChild(widget);
    widget.classList.add('widget');

    let h2 = document.createElement('h2');
    widget.appendChild(h2);
    h2.classList.add('header');
    h2.innerHTML = 'ToDoList';

    let input = document.createElement('input');
    widget.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Type your task...');
    input.classList.add('add_task');

    let block = document.createElement('div');
    widget.appendChild(block);
    block.classList.add('tasks');


    function addTask(inputText) {        
        let task = document.createElement('div');    
        task.classList.add('task_item');
        
        let arrTasks = block.querySelectorAll('.task_item');
        for(let i = 0; i <= arrTasks.length; i++) {
            if (arrTasks == []) block.appendChild(task);
            else block.insertBefore(task, arrTasks[0]);
        }
    
        let checkbox = document.createElement('div'),
            text = document.createElement('div'),
            edit = document.createElement('button');    
        task.appendChild(checkbox);
        task.appendChild(text);
        task.appendChild(edit);  
        checkbox.classList.add('check');
        text.classList.add('text');
        edit.classList.add('edit_button');
        text.innerHTML = inputText;
        edit.innerHTML = 'edit';


        checkbox.addEventListener('click', function() {
            checkbox.classList.toggle('check_on');
            text.classList.toggle('text_on');
        });


        edit.addEventListener('click', function() {
            text.innerHTML = prompt('Edit your task', inputText);
        });


        del.addEventListener('click', function() {
                task.remove();
                clearBlock.classList.remove('display_none');
                del.classList.add('display_none');
        });
    };


    input.addEventListener('keyup', function(event) {
        let inputText = event.target.value,
            notSpace = /[\w(\$\%\&\^\*\@\#)(а-яА-ЯёЁ)\d]/g;
            
        if (event.keyCode == 13 && inputText !== '' && notSpace.test(inputText)) {
            addTask(inputText); 
            input.value = ''; 
            clearBlock.classList.add('display_none');
            del.classList.remove('display_none');
        }
    });   


    let clearBlock = document.createElement('div');
    block.appendChild(clearBlock);
    clearBlock.classList.add('clear');
    clearBlock.innerHTML = 'No tasks';

    let del = document.createElement('button');
    block.appendChild(del);
    del.classList.add('del', 'display_none');
    del.innerHTML = 'Delete';
};

window.addEventListener('load', toDoList);


