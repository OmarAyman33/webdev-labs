const add_btn = document.getElementById("add_btn");
const task_input = document.getElementById("task_input");
const tasks = document.getElementById("tasks");

const task_list = [];

add_btn.addEventListener("click", function() {
    const task_text = task_input.value;
    task_list.push(task_text);
    tasks.textContent = ""; // clearing the tasks div before rendering the new list
    for(task of task_list){
        const task_card = document.createElement("div");
        task_card.className = "card";
        task_card.textContent = task;
        tasks.appendChild(task_card);
    }
    task_input.value = ""; // removing the input after adding it to the list
});