// oop9_data.js
// Chapter 9: Enumerations & Structures - Question Bank

var OOP_CHAPTER_9 = {
    id: 9,
    title: "Chapter 9: Enumerations & Structures",
    description: "Understanding value types vs reference types - Enums, Structs, and their practical applications",
    questions: [
        {
            id: 1,
            text: "An enumeration type (enum) is a data type consisting of a set of named values called:",
            image: null,
            imageCaption: "",
            options: [
                "Indices.",
                "Enumerators.",
                "Structures.",
                "Objects."
            ],
            correct: 1,
            explanation: "Enumerators are the named constants within an enum type. Example: In enum Color { Red, Green, Blue }, Red, Green, and Blue are enumerators.",
            topic: "Enum Basics",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 2,
            text: "Which keyword is used to define an enumeration in C#?",
            image: null,
            imageCaption: "",
            options: [
                "enumeration.",
                "enum.",
                "struct.",
                "const."
            ],
            correct: 1,
            explanation: "The 'enum' keyword is used to define an enumeration type. Example: enum Days { Monday, Tuesday, Wednesday }",
            topic: "Enum Syntax",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 3,
            text: "(Syntax) If you have enum Color { Red, Green, Yellow }, how do you assign 'Red' to a variable c?",
            image: null,
            imageCaption: "",
            options: [
                "Color c = Red;",
                "Color c = 'Red';",
                "Color c = Color.Red;",
                "Color c = 0;"
            ],
            correct: 2,
            explanation: "Enum values must be qualified with the enum type name. So it's Color.Red, not just Red.",
            topic: "Enum Usage",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 4,
            text: "Enumerations are useful for representing a group of ________ values, like Gender or Days of the week.",
            image: null,
            imageCaption: "",
            options: [
                "Dynamic.",
                "Fixed/Related.",
                "Large.",
                "Secret."
            ],
            correct: 1,
            explanation: "Enums represent a fixed set of related constants, making code more readable and type-safe than using magic numbers.",
            topic: "Enum Purpose",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 5,
            text: "A structure (struct) in C# is a ________ type that can encapsulate data and related functionality.",
            image: null,
            imageCaption: "",
            options: [
                "Reference.",
                "Value.",
                "Static.",
                "Abstract."
            ],
            correct: 1,
            explanation: "Structs are value types, stored directly where they're declared (usually on the stack), unlike classes which are reference types.",
            topic: "Struct Basics",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 6,
            text: "Which keyword is used to define a structure?",
            image: null,
            imageCaption: "",
            options: [
                "structure.",
                "class.",
                "struct.",
                "enum."
            ],
            correct: 2,
            explanation: "The 'struct' keyword is used to define a structure. Example: struct Point { public int X; public int Y; }",
            topic: "Struct Syntax",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 7,
            text: "(Memory) Structure-type variables are stored on the ________, while class-type variables are stored on the ________.",
            image: null,
            imageCaption: "",
            options: [
                "Heap, Stack.",
                "Stack, Heap.",
                "Data section, Text section.",
                "Heap, Heap."
            ],
            correct: 1,
            explanation: "Structs (value types) are typically stored on the stack (unless boxed), while classes (reference types) are stored on the heap.",
            topic: "Memory Storage",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 8,
            text: "When you assign one struct variable to another (p2 = p1), what happens?",
            image: null,
            imageCaption: "",
            options: [
                "Both point to the same instance.",
                "A complete copy of the structure instance is made.",
                "Only the reference is copied.",
                "An error occurs."
            ],
            correct: 1,
            explanation: "With structs (value types), assignment creates a complete copy of the data, not just a reference.",
            topic: "Struct Assignment",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 9,
            text: "Which of the following is TRUE about structures compared to classes?",
            image: null,
            imageCaption: "",
            options: [
                "Structures can inherit from other classes.",
                "Structures cannot contain a parameter-less constructor.",
                "Structures can have destructors.",
                "Structures support virtual methods."
            ],
            correct: 1,
            explanation: "Structs cannot have explicit parameter-less constructors (they always have an implicit one) and cannot define destructors.",
            topic: "Struct Limitations",
            difficulty: "Hard",
            source: "Cairo University"
        },
        {
            id: 10,
            text: "(Logic) Can a structure contain protected members?",
            image: null,
            imageCaption: "",
            options: [
                "Yes.",
                "No (because they cannot be inherited).",
                "Only if they are static.",
                "Only in the Main method."
            ],
            correct: 1,
            explanation: "Structs cannot be inherited from (except from ValueType), so protected members don't make sense in structs. They can only contain public, private, or internal members.",
            topic: "Struct Access Modifiers",
            difficulty: "Hard",
            source: "Microsoft Docs"
        },
        {
            id: 11,
            text: "Predict the output",
            image: "carbon7.png",
            imageCaption: "",
            options: [
                "5",
                "70",
                "0",
                "Error"
            ],
            correct: 0,
            explanation: "p2 gets a COPY of p1's data. Changing p2.X doesn't affect p1.X because they're separate value-type instances.",
            topic: "Value Type Behavior",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 12,
            text: "If you have a Person class with a Gender enum field, what is the default value of the gender field if not initialized?",
            image: null,
            imageCaption: "",
            options: [
                "null.",
                "The first item in the enum (e.g., Male/0).",
                "1.",
                "Error."
            ],
            correct: 1,
            explanation: "Enums are value types, so their default value is 0, which corresponds to the first enumerator in the enum definition.",
            topic: "Enum Default Value",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 13,
            text: "Why does modifying a structure instance p2 NOT affect the instance p1 after the assignment p2 = p1?",
            image: null,
            imageCaption: "",
            options: [
                "Because they are static.",
                "Because the assignment operator copies the instance itself, not the reference.",
                "Because structures are read-only.",
                "Because they are stored in the Text section."
            ],
            correct: 1,
            explanation: "Struct assignment performs a member-wise copy (value semantics), creating independent instances.",
            topic: "Value Semantics",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 14,
            text: "(Scenario) For a small data type like a Point(x, y) or Color(r, g, b), it is better to use a ________ for performance.",
            image: null,
            imageCaption: "",
            options: [
                "Class.",
                "Structure.",
                "Interface.",
                "Delegate."
            ],
            correct: 1,
            explanation: "Small, immutable data types that represent a single value are better as structs for performance (stack allocation, no heap overhead).",
            topic: "Struct Use Cases",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 15,
            text: "A structure ________ inherit from another structure or class.",
            image: null,
            imageCaption: "",
            options: [
                "Can.",
                "Cannot.",
                "Can if it is public.",
                "Can if it uses the base keyword."
            ],
            correct: 1,
            explanation: "Structs cannot inherit from other structs or classes (except implicitly from System.ValueType). They can implement interfaces though.",
            topic: "Struct Inheritance",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        }
    ]
};

// For backward compatibility
var oop9_data = OOP_CHAPTER_9;
var questions9 = OOP_CHAPTER_9.questions;
var oopQuestions9 = OOP_CHAPTER_9.questions;