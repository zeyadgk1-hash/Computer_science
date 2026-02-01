// oop6_data.js
// Chapter 6: Operator Overloading - Question Bank

var OOP_CHAPTER_6 = {
    id: 6,
    title: "Chapter 6: Operator Overloading",
    description: "Making objects work with arithmetic and logical operators like built-in types",
    questions: [
        {
            id: 1,
            text: "Operator overloading allows a programmer to redefine built-in operators to work with:",
            image: null,
            imageCaption: "",
            options: [
                "Only integers and doubles.",
                "User-defined types (Classes and Structs).",
                "Only static classes.",
                "Program instructions in the text section."
            ],
            correct: 1,
            explanation: "Operator overloading enables us to define how operators like +, -, ==, etc., should work with our own custom types (classes and structs).",
            topic: "Operator Overloading Basics",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 2,
            text: "Overloaded operators are special methods that must use which keyword in their definition?",
            image: null,
            imageCaption: "",
            options: [
                "overload.",
                "operator.",
                "static.",
                "binary."
            ],
            correct: 1,
            explanation: "The 'operator' keyword is used to define overloaded operators in C#. Example: public static Box operator +(Box b1, Box b2)",
            topic: "Operator Keyword",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 3,
            text: "(Important) All operator overloading methods must be declared as:",
            image: null,
            imageCaption: "",
            options: [
                "Private and Instance.",
                "Public and Static.",
                "Protected and Virtual.",
                "Internal and Read-only."
            ],
            correct: 1,
            explanation: "Operator overloads must be public and static because they operate on the type itself, not on specific instances, and need to be accessible.",
            topic: "Operator Method Requirements",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 4,
            text: "An overloaded operator method must have which of the following?",
            image: null,
            imageCaption: "",
            options: [
                "A return type and a parameter list.",
                "Only a return type.",
                "No parameters.",
                "It must be a constructor."
            ],
            correct: 0,
            explanation: "Operator methods require both a return type (the result of the operation) and parameters (the operands to operate on).",
            topic: "Operator Method Syntax",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 5,
            text: "Unary operators (like ++, --, !) take ________ operand(s).",
            image: null,
            imageCaption: "",
            options: [
                "Zero.",
                "One.",
                "Two.",
                "Three."
            ],
            correct: 1,
            explanation: "Unary operators work with one operand. Examples: ++x, --y, !z where x, y, z are the single operands.",
            topic: "Unary Operators",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 6,
            text: "Binary operators (like +, -, *, /) take ________ operand(s).",
            image: null,
            imageCaption: "",
            options: [
                "One.",
                "Two.",
                "Any number of.",
                "Only static operands."
            ],
            correct: 1,
            explanation: "Binary operators work with two operands. Examples: a + b, x - y, m * n where each operator has two operands.",
            topic: "Binary Operators",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 7,
            text: "Which of the following comparison operators must be overloaded in pairs?",
            image: null,
            imageCaption: "",
            options: [
                "+ and -.",
                "> and < (also == and !=).",
                "++ and --.",
                "* and /."
            ],
            correct: 1,
            explanation: "For consistency, comparison operators should be overloaded in pairs: > with <, and == with !=.",
            topic: "Operator Pairs",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 8,
            text: "Which of the following logical operators CANNOT be overloaded directly?",
            image: null,
            imageCaption: "",
            options: [
                "!.",
                "&& and ||.",
                "==.",
                "!=."
            ],
            correct: 1,
            explanation: "The && and || operators cannot be overloaded directly, but they use the overloaded &, |, true, and false operators.",
            topic: "Operator Limitations",
            difficulty: "Hard",
            source: "Stack Overflow"
        },
        {
            id: 9,
            text: "Assignment operators like +=, -=, and *=:",
            image: null,
            imageCaption: "",
            options: [
                "Can be overloaded manually.",
                "Cannot be overloaded.",
                "Are only for structs.",
                "Require the this keyword."
            ],
            correct: 1,
            explanation: "Assignment operators like += are automatically derived from the corresponding binary operator (+). If + is overloaded, += works automatically.",
            topic: "Assignment Operators",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 10,
            text: "Which of these operators is non-overloadable according to the book?",
            image: null,
            imageCaption: "",
            options: [
                "+.",
                "==.",
                "new, is, sizeof, and typeof.",
                "<."
            ],
            correct: 2,
            explanation: "Operators like new, is, sizeof, typeof, and . (dot), ->, ?:, ?? cannot be overloaded in C#.",
            topic: "Non-overloadable Operators",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 11,
            text: "In the Battery example, what does the overloaded + operator return?",
            image: null,
            imageCaption: "",
            options: [
                "An integer representing total energy.",
                "A string with both names.",
                "A new Battery object with combined names and energy.",
                "Nothing (void)."
            ],
            correct: 2,
            explanation: "The overloaded + for Battery typically returns a new Battery object combining properties of both operands, following the principle of immutability.",
            topic: "Operator Return Types",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 12,
            text: "Predict the output",
            image: "carbon5.png",
            imageCaption: "",
            options: [
                "100.",
                "99.",
                "0.",
                "Error."
            ],
            correct: 1,
            explanation: "If the -- operator is overloaded to subtract 1 from the Energy property, x-- would decrease Energy from 100 to 99.",
            topic: "Unary Operator Usage",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 13,
            text: "To overload the > operator for a class Box, the method signature should be:",
            image: null,
            imageCaption: "",
            options: [
                "public bool operator >(Box b1)",
                "public static bool operator >(Box b1, Box b2)",
                "public static int operator >(Box b1, Box b2)",
                "void operator >(Box b1, Box b2)"
            ],
            correct: 1,
            explanation: "Comparison operators return bool and take two parameters. They must be public static.",
            topic: "Comparison Operator Syntax",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 14,
            text: "When overloading a binary operator like +, the method operator + (Battery b1, Battery b2) treats b1 as the ________ operand.",
            image: null,
            imageCaption: "",
            options: [
                "Right-hand.",
                "Left-hand.",
                "Only.",
                "Static."
            ],
            correct: 1,
            explanation: "In b1 + b2, b1 is the left-hand operand and b2 is the right-hand operand in the operator method signature.",
            topic: "Operator Parameters",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 15,
            text: "(Scenario) If you want to compare two Student objects based on their scores using ==, you MUST also overload:",
            image: null,
            imageCaption: "",
            options: [
                ">.",
                "<.",
                "!=.",
                "+."
            ],
            correct: 2,
            explanation: "For consistency, when overloading ==, you should also overload !=. The compiler may give a warning if you don't.",
            topic: "Operator Consistency",
            difficulty: "Medium",
            source: "Microsoft Docs"
        }
    ]
};

// For backward compatibility
var oop6_data = OOP_CHAPTER_6;
var questions6 = OOP_CHAPTER_6.questions;
var oopQuestions6 = OOP_CHAPTER_6.questions;