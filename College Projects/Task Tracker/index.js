function addTask(){
    let input = document.querySelector('.taskInput');
    let task = input.value;
    input.value = '';
    if(task === ''){
        alert('Please enter a task');
        return;
    }
    let taskList = document.querySelector('.taskList');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);
}