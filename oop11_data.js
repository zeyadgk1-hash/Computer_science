// oop11_data.js
// Chapter 11: Files & Streams - Question Bank

var OOP_CHAPTER_11 = {
    id: 11,
    title: "Chapter 11: Files & Streams",
    description: "Persistent data storage - Working with files and streams in C#",
    questions: [
        {
            id: 1,
            text: "Why are files used to store data in computer programs?",
            image: null,
            imageCaption: "",
            options: [
                "Because files are faster than memory.",
                "To allow a program to store data permanently (e.g., on a hard disk).",
                "Because data in RAM is never lost.",
                "To hide data from the user."
            ],
            correct: 1,
            explanation: "Files provide persistent storage on disk, allowing data to survive program termination and system restarts, unlike RAM which is volatile.",
            topic: "File Purpose",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 2,
            text: "What happens to data stored in memory (RAM) once the program terminates?",
            image: null,
            imageCaption: "",
            options: [
                "It is saved to the desktop.",
                "This data is lost (erased from memory).",
                "It is moved to the Text section.",
                "It is compressed automatically."
            ],
            correct: 1,
            explanation: "RAM is volatile memory - its contents are lost when power is removed or program terminates. Files provide persistence.",
            topic: "Volatile Memory",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 3,
            text: "Which namespace must be included to work with the File class in C#?",
            image: null,
            imageCaption: "",
            options: [
                "System.Collections.",
                "System.Windows.Forms.",
                "System.IO.",
                "System.Text."
            ],
            correct: 2,
            explanation: "System.IO contains classes for file and stream operations, including File, Directory, StreamReader, and StreamWriter.",
            topic: "IO Namespace",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 4,
            text: "Which method of the File class is used to check if a specific file exists on the disk?",
            image: null,
            imageCaption: "",
            options: [
                "Create().",
                "ReadAllText().",
                "Exists().",
                "AppendText()."
            ],
            correct: 2,
            explanation: "File.Exists(path) returns true if the file exists, false otherwise. Always check before operations to avoid exceptions.",
            topic: "File.Exists",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 5,
            text: "What happens if you use WriteAllText() on a file that already exists?",
            image: null,
            imageCaption: "",
            options: [
                "It throws an error.",
                "It adds the new text to the end of the file.",
                "The file will be overwritten.",
                "The program hangs."
            ],
            correct: 2,
            explanation: "File.WriteAllText() creates a new file or overwrites an existing one. Use AppendAllText() to add to the end.",
            topic: "WriteAllText Behavior",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 6,
            text: "Which method would you use to read the entire contents of a file into a single string variable?",
            image: null,
            imageCaption: "",
            options: [
                "Copy().",
                "ReadAllText().",
                "Replace().",
                "Open()."
            ],
            correct: 1,
            explanation: "File.ReadAllText(path) reads all text from a file and returns it as a string.",
            topic: "ReadAllText",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 7,
            text: "To get the path to the current user's Desktop folder, C# uses:",
            image: null,
            imageCaption: "",
            options: [
                "File.GetDesktopPath().",
                "Environment.GetFolderPath(Environment.SpecialFolder.Desktop).",
                "System.IO.Path.Desktop.",
                "Hardcoding 'C:\\Desktop'."
            ],
            correct: 1,
            explanation: "Environment.GetFolderPath with SpecialFolder.Desktop gets the desktop path for the current user, works on all Windows versions.",
            topic: "Special Folders",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 8,
            text: "What is a 'Stream' in C# file operations?",
            image: null,
            imageCaption: "",
            options: [
                "A type of hard drive.",
                "An additional layer created between an application and a file.",
                "A local variable in the stack.",
                "A graphical control."
            ],
            correct: 1,
            explanation: "A stream is an abstraction representing a sequence of bytes flowing from a source to a destination, providing buffered access.",
            topic: "Stream Definition",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 9,
            text: "Why are streams recommended for reading large files (e.g., 100 MB)?",
            image: null,
            imageCaption: "",
            options: [
                "Because they are easier to code.",
                "To break the data into small chunks and prevent the application from hanging.",
                "To encrypt the data.",
                "Because the File class cannot handle files larger than 1 MB."
            ],
            correct: 1,
            explanation: "Streams process data in chunks, avoiding loading entire large files into memory at once, which could cause OutOfMemoryException.",
            topic: "Streams for Large Files",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 10,
            text: "In a read operation using streams, data is transferred:",
            image: null,
            imageCaption: "",
            options: [
                "From the application directly to the file.",
                "From the file to the stream, then read by the application via the stream.",
                "From the stack to the heap.",
                "Only when the program terminates."
            ],
            correct: 1,
            explanation: "Streams act as intermediaries: file → stream buffer → application. This allows efficient chunk-based processing.",
            topic: "Stream Data Flow",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 11,
            text: "Which class is specifically used to write data to a file using streams?",
            image: null,
            imageCaption: "",
            options: [
                "FileStreamer.",
                "StreamWriter.",
                "TextWriter.",
                "ReadAllText."
            ],
            correct: 1,
            explanation: "StreamWriter writes characters to a stream with specified encoding. It's used for text file output.",
            topic: "StreamWriter",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 12,
            text: "Which class is used to read data from a file using streams?",
            image: null,
            imageCaption: "",
            options: [
                "StreamReader.",
                "DataReader.",
                "FileExists.",
                "StringReader."
            ],
            correct: 0,
            explanation: "StreamReader reads characters from a byte stream with specified encoding. It's used for text file input.",
            topic: "StreamReader",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 13,
            text: "Why is it a good practice to call the Close() method on a StreamReader or StreamWriter?",
            image: null,
            imageCaption: "",
            options: [
                "To delete the file.",
                "To clear the console.",
                "To release file handlers when the file is no longer required.",
                "To save the program instructions."
            ],
            correct: 2,
            explanation: "Close() releases system resources (file handles). Unclosed streams can cause 'file in use' errors. Better yet, use 'using' statement.",
            topic: "Resource Management",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 14,
            text: "Predict the result of the following code if 'MyFile.txt' does not exist",
            image: "carbon8.png",
            imageCaption: "",
            options: [
                "Error: File not found.",
                "A new file named 'MyFile.txt' is created with the text 'Hello'.",
                "The program prints 'Hello' to the console.",
                "The computer restarts."
            ],
            correct: 1,
            explanation: "StreamWriter creates the file if it doesn't exist. The file will be created with 'Hello' written to it.",
            topic: "StreamWriter Creation",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 15,
            text: "When using StreamReader, which method reads everything from the current position to the end of the stream?",
            image: null,
            imageCaption: "",
            options: [
                "ReadLine().",
                "Read().",
                "ReadToEnd().",
                "GetAll()."
            ],
            correct: 2,
            explanation: "ReadToEnd() reads all characters from the current position to the end of the stream and returns them as a string.",
            topic: "ReadToEnd Method",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        }
    ]
};

// For backward compatibility
var oop11_data = OOP_CHAPTER_11;
var questions11 = OOP_CHAPTER_11.questions;
var oopQuestions11 = OOP_CHAPTER_11.questions;