// oop7_data.js
// Chapter 7: Inheritance - Question Bank

var OOP_CHAPTER_7 = {
    id: 7,
    title: "Chapter 7: Inheritance",
    description: "The backbone of OOP - How classes inherit properties and behaviors from other classes",
    questions: [
        {
            id: 1,
            text: "Inheritance is a mechanism that allows for deriving a class from another class, resulting in a ________.",
            image: null,
            imageCaption: "",
            options: [
                "Set of unrelated objects.",
                "Hierarchy of classes.",
                "Single static class.",
                "Global method."
            ],
            correct: 1,
            explanation: "Inheritance creates a parent-child relationship between classes, forming a hierarchy where derived classes inherit from base classes.",
            topic: "Inheritance Basics",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 2,
            text: "The class being inherited from is called the ________, while the class that inherits is the ________.",
            image: null,
            imageCaption: "",
            options: [
                "Child, Parent.",
                "Base (Parent), Derived (Child).",
                "Derived, Base.",
                "Static, Instance."
            ],
            correct: 1,
            explanation: "The base class (or parent class) is the one being inherited from, while the derived class (or child class) is the one doing the inheriting.",
            topic: "Terminology",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 3,
            text: "Which symbol is used in C# to indicate that a class inherits from another?",
            image: null,
            imageCaption: "",
            options: [
                "::",
                "->",
                ":",
                "=>"
            ],
            correct: 2,
            explanation: "In C#, the colon (:) is used to indicate inheritance. Example: class DerivedClass : BaseClass",
            topic: "Syntax",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 4,
            text: "(True/False) A Derived class inherits all class members (fields and methods) from its Base class.",
            image: null,
            imageCaption: "",
            options: [
                "True.",
                "False."
            ],
            correct: 1,
            explanation: "True, but with access limitations. A derived class inherits ALL members, but can only access the public and protected ones (not private).",
            topic: "Member Inheritance",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 5,
            text: "What is the primary benefit of using Inheritance in banking software or similar systems?",
            image: null,
            imageCaption: "",
            options: [
                "It makes the program run faster.",
                "It allows for code reusability and avoids duplicate code.",
                "It deletes unused objects automatically.",
                "It hides the Main method."
            ],
            correct: 1,
            explanation: "The main benefit is code reuse - common functionality can be defined in a base class and shared by multiple derived classes.",
            topic: "Benefits",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 6,
            text: "An ________ class cannot be instantiated (no objects can be created from it), but it can be inherited.",
            image: null,
            imageCaption: "",
            options: [
                "Internal.",
                "Abstract.",
                "Sealed.",
                "Static."
            ],
            correct: 1,
            explanation: "Abstract classes are designed to be inherited from, not instantiated directly. They often contain abstract methods that derived classes must implement.",
            topic: "Abstract Classes",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 7,
            text: "Which keyword is used to prevent other classes from inheriting from a specific class?",
            image: null,
            imageCaption: "",
            options: [
                "abstract.",
                "sealed.",
                "protected.",
                "private."
            ],
            correct: 1,
            explanation: "The sealed keyword prevents a class from being inherited. Example: sealed class FinalClass { }",
            topic: "Sealed Classes",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 8,
            text: "The ________ access modifier allows a member to be accessed only within the same class or its derived classes.",
            image: null,
            imageCaption: "",
            options: [
                "Private.",
                "Public.",
                "Protected.",
                "Internal."
            ],
            correct: 2,
            explanation: "Protected members are accessible within the class and by derived classes, but not by unrelated classes.",
            topic: "Protected Modifier",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 9,
            text: "When an object of a child class is created, in what order are the constructors called?",
            image: null,
            imageCaption: "",
            options: [
                "Only the Child constructor.",
                "Child first, then Parent.",
                "Parent (Base) first, then Child (Derived).",
                "They are called simultaneously."
            ],
            correct: 2,
            explanation: "Constructors are called from the base class upward. First the base class constructor, then derived class constructor.",
            topic: "Constructor Order",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 10,
            text: "Which keyword is used by a child class constructor to call a specific constructor in the parent class?",
            image: null,
            imageCaption: "",
            options: [
                "this.",
                "base.",
                "parent.",
                "super."
            ],
            correct: 1,
            explanation: "The base keyword calls a constructor in the parent class. Example: public DerivedClass() : base(parameters) { }",
            topic: "base keyword",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 11,
            text: "(Logic) If class C inherits from B, and B inherits from A, an object of type C will have:",
            image: null,
            imageCaption: "",
            options: [
                "Only members of C.",
                "Only members of B and C.",
                "Members of A, B, and C.",
                "Only members of A."
            ],
            correct: 2,
            explanation: "Inheritance is transitive. Class C inherits from B, which inherits from A, so C has members from all three classes.",
            topic: "Transitive Inheritance",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 12,
            text: "According to the access modifier table, can a 'Child Class' access a 'Private member' of its parent?",
            image: null,
            imageCaption: "",
            options: [
                "Yes.",
                "No.",
                "Only if it's static.",
                "Only in the Main method."
            ],
            correct: 1,
            explanation: "Private members are not accessible to derived classes. They can only be accessed within the class where they're declared.",
            topic: "Access Control",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 13,
            text: "Which classes can access a 'Public member' of class A?",
            image: null,
            imageCaption: "",
            options: [
                "Only Class A itself.",
                "Only Children of A.",
                "Class A, its Children, and Other Classes.",
                "None of the above."
            ],
            correct: 2,
            explanation: "Public members have the widest accessibility - they can be accessed from anywhere, including the class itself, derived classes, and unrelated classes.",
            topic: "Public Access",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 14,
            text: "(Scenario) If a field id in class Account is private, how can a SavingAccount (child) access it?",
            image: null,
            imageCaption: "",
            options: [
                "Directly by its name.",
                "Indirectly through a public/protected method (like SetId).",
                "It cannot access it at all.",
                "By using the static keyword."
            ],
            correct: 1,
            explanation: "Since private fields are not accessible to derived classes, they must use public or protected methods (getters/setters) to access them.",
            topic: "Accessing Private Members",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 15,
            text: "Predict the error in this code",
            image: "carbon6.png",
            imageCaption: "",
            options: [
                "A class cannot inherit from multiple things.",
                "The Base class (B) must come first in the list before interfaces.",
                "Interfaces must start with 'I'.",
                "There is no error."
            ],
            correct: 1,
            explanation: "In C#, when inheriting from a class and implementing interfaces, the base class must come first. Correct: class A : B, X, Y",
            topic: "Multiple Inheritance",
            difficulty: "Hard",
            source: "GeeksforGeeks"
        },
        {
            id: 16,
            text: "In the Person and Player example, if Person has a Run() method, why can a Player object call it?",
            image: null,
            imageCaption: "",
            options: [
                "Because Run() is a constructor.",
                "Because Player is an abstract class.",
                "Because Player inherits the Run() method from the Person class.",
                "Because the Run() method is static."
            ],
            correct: 2,
            explanation: "Player inherits from Person, so it gets all public and protected methods from Person, including Run().",
            topic: "Method Inheritance",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 17,
            text: "What happens if you try to create an object from an abstract class?",
            image: null,
            imageCaption: "",
            options: [
                "The program runs but the object is null.",
                "The compiler will generate an error.",
                "The object will be created in the Stack only.",
                "It will call the destructor."
            ],
            correct: 1,
            explanation: "Abstract classes cannot be instantiated. The compiler gives error CS0144: 'Cannot create an instance of the abstract class...'",
            topic: "Abstract Instantiation",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 18,
            text: "(True/False) C# supports multiple inheritance (one class inheriting from two parent classes).",
            image: null,
            imageCaption: "",
            options: [
                "True.",
                "False (A class can have only one parent)."
            ],
            correct: 1,
            explanation: "False. C# does not support multiple inheritance of classes (unlike C++). A class can only inherit from one base class, but can implement multiple interfaces.",
            topic: "Multiple Inheritance",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 19,
            text: "If a class is sealed, can it be used as a 'Base Class'?",
            image: null,
            imageCaption: "",
            options: [
                "Yes.",
                "No, it cannot be inherited from.",
                "Only if the child is also sealed.",
                "Only if all members are public."
            ],
            correct: 1,
            explanation: "Sealed classes cannot be inherited from. They are 'final' in the inheritance hierarchy.",
            topic: "Sealed Classes",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 20,
            text: "(Final Logic) When using base(id, balance) in a constructor initializer, what are you doing?",
            image: null,
            imageCaption: "",
            options: [
                "Initializing fields in the same class.",
                "Calling the constructor of the Parent class to initialize inherited fields.",
                "Destroying the parent object.",
                "Creating a new interface."
            ],
            correct: 1,
            explanation: "Using base(...) in a constructor calls the parent class constructor, passing the specified arguments to initialize inherited fields.",
            topic: "Constructor Chaining",
            difficulty: "Medium",
            source: "Stack Overflow"
        }
    ]
};

// For backward compatibility
var oop7_data = OOP_CHAPTER_7;
var questions7 = OOP_CHAPTER_7.questions;
var oopQuestions7 = OOP_CHAPTER_7.questions;