import './scss/style.scss'


document.addEventListener("DOMContentLoaded", function () {

    const taskInput = document.getElementById('taskInput'),
        addButton = document.getElementById('addButton'),
        list = document.getElementById('list'),
        tasks = []


    addButton.addEventListener('click', () => {
        createTask(taskInput.value)
    })

    const createTask = (text) => {

        if (tasks.some((task) => task === text)) {

            return alert('This task alreary exists!')

        } else {
            /*--------------------------------------------------------------*/
            /* Creating <li> element START
            ----------------------------------------------------------------*/

            tasks.push(text)

            let liElement = document.createElement('li')
            liElement.innerHTML = `
                <input type="checkbox">
                <span>${text}</span>
                <button class="editButton">Edit</button>
                <button class="deleteButton">X</button>
            `
            list.append(liElement)

            /*--------------------------------------------------------------*/
            /* Creating <li> element END
            ----------------------------------------------------------------*/

            /*--------------------------------------------------------------*/
            /* Delete Functionality START
            ----------------------------------------------------------------*/
            
            const deleteBtn = liElement.querySelector('.deleteButton')
            deleteBtn.addEventListener('click', function () {
                const i = tasks.indexOf(text)
                tasks.splice(i, 1)
                localStorage.setItem("tasks", JSON.stringify(tasks))
                liElement.remove()
            })

            /*--------------------------------------------------------------*/
            /* Delete Functionality END
            ----------------------------------------------------------------*/

            /*--------------------------------------------------------------*/
            /* Edit Functionality START
            ----------------------------------------------------------------*/
            
            const editBtn = liElement.querySelector('.editButton')
            editBtn.addEventListener('click', function () {
                if (this.innerText === "Edit") {
                    this.innerText = "Done"

                    const task = liElement.querySelector('span'),
                        taskText = task.innerText

                    task.remove()

                    const newInput = document.createElement('input')
                    newInput.value = taskText
                    liElement.prepend(newInput)

                } else {
                    this.innerText = "Edit"

                    const newInput = liElement.querySelector('input'),
                        newtaskText = newInput.value,
                        index = tasks.indexOf(text)

                    tasks.splice(index, 1, newtaskText)
                    console.log(tasks);
                    localStorage.setItem("tasks", JSON.stringify(tasks))

                    newInput.remove()

                    const newTask = document.createElement('span')
                    newTask.innerText = newtaskText
                    liElement.prepend(newTask)

                }
            })

            /*--------------------------------------------------------------*/
            /* Edit Functionality END
            ----------------------------------------------------------------*/
        }
    }
})







