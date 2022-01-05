

// example of how a todo item would be
todoItem = {
  idTodoItem: 1,
  title: "Go for a walk",
  description: "",
  dueDate: "today",
  priority: "high",
  repeatWeekly: true,
  done: false,
  notes: " some longer text to explain about the matter",
  project: ""
}


// example of how a project would be
project = {
  idProject: 1,
  name: "work related",
  todos: [{title:"todo 1"}, {title:"todo 2"}, {title:"todo 3"}],

  addTodo: function(todo) {
    this.todos.push(todo);
  },

  showTodos: function() {
    this.todos.forEach(todo => console.log(todo));
  }
}

app = {
  projects: [{name: "school"}, {name: "work"}, {name: "house chores"}],

  addProject: function (project) {
    this.projects.push(project);
  },

  showProjects: function () {
    this.projects.forEach(project => console.log(project));
  }
}
// console.log(todoItem);

function createTodoItem(id, title, description, dueDate, priority, repeatWeekly, done, notes, project) {
  return {
    id,
    title,
    description,
    dueDate,
    priority,
    repeatWeekly,
    done,
    notes,
    project
  }
}

let todo1 = new createTodoItem(1,"titulo", 'la descirption', '3/8/20','high', true, false, "algunas notas", "escuela");

console.log(todo1);
