
//creating a task object
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// // Mark a task as complete
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the details of a task to the console
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the stuff out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "Wash all the clothes and put them away"); // task 1
const task3 = newTask("Breakfast", "Don't forget to feed yourself");
const tasks = [task1, task2, task3];


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
