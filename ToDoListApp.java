import java.util.ArrayList;
import java.util.Scanner;

public class ToDoListApp {
    private static ArrayList<String> tasks = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int choice;
        System.out.println("📋 Welcome to the To-Do List Application");
        do {
            showMenu();
            System.out.print("Enter your choice: ");
            while (!scanner.hasNextInt()) {
                System.out.println("Please enter a valid number.");
                scanner.next();
            }
            choice = scanner.nextInt();
            scanner.nextLine();
            switch (choice) {
                case 1: addTask(); break;
                case 2: displayTasks(); break;
                case 3: removeTask(); break;
                case 4: System.out.println("Exiting... Thank you for using To-Do List App!"); break;
                default: System.out.println("Invalid choice! Please try again.");
            }
        } while (choice != 4);
    }

    private static void showMenu() {
        System.out.println("\n------ Menu ------");
        System.out.println("1. Add Task");
        System.out.println("2. View All Tasks");
        System.out.println("3. Remove Task (by index or name)");
        System.out.println("4. Exit");
    }

    private static void addTask() {
        System.out.print("Enter task description: ");
        String task = scanner.nextLine().trim();
        if (!task.isEmpty()) {
            tasks.add(task);
            System.out.println(" Task added!");
        } else {
            System.out.println("Task cannot be empty.");
        }
    }

    private static void displayTasks() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks available.");
        } else {
            System.out.println(" Your Tasks:");
            for (int i = 0; i < tasks.size(); i++) {
                System.out.println((i + 1) + ". " + tasks.get(i));
            }
        }
    }

    private static void removeTask() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks to remove.");
            return;
        }
        System.out.print("Remove by (1) Index or (2) Name? Enter 1 or 2: ");
        String method = scanner.nextLine();
        if (method.equals("1")) {
            displayTasks();
            System.out.print("Enter task index to remove: ");
            try {
                int index = Integer.parseInt(scanner.nextLine());
                if (index > 0 && index <= tasks.size()) {
                    String removed = tasks.remove(index - 1);
                    System.out.println(" Removed task: " + removed);
                } else {
                    System.out.println("Invalid index.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid number.");
            }
        } else if (method.equals("2")) {
            System.out.print("Enter task name to remove: ");
            String taskName = scanner.nextLine().trim();
            if (tasks.remove(taskName)) {
                System.out.println(" Removed task: " + taskName);
            } else {
                System.out.println("Task not found.");
            }
        } else {
            System.out.println("Invalid option.");
        }
    }
}
