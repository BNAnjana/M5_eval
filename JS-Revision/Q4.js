// Q4. Implement a Sequential Task Runner (Using Timers + Promises)

async function runSequential(tasks, delay) {
  const results = [];

  for (let i = 0; i < tasks.length; i++) {
    try {
      // Execute the current async task
      const result = await tasks[i]();
      results.push(result);

      // Wait for the delay before the next task (skip after last task)
      if (i < tasks.length - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error) {
      // Stop execution if any task fails
      throw new Error(`Task ${i} failed: ${error.message || error}`);
    }
  }

  return results;
}

const tasks = [
  async () => {
    console.log("Task 1 running...");
    return "Result 1";
  },
  async () => {
    console.log("Task 2 running...");
    return "Result 2";
  },
  async () => {
    console.log("Task 3 running...");
    return "Result 3";
  }
];

runSequential(tasks, 1000)
  .then(results => console.log("All results:", results))
  .catch(err => console.error("Stopped:", err.message));