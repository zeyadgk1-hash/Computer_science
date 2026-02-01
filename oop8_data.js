// oop8_data.js
// Chapter 8: Polymorphism & Interfaces - Question Bank

var OOP_CHAPTER_8 = {
    id: 8,
    title: "Chapter 8: Polymorphism & Interfaces",
    description: "The pinnacle of OOP - Multiple forms and contract-based programming",
    questions: [
        {
            id: 1,
            text: "What happens when a derived class defines a member with the same name as a member in its base class without using special keywords?",
            image: null,
            imageCaption: "",
            options: [
                "It results in a compiler error.",
                "The member in the base class is hidden within the derived class.",
                "The base class member is deleted.",
                "It automatically becomes a virtual method."
            ],
            correct: 1,
            explanation: "Without using 'new' or 'override', the base class member is hidden (shadowed) in the derived class context, leading to a compiler warning CS0108.",
            topic: "Member Hiding",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 2,
            text: "To allow a method to be overridden in child classes, it must be declared using which keyword in the base class?",
            image: null,
            imageCaption: "",
            options: [
                "override.",
                "virtual.",
                "abstract.",
                "new."
            ],
            correct: 1,
            explanation: "The 'virtual' keyword in the base class marks a method as overridable. Derived classes can then provide their own implementation using 'override'.",
            topic: "Method Overriding",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 3,
            text: "Which keyword is used in the child class to provide a new implementation that replaces the inherited virtual method?",
            image: null,
            imageCaption: "",
            options: [
                "virtual.",
                "override.",
                "static.",
                "base."
            ],
            correct: 1,
            explanation: "The 'override' keyword indicates that this method provides a new implementation for an inherited virtual or abstract method.",
            topic: "override keyword",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 4,
            text: "Polymorphism is a Greek word meaning:",
            image: null,
            imageCaption: "",
            options: [
                "One name, one form.",
                "One name, many forms.",
                "Many names, one form.",
                "No name, many forms."
            ],
            correct: 1,
            explanation: "Poly = many, morph = forms. Polymorphism means one interface (name) with multiple implementations (forms).",
            topic: "Polymorphism Definition",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 5,
            text: "A base class reference (e.g., Animal x = new Cat();) can only call members that are defined in:",
            image: null,
            imageCaption: "",
            options: [
                "The Derived class only.",
                "The Base class (the reference type).",
                "Both classes simultaneously.",
                "Neither class."
            ],
            correct: 1,
            explanation: "Through a base class reference, you can only access members declared in the base class type, even if the actual object is of a derived type.",
            topic: "Base Class Reference",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 6,
            text: "(Scenario) If Animal x = new Cat(); and both classes have a Speak() method (using hiding), which version will be called?",
            image: null,
            imageCaption: "",
            options: [
                "The Cat's version.",
                "The Animal's version.",
                "Both versions.",
                "None, it throws an error."
            ],
            correct: 1,
            explanation: "With method hiding (not overriding), the method called depends on the reference type, not the object type. So Animal's version is called.",
            topic: "Method Hiding vs Overriding",
            difficulty: "Hard",
            source: "Microsoft Docs"
        },
        {
            id: 7,
            text: "An interface is a ________ of a class and its members cannot have implementation (body).",
            image: null,
            imageCaption: "",
            options: [
                "Copy.",
                "Blueprint.",
                "Instance.",
                "Hidden part."
            ],
            correct: 1,
            explanation: "An interface defines a contract or blueprint that classes must follow, specifying what members they must implement without providing how.",
            topic: "Interface Definition",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 8,
            text: "By default, all members defined inside an interface are:",
            image: null,
            imageCaption: "",
            options: [
                "Private.",
                "Protected.",
                "Public.",
                "Internal."
            ],
            correct: 2,
            explanation: "Interface members are implicitly public and abstract. You cannot specify access modifiers for interface members (except in newer C# versions).",
            topic: "Interface Members",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 9,
            text: "Which of the following is TRUE about interfaces?",
            image: null,
            imageCaption: "",
            options: [
                "They can be instantiated (you can create an object of an interface).",
                "A class that implements an interface must provide the implementation for ALL its members.",
                "They can have fields and constructors.",
                "They are only for static methods."
            ],
            correct: 1,
            explanation: "When a class implements an interface, it must provide concrete implementations for all members defined in that interface.",
            topic: "Interface Implementation",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 10,
            text: "Why are interfaces used in C# regarding inheritance?",
            image: null,
            imageCaption: "",
            options: [
                "To make the code run faster.",
                "To achieve multiple inheritance, which cannot be achieved by classes.",
                "To hide the base class members.",
                "To replace abstract classes."
            ],
            correct: 1,
            explanation: "Since C# doesn't support multiple class inheritance, interfaces allow a class to implement multiple contracts, achieving a form of multiple inheritance.",
            topic: "Multiple Inheritance",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 11,
            text: "C# ________ multiple inheritance (one class inheriting from more than one parent class).",
            image: null,
            imageCaption: "",
            options: [
                "Supports.",
                "Does not support.",
                "Supports only for static classes.",
                "Supports only in Windows Forms."
            ],
            correct: 1,
            explanation: "C# does NOT support multiple inheritance for classes. A class can only inherit from one base class, but can implement multiple interfaces.",
            topic: "Multiple Inheritance Limitation",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 12,
            text: "If a class inherits from a parent class AND implements multiple interfaces, which must come first in the definition?",
            image: null,
            imageCaption: "",
            options: [
                "Any of them.",
                "The interfaces.",
                "The Base Class name.",
                "The keyword static."
            ],
            correct: 2,
            explanation: "The base class must come first, then interfaces. Syntax: class Derived : BaseClass, IInterface1, IInterface2",
            topic: "Inheritance Syntax",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 13,
            text: "(Code Logic) If you have an interface IAthlete and a variable IAthlete a = new AthleteStudent();, what can you access through a?",
            image: null,
            imageCaption: "",
            options: [
                "All members of AthleteStudent.",
                "Only members defined in the IAthlete interface.",
                "Only members of the Person class.",
                "Nothing."
            ],
            correct: 1,
            explanation: "Through an interface reference, you can only access members declared in that interface, regardless of the actual object type.",
            topic: "Interface Reference",
            difficulty: "Hard",
            source: "Cairo University"
        },
        {
            id: 14,
            text: "Predict the output if virtual and override are used correctly for a Speak() method in a list of mixed Animals:",
            image: null,
            imageCaption: "",
            options: [
                "Every animal says 'Animal speaks'.",
                "Each animal uses its own implementation (e.g., 'Meow' or 'Woof').",
                "The program crashes.",
                "Only the first animal speaks."
            ],
            correct: 1,
            explanation: "With proper polymorphism (virtual/override), each object's specific implementation is called based on its actual type, not its reference type.",
            topic: "Polymorphism in Action",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 15,
            text: "What is the main purpose of polymorphism in a method like PlaySound(Animal x)?",
            image: null,
            imageCaption: "",
            options: [
                "To prevent any animal from speaking.",
                "To allow different objects to respond to the same call in their own way.",
                "To delete the object x after the call.",
                "To convert the animal to a string."
            ],
            correct: 1,
            explanation: "Polymorphism allows different derived class objects to respond to the same method call (PlaySound) with their own specific behavior.",
            topic: "Purpose of Polymorphism",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        }
    ]
};

// For backward compatibility
var oop8_data = OOP_CHAPTER_8;
var questions8 = OOP_CHAPTER_8.questions;
var oopQuestions8 = OOP_CHAPTER_8.questions;