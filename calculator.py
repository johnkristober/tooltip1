def add(a, b):
    """Returns the sum of two numbers."""
    return a + b

def subtract(a, b):
    """Returns the difference of two numbers."""
    return a - b

def multiply(a, b):
    """Returns the product of two numbers."""
    return a * b

def divide(a, b):
    """Returns the division of two numbers."""
    if b == 0:
        return "Error: Division by zero is not allowed."
    return a / b

def display_menu():
    """Displays the calculator menu."""
    print("\n=== Basic Calculator ===")
    print("1. Addition (+)")
    print("2. Subtraction (-)")
    print("3. Multiplication (*)")
    print("4. Division (/)")
    print("5. Exit")

def main():
    """Main function to run the calculator."""
    while True:
        display_menu()
        try:
            choice = int(input("\nEnter your choice (1-5): "))
            if choice == 5:
                print("Exiting the calculator. Goodbye!")
                break
            elif 1 <= choice <= 4:
                # Input two numbers
                num1 = float(input("Enter the first number: "))
                num2 = float(input("Enter the second number: "))

                # Perform the selected operation
                if choice == 1:
                    print(f"Result: {num1} + {num2} = {add(num1, num2)}")
                elif choice == 2:
                    print(f"Result: {num1} - {num2} = {subtract(num1, num2)}")
                elif choice == 3:
                    print(f"Result: {num1} * {num2} = {multiply(num1, num2)}")
                elif choice == 4:
                    print(f"Result: {num1} / {num2} = {divide(num1, num2)}")
            else:
                print("Invalid choice. Please choose a number between 1 and 5.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")
            
#if _name_ == "_main_":
    #main()
