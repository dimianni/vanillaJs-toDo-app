import './scss/style.scss'


document.addEventListener("DOMContentLoaded", function () {

    const taskInput = document.getElementById('taskInput'),
        addButton = document.getElementById('addButton'),
        list = document.getElementById('list'),
        tasks = []


    console.log(localStorage.getItem("tasks"));
    if (localStorage.getItem("tasks")){
        const tasks = JSON.parse(localStorage.getItem("tasks"))

        console.log(tasks);
        tasks.forEach(task => {
            let liElement = document.createElement('li')
            liElement.classList.add('liElement')
            liElement.innerHTML = `
        <span>${task}</span>
        <button class="editButton">Edit</button>
        <button class="deleteButton">X</button>
        `
            list.append(liElement)
        })
    }






    addButton.addEventListener('click', () => {
        createTask(taskInput.value)
        deleteTask()
        editTask()
    })

    const createTask = (text) => {
        tasks.push(text)
        localStorage.setItem("tasks", JSON.stringify(tasks))

        let liElement = document.createElement('li')
        liElement.classList.add('liElement')
        liElement.innerHTML = `
        <span>${text}</span>
           <button class="editButton">Edit</button>
            <button class="deleteButton">X</button>
    `
        list.append(liElement)
    }


    const deleteTask = () => {

        const deleteButtons = document.querySelectorAll('.deleteButton')

        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', function () {

                const taskText = this.parentElement.querySelector('span').innerText
                const newTasks = tasks.filter(task => task !== taskText)
                localStorage.setItem("tasks", newTasks)
                console.log(localStorage.getItem("tasks"));


                this.parentElement.remove()
            })
        })
    }

    const editTask = () => {
        const editButtons = document.querySelectorAll('.editButton')
        editButtons.forEach(editButton => {
            editButton.addEventListener('click', function () {

                const parent = this.parentElement;

                if (this.innerText === "Edit") {
                    this.innerText = "Done"

                    const task = parent.querySelector('span')
                    const taskText = task.innerText

                    task.remove()

                    const newInput = document.createElement('input')
                    newInput.value = taskText
                    parent.prepend(newInput)

                } else {
                    this.innerText = "Edit"

                    const newInput = parent.querySelector('input')
                    const newtaskText = newInput.value

                    newInput.remove()

                    const newTask = document.createElement('span')
                    newTask.innerText = newtaskText
                    parent.prepend(newTask)

                }

            })
        })
    }



  
})







