function toDoList() {

    let div1 = document.createElement('div');
    document.body.appendChild(div1);
    div1.classList.add('widget');

    let h2 = document.createElement('h2');
    div1.appendChild(h2);
    h2.classList.add('header');
    h2.innerHTML = 'ToDoList';

    let input = document.createElement('input');
    div1.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Type your tesk...');
    input.classList.add('add_task');

    let block = document.createElement('div');
    div1.appendChild(block);
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
            text = document.createElement('div');    
        task.appendChild(checkbox);
        task.appendChild(text); 
        checkbox.classList.add('check');
        text.classList.add('text');
        text.innerHTML = inputText;

        checkbox.addEventListener('click', function() {
            checkbox.classList.toggle('check_on');
            text.classList.toggle('text_on');
        });
    };

    input.addEventListener('keyup', function(event) {
        let inputText = event.target.value,
            space = /\s+$/g;
            
        if (event.keyCode == 13 && inputText !== '' && !space.test(inputText)) {
            addTask(inputText); 
            input.value = ''; 
        }
    });   
};

window.addEventListener('load', toDoList);


