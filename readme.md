🌟To-Do List App

This is a stylish, feature-rich To-Do List web application built with **HTML, CSS, and JavaScript**. It supports task management with priority, due dates, sorting, dark/light theme toggle, sound effects, and persistent data storage via `localStorage`.


## 🚀 Features

### ✅ Core Functionalities

* **Add Tasks**: Enter a task, set a due date, and choose a priority (Low, Medium, High).
* **Edit & Delete**: Modify tasks anytime or delete them individually.
* **Mark as Complete**: Check/uncheck tasks to track their completion status.
* **Clear All Tasks**: Option to clear all tasks with a confirmation prompt.

### 🎨 UI & Theming

* **Dark/Light Theme Toggle**: Switch between themes with a button click.
* **Auto Theme Detection**: Automatically sets theme based on the current time.

  * Light mode: 6 AM to 6 PM
  * Dark mode: 6 PM to 6 AM
* **Starry Background (Night Mode)**: Animated twinkling stars in dark mode for visual appeal.

### 🔊 Sound Effects

* **Task Added Sound**: Plays a "heartbeat" sound when a task is added.
* **Task Completed Sound**: Plays a "camera click" sound when a task is marked as complete.

### 📋 Task Management Options

* **Due Date Display**: Shows the due date of each task.
* **Priority Labels**: Color-coded (Red for High, Orange for Medium, Green for Low).
* **Sort Options**:

  * Newest First
  * Oldest First
  * Completed First
  * Incomplete First

### 💾 Local Storage

* All tasks and theme preferences are stored in `localStorage`, ensuring persistence across sessions.

## 🛠 How It Works

### 📁 File Structure

```
project-root/
├── index.html
├── styles.css
├── app.js
├── Heartbeat.wav
├── camera.mp3
└── README.md
```

### 🔗 Linking Files

* The HTML file links to `styles.css` and `app.js`:

```html
<link rel="stylesheet" href="styles.css">
<script src="app.js"></script>
```

* Audio files (`Heartbeat.wav`, `camera.mp3`) are locally included via:

```html
<audio id="addSound" src="Heartbeat.wav"></audio>
<audio id="doneSound" src="camera.mp3"></audio>
```

## 📦 How to Use

1. **Clone or Download the Project** to your local machine.
2. **Place all files** (HTML, CSS, JS, and audio) in the same directory.
3. **Open `index.html`** in any modern web browser.
4. Start adding tasks!

---

## ✨ Additional Suggestions

* You can replace sound effects with your own `.wav` or `.mp3` files.
* You may expand the project to include:

  * Notifications
  * Export to CSV/PDF
  * Task reminders
  * Mobile responsiveness improvements

## 🧠 Credits

Developed by ANANYA SINGH. Inspired by clean UI and productivity-first tools.