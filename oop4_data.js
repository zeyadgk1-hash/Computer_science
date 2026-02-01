// oop4_data.js
// Chapter 4: Objects, Methods, & Arrays - Full Question Bank

var OOP_CHAPTER_4 = {
    id: 4,
    title: "Chapter 4: Objects, Methods, & Arrays",
    description: "References, Parameters, Return Types, and Arrays of Objects",
    questions: [
        {
            id: 1,
            text: "When an object is passed as an argument to a method, it is passed by value, which means:",
            image: null,
            imageCaption: "",
            options: [
                "A new copy of the object is created.",
                "A copy of the reference (address) is created, both pointing to the same object.",
                "The object is moved from the stack to the heap.",
                "The method cannot modify the object's fields."
            ],
            correct: 1,
            explanation: "In C#, when passing an object (reference type) as a parameter, a copy of the reference is passed, not a copy of the object itself. Both references point to the same object in memory.",
            topic: "Passing References",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 2,
            text: "If you modify an object's field inside a method (without ref), what happens to the original object?",
            image: null,
            imageCaption: "",
            options: [
                "It remains unchanged.",
                "It is updated because the copy of the reference points to the original object.",
                "It is deleted from memory.",
                "A runtime exception is thrown."
            ],
            correct: 1,
            explanation: "Since the copy of the reference points to the same original object in memory, any modification to the object's fields will affect the original object.",
            topic: "Modifying Objects",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 3,
            text: "To allow a method to change the actual object a reference refers to (re-assignment), you must use:",
            image: null,
            imageCaption: "",
            options: [
                "The new keyword.",
                "The static keyword.",
                "The ref keyword.",
                "The params modifier."
            ],
            correct: 2,
            explanation: "The ref keyword allows the method to change the reference itself, not just the contents of the object it points to.",
            topic: "ref modifier",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 4,
            text: "(True/False) Creating a copy of a reference (during pass-by-value) also copies the object itself in the heap.",
            image: null,
            imageCaption: "",
            options: [
                "True.",
                "False."
            ],
            correct: 1,
            explanation: "False. When passing an object as a parameter, only a copy of the reference is created, not a copy of the object itself. The object remains one in memory.",
            topic: "Passing References",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 5,
            text: "The params modifier must be used with which data structure in the method signature?",
            image: null,
            imageCaption: "",
            options: [
                "A single variable.",
                "An array.",
                "A list.",
                "A class instance."
            ],
            correct: 1,
            explanation: "The params modifier allows passing a variable number of arguments, and it must be the last parameter in the method and of array type.",
            topic: "params modifier",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 6,
            text: "What is the minimum number of arguments you can pass to a method defined with params?",
            image: null,
            imageCaption: "",
            options: [
                "1.",
                "2.",
                "Zero.",
                "Depends on the array size."
            ],
            correct: 2,
            explanation: "You can pass zero or more arguments to a method using params. If no arguments are passed, the array will be empty but not null.",
            topic: "params modifier",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 7,
            text: "A method that scales a Rectangle and returns a new object public Rectangle Scale(int factor) is an example of:",
            image: null,
            imageCaption: "",
            options: [
                "Passing a reference.",
                "Returning an object.",
                "Method overloading.",
                "Garbage collection."
            ],
            correct: 1,
            explanation: "This method creates a new object and returns it, allowing the program to continue with modified data without affecting the original object.",
            topic: "Returning Objects",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 8,
            text: "An array of a value-type (e.g., int[]) holds ________, while an array of a reference-type (e.g., Student[]) holds ________.",
            image: null,
            imageCaption: "",
            options: [
                "References, Values.",
                "Actual values, A set of references.",
                "Memory addresses, Integers.",
                "Objects, Data chunks."
            ],
            correct: 1,
            explanation: "Value-type arrays store the actual values, while reference-type arrays store references (addresses) to objects in memory.",
            topic: "Arrays of Objects",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 9,
            text: "After executing Student[] students = new Student[3];, what is the state of the objects?",
            image: null,
            imageCaption: "",
            options: [
                "Three Student objects are created in the heap.",
                "The first student is initialized to default.",
                "No objects are created yet; all elements are null.",
                "An error occurs."
            ],
            correct: 2,
            explanation: "Creating the array itself doesn't create any Student objects. All elements in the array are null until objects are created and assigned to them.",
            topic: "Array Initialization",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 10,
            text: "To access the name of the first student in an array, the correct syntax is:",
            image: null,
            imageCaption: "",
            options: [
                "students.name[0]",
                "students[0].name",
                "students(0).name",
                "students->name"
            ],
            correct: 1,
            explanation: "In C#, we use square brackets to access array elements, then a dot to access object fields.",
            topic: "Array Access",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 11,
            text: "In an array of objects, each element in the array holds:",
            image: null,
            imageCaption: "",
            options: [
                "The entire object data.",
                "A reference to an object.",
                "Only the object's methods.",
                "A pointer to the stack."
            ],
            correct: 1,
            explanation: "Reference-type arrays store references only, not the objects themselves. The objects exist in the heap.",
            topic: "Arrays of Objects",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 12,
            text: "Predict the output:",
            image: "carbon3.png",
            options: [
                "90.",
                "95.",
                "5.",
                "Error."
            ],
            correct: 1,
            explanation: "Since Student is a reference type, a copy of the reference is passed to the method. Both references (in Main and in the method) point to the same object, so modifying s.score will also change x.score.",
            topic: "Code Tracing",
            difficulty: "Hard",
            source: "GeeksforGeeks",
            
        },
        {
            id: 13,
            text: "In the Swap(ref Student s1, ref Student s2) example, what does Student temp = s1; copy?",
            image: null,
            imageCaption: "",
            options: [
                "The student's data.",
                "The reference (address) of the object.",
                "The student's name only.",
                "Nothing, it creates a new object."
            ],
            correct: 1,
            explanation: "When assigning one reference to another (Student temp = s1;), we're copying the reference (address), not the object data.",
            topic: "Reference Assignment",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 14,
            text: "Why is it common to use reference types as parameters in C#?",
            image: null,
            imageCaption: "",
            options: [
                "To protect the data from changes.",
                "To allow methods to operate on large data like objects and arrays.",
                "Because value types are not allowed as parameters.",
                "To reduce the number of classes."
            ],
            correct: 1,
            explanation: "Using reference types as parameters allows methods to work with large objects efficiently without copying all the data.",
            topic: "Reference Parameters",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 15,
            text: "When using params, how does the method obtain the arguments?",
            image: null,
            imageCaption: "",
            options: [
                "Through individual variables.",
                "By accessing the array.",
                "From the stack directly.",
                "Using the this keyword."
            ],
            correct: 1,
            explanation: "The params parameter is treated as an array within the method, allowing access to all passed arguments through array indexing.",
            topic: "params usage",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        }
    ]
};

// For backward compatibility
var oop4_data = OOP_CHAPTER_4;
var questions4 = OOP_CHAPTER_4.questions;
var oopQuestions4 = OOP_CHAPTER_4.questions;