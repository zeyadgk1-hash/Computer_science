// oop12_data.js
// Chapter 12: Exception Handling - Question Bank

var OOP_CHAPTER_12 = {
    id: 12,
    title: "Chapter 12: Exception Handling",
    description: "Professional error handling - Dealing with runtime exceptions gracefully",
    questions: [
        {
            id: 1,
            text: "An exception is a problem that arises during the ________ of a program, such as dividing by zero.",
            image: null,
            imageCaption: "",
            options: [
                "Compilation.",
                "Execution (Runtime).",
                "Writing.",
                "Designing."
            ],
            correct: 1,
            explanation: "Exceptions occur at runtime when something goes wrong that the program didn't anticipate, like file not found or division by zero.",
            topic: "Exception Definition",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 2,
            text: "Which block is used to define a piece of code to be tested for errors while it is being executed?",
            image: null,
            imageCaption: "",
            options: [
                "catch.",
                "finally.",
                "try.",
                "throw."
            ],
            correct: 2,
            explanation: "The try block contains code that might throw an exception. It's the code you want to monitor for errors.",
            topic: "try block",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 3,
            text: "The ________ block is executed only if an error occurs in the try block.",
            image: null,
            imageCaption: "",
            options: [
                "try.",
                "catch.",
                "finally.",
                "static."
            ],
            correct: 1,
            explanation: "The catch block handles exceptions thrown in the try block. It contains code to recover from or report the error.",
            topic: "catch block",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 4,
            text: "The finally block is used to execute a block of statements:",
            image: null,
            imageCaption: "",
            options: [
                "Only if an exception is thrown.",
                "Only if no exception is thrown.",
                "Whether an exception is thrown or not.",
                "Only when the program starts."
            ],
            correct: 2,
            explanation: "finally always executes - after try (if no exception), after catch (if exception), even if there's a return statement.",
            topic: "finally block",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 5,
            text: "All exception classes in C# are derived from which base class?",
            image: null,
            imageCaption: "",
            options: [
                "Error.",
                "Exception.",
                "SystemError.",
                "Object."
            ],
            correct: 1,
            explanation: "System.Exception is the base class for all exceptions. Custom exceptions should also inherit from Exception.",
            topic: "Exception Hierarchy",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 6,
            text: "Which property of the Exception object e describes the error that occurred?",
            image: null,
            imageCaption: "",
            options: [
                "Message.",
                "Text.",
                "Source.",
                "ErrorCode."
            ],
            correct: 0,
            explanation: "e.Message contains a human-readable description of the error. Example: 'Attempted to divide by zero.'",
            topic: "Exception Properties",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 7,
            text: "Which exception is thrown if you try to access an array element that does not exist (e.g., index 10 in an array of 3)?",
            image: null,
            imageCaption: "",
            options: [
                "DivideByZeroException.",
                "IndexOutOfRangeException.",
                "NullReferenceException.",
                "FormatException."
            ],
            correct: 1,
            explanation: "IndexOutOfRangeException occurs when accessing an array or collection with an invalid index.",
            topic: "Common Exceptions",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 8,
            text: "If a try statement has multiple catch blocks, how are they processed when an exception occurs?",
            image: null,
            imageCaption: "",
            options: [
                "All of them are executed.",
                "They try to catch the exception in order (top to bottom).",
                "A random block is chosen.",
                "Only the last one executes."
            ],
            correct: 1,
            explanation: "Catch blocks are evaluated top to bottom. The first one that matches the exception type gets executed.",
            topic: "Multiple Catch Blocks",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 9,
            text: "If a DivideByZeroException occurs, and the first catch block is catch(Exception), will subsequent catch blocks execute?",
            image: null,
            imageCaption: "",
            options: [
                "Yes.",
                "No, because catch(Exception) catches everything and won't allow it to pass.",
                "Only if the second block is more specific.",
                "Only if the finally block is missing."
            ],
            correct: 1,
            explanation: "catch(Exception) catches all exceptions (since all derive from Exception), so subsequent catch blocks are unreachable.",
            topic: "Catch Order",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 10,
            text: "Which exception is thrown by the ToInt32 method if the string cannot be converted to a number?",
            image: null,
            imageCaption: "",
            options: [
                "FormatException.",
                "OverflowException.",
                "ArgumentNullException.",
                "DivideByZeroException."
            ],
            correct: 0,
            explanation: "FormatException occurs when the string format is invalid for conversion. Example: Convert.ToInt32('abc').",
            topic: "Conversion Exceptions",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 11,
            text: "Which keyword is used to manually signal that an error has occurred in your code?",
            image: null,
            imageCaption: "",
            options: [
                "raise.",
                "throw.",
                "catch.",
                "error."
            ],
            correct: 1,
            explanation: "throw creates and throws an exception. Example: throw new ArgumentException('Invalid argument').",
            topic: "throw keyword",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 12,
            text: "To create your own custom exception class, you must derive it from:",
            image: null,
            imageCaption: "",
            options: [
                "The Main class.",
                "The Exception class.",
                "The File class.",
                "A static class."
            ],
            correct: 1,
            explanation: "Custom exceptions should inherit from System.Exception or one of its derived classes.",
            topic: "Custom Exceptions",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 13,
            text: "Predict the result of this code",
            image: "carbon9.png",
            imageCaption: "",
            options: [
                "Error.",
                "Done.",
                "Error then Done.",
                "No output."
            ],
            correct: 2,
            explanation: "Division by zero throws exception → catch executes → finally always executes.",
            topic: "Try-Catch-Finally Flow",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 14,
            text: "In file operations, why is it better to call writer.Close() inside the finally block?",
            image: null,
            imageCaption: "",
            options: [
                "To make the file read-only.",
                "To ensure the file is closed even if an exception happens during writing.",
                "To delete the file if an error occurs.",
                "It is not recommended."
            ],
            correct: 1,
            explanation: "finally ensures cleanup code runs even if an exception occurs, preventing resource leaks like open file handles.",
            topic: "Resource Cleanup",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 15,
            text: "What happens if you try to call a method on an object that is null?",
            image: null,
            imageCaption: "",
            options: [
                "IndexOutOfRangeException.",
                "NullReferenceException.",
                "FormatException.",
                "Nothing happens."
            ],
            correct: 1,
            explanation: "NullReferenceException occurs when you try to access a member (method, property) on a null object reference.",
            topic: "NullReferenceException",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        }
    ]
};

// For backward compatibility
var oop12_data = OOP_CHAPTER_12;
var questions12 = OOP_CHAPTER_12.questions;
var oopQuestions12 = OOP_CHAPTER_12.questions;