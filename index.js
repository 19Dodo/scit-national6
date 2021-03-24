document.getElementById("add-button").addEventListener("click", function () {

    fetch(`https://simple-json-server-scit.herokuapp.com/todo/bDorin`)

        .then((r) => r.json())
        .then(saveData);
})

function saveData(data){
    const input = document.getElementById("input").value;
    if (Object.keys(data).length === 0) {
        postMethod(input);
    } else {
        putMethod(data.todo, input, false);
    }
    
}

function postMethod(value) {
    const payload = {
        id: "bDorin",
        todo: [{
            checked: false,
            item: value,
        }]

    }

    fetch("https://simple-json-server-scit.herokuapp.com/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }).then(getMethod);
}

function putMethod(oldData, newData, checked) {
    oldData.push({
        checked: checked,
        item: newData
    })

    const payload = {
        id: "bDorin",
        todo: oldData
    }
    
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/bDorin`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(getMethod);
}


getMethod();


function getMethod() {
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/bDorin`)

        .then((r) => r.json())
        .then(renderToDoList);

}

const todoListHtml = document.querySelector("#to-do-list");

function renderToDoList(article) {
    if (Object.keys(article).length === 0) {
        return;
    }

    let todoList = article.todo;
    todoListHtml.innerText = "";

    for (let i = 0; i < todoList.length; i++) {
        let task = document.createElement("div");
        task.setAttribute("class", "task");
        task.setAttribute("id", "id-" + i);

        todoListHtml.appendChild(task);

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "task-input-checkbox");
        checkbox.setAttribute("data-index", i);
        checkbox.setAttribute("data-item", todoList[i].item);
        checkbox.checked = todoList[i].checked;
        checkbox.addEventListener("click", function (){
            fetch(`https://simple-json-server-scit.herokuapp.com/todo/bDorin`)
            .then((r) => r.json())
            .then((data) => {
                for(let i = 0; i < data.todo.length; i++){
                    if (i == this.dataset.index){
                        data.todo[i] = {
                            checked: this.checked,
                            item: this.dataset.item
                        }
                    }
                }
                
                const payload = {
                    id: "bDorin",
                    todo: data.todo
                }
                
                fetch(`https://simple-json-server-scit.herokuapp.com/todo/bDorin`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }).then(getMethod);
            });
        })

        task.appendChild(checkbox);

        let taskText = document.createElement("div");
        taskText.setAttribute("class", "task-text");
        taskText.innerText = todoList[i].item;


        task.appendChild(taskText);

        let trash = document.createElement("i");
        trash.setAttribute("class", "fas fa-trash");
        trash.setAttribute("data-index", i);
        trash.setAttribute("data-item", todoList[i].item);
        trash.addEventListener("click", function(){
            fetch(`https://simple-json-server-scit.herokuapp.com/todo/bDorin`)
            .then((r) => r.json())
            .then((data) => {
                for(let i = 0; i < data.todo.length; i++){
                    if (i == this.dataset.index){
                        data.todo.splice(i, 1);
                        document.getElementById("id-"+i).remove();
                    }
                }
                
                const payload = {
                    id: "bDorin",
                    todo: data.todo
                }
                
                fetch(`https://simple-json-server-scit.herokuapp.com/todo/bDorin`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }).then(getMethod);
            });
        });

        task.appendChild(trash);
    }
}