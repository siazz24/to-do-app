let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let currentTheme = localStorage.getItem('theme');

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
      const sortValue = document.getElementById('sortSelect')?.value || 'newest';
      let sortedTasks = [...tasks];

      if (sortValue === 'newest') {
        sortedTasks.reverse();
      } else if (sortValue === 'completed') {
        sortedTasks.sort((a, b) => b.completed - a.completed);
      } else if (sortValue === 'incomplete') {
        sortedTasks.sort((a, b) => a.completed - b.completed);
      }

      const list = document.getElementById('taskList');
      list.innerHTML = '';
      sortedTasks.forEach((task, index) => {
        const li = document.createElement('li');

        const row = document.createElement('div');
        row.className = 'task-row';

        const leftDiv = document.createElement('div');
        leftDiv.className = 'task-left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleComplete(index);

        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.completed) span.classList.add('completed');

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(index);

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = () => deleteTask(index);

        actions.appendChild(editBtn);
        actions.appendChild(delBtn);

        row.appendChild(leftDiv);
        row.appendChild(actions);

        const meta = document.createElement('div');
        const date = document.createElement('div');
        date.textContent = `Due: ${task.dueDate || "None"}`;
        const tag = document.createElement('span');
        tag.className = `priority ${task.priority}`;
        tag.textContent = task.priority;

        meta.appendChild(date);
        meta.appendChild(tag);
        meta.style.display = "flex";
        meta.style.justifyContent = "space-between";
        meta.style.fontSize = "12px";

        li.appendChild(row);
        li.appendChild(meta);

        list.appendChild(li);
      });
    }

    function addTask() {
      const text = document.getElementById('taskInput').value.trim();
      const dueDate = document.getElementById('dueDate').value;
      const priority = document.getElementById('priority').value;

      if (text !== '') {
        tasks.push({ text, completed: false, dueDate, priority });
        document.getElementById('taskInput').value = '';
        document.getElementById('dueDate').value = '';
        saveTasks();
        document.getElementById('addSound').play();
        renderTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    function toggleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      document.getElementById('doneSound').play();
      renderTasks();
    }

    function editTask(index) {
      const newText = prompt("Edit task:", tasks[index].text);
      if (newText !== null) {
        tasks[index].text = newText.trim();
        saveTasks();
        renderTasks();
      }
    }

    function clearAllTasks() {
      if (confirm("Are you sure you want to clear all tasks?")) {
        tasks = [];
        saveTasks();
        renderTasks();
      }
    }

    function toggleTheme() {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    function applyTheme(theme) {
      const stars = document.getElementById('stars');
      if (theme === 'dark') {
        document.body.style.background = '#121212';
        document.body.style.color = '#ffffff';
        createStars();
        stars.style.display = 'block';
      } else {
        document.body.style.background = '#f0f0f0';
        document.body.style.color = '#000000';
        stars.innerHTML = '';
        stars.style.display = 'none';
      }
      currentTheme = theme;
      localStorage.setItem('theme', theme);
    }

    function autoDetectTheme() {
      if (!currentTheme) {
        const hour = new Date().getHours();
        currentTheme = hour >= 18 || hour < 6 ? 'dark' : 'light';
      }
      applyTheme(currentTheme);
    }

    function createStars(count = 80) {
      const container = document.getElementById('stars');
      container.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(star);
      }
    }

    autoDetectTheme();
    renderTasks();