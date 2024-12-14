def display_menu():
    """Displays the menu options for the user."""
    print("\n=== To-Do List Menu ===")
    print("1. View Tasks")
    print("2. Add Task")
    print("3. Mark Task as Done")
    print("4. Delete Task")
    print("5. Exit")

def view_tasks():
    """Displays all tasks with their status."""
    if not tasks:
        print("\nNo tasks in the list.")
    else:
        print("\nYour To-Do List:")
        for i, task in enumerate(tasks, 1):
            status = "✅" if task['done'] else "❌"
            print(f"{i}. {task['task']} - {status}")

def add_task():
    """Adds a new task to the list."""
    task_name = input("\nEnter the task: ")
    tasks.append({"task": task_name, "done": False})
    print(f"Task '{task_name}' added successfully!")

def mark_task_done():
    """Marks a task as done based on user input."""
    view_tasks()
    if tasks:
        try:
            task_num = int(input("\nEnter the task number to mark as done: "))
            if 1 <= task_num <= len(tasks):
                tasks[task_num - 1]['done'] = True
                print(f"Task {task_num} marked as done!")
            else:
                print("Invalid task number.")
        except ValueError:
            print("Please enter a valid number.")

def delete_task():
    """Deletes a task from the list."""
    view_tasks()
    if tasks:
        try:
            task_num = int(input("\nEnter the task number to delete: "))
            if 1 <= task_num <= len(tasks):
                removed_task = tasks.pop(task_num - 1)
                print(f"Task '{removed_task['task']}' deleted successfully!")
            else:
                print("Invalid task number.")
        except ValueError:
            print("Please enter a valid number.")

def main():
    """Main function to run the To-Do List application."""
    while True:
        display_menu()
        try:
            choice = int(input("\nEnter your choice: "))
            if choice == 1:
                view_tasks()
            elif choice == 2:
                add_task()
            elif choice == 3:
                mark_task_done()
            elif choice == 4:
                delete_task()
            elif choice == 5:
                print("Exiting the application. Goodbye!")
                break
            else:
                print("Invalid choice. Please choose a number between 1 and 5.")
        except ValueError:
            print("Please enter a valid number.")
