// oop5_data.js
// Chapter 5: Properties and Indexers - Question Bank

var OOP_CHAPTER_5 = {
    id: 5,
    title: "Chapter 5: Properties and Indexers",
    description: "How to make objects 'smart' in handling their data - Encapsulation in practice",
    questions: [
        {
            id: 1,
            text: "A property is a class member that provides a flexible mechanism to access a ________ field.",
            image: null,
            imageCaption: "",
            options: [
                "Public.",
                "Private.",
                "Static.",
                "Global."
            ],
            correct: 1,
            explanation: "Properties provide controlled access to private fields, implementing encapsulation by keeping the field private while exposing controlled access.",
            topic: "Properties Basics",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 2,
            text: "In a property, the ________ accessor returns the value, while the ________ accessor assigns a value.",
            image: null,
            imageCaption: "",
            options: [
                "set, get.",
                "get, set.",
                "return, assign.",
                "read, write."
            ],
            correct: 1,
            explanation: "The get accessor retrieves the property value, while the set accessor assigns a value to the property. Example: public string Name { get { return _name; } set { _name = value; } }",
            topic: "Property Accessors",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 3,
            text: "Which keyword represents the value being assigned to a property within the set accessor?",
            image: null,
            imageCaption: "",
            options: [
                "this.",
                "item.",
                "value.",
                "input."
            ],
            correct: 2,
            explanation: "The 'value' keyword in C# represents the value being assigned to the property in the set accessor. It's a contextual keyword available only in property setters.",
            topic: "value keyword",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 4,
            text: "A 'Read-Only' property is created by:",
            image: null,
            imageCaption: "",
            options: [
                "Providing only the set accessor.",
                "Providing only the get accessor.",
                "Making the property static.",
                "Using the private keyword for the whole property."
            ],
            correct: 1,
            explanation: "A read-only property has only a get accessor, allowing the value to be read but not modified from outside the class.",
            topic: "Read-Only Properties",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 5,
            text: "What is the benefit of 'Automatic Properties' in C#?",
            image: null,
            imageCaption: "",
            options: [
                "They are faster to execute.",
                "They don't require memory.",
                "They reduce code by not requiring a manually defined private field.",
                "They are only for read-only data."
            ],
            correct: 2,
            explanation: "Automatic properties (e.g., public string Name { get; set; }) automatically create a private backing field, reducing boilerplate code while maintaining encapsulation.",
            topic: "Automatic Properties",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 6,
            text: "An indexer allows an object to be indexed just like ________.",
            image: null,
            imageCaption: "",
            options: [
                "Methods.",
                "Arrays.",
                "Classes.",
                "Properties."
            ],
            correct: 1,
            explanation: "Indexers enable objects to be indexed like arrays, using square bracket notation to access elements within the object.",
            topic: "Indexers Basics",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 7,
            text: "Indexers resemble properties, but their accessors take ________.",
            image: null,
            imageCaption: "",
            options: [
                "No arguments.",
                "Parameters.",
                "Only strings.",
                "Static values."
            ],
            correct: 1,
            explanation: "Indexer accessors take parameters that specify which element to access, unlike regular properties which don't take parameters.",
            topic: "Indexer Parameters",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 8,
            text: "To define an indexer, which keyword is used as the name of the indexer?",
            image: null,
            imageCaption: "",
            options: [
                "index.",
                "self.",
                "this.",
                "base."
            ],
            correct: 2,
            explanation: "The 'this' keyword is used as the name of an indexer. Example: public string this[int index] { get { return data[index]; } }",
            topic: "Indexer Syntax",
            difficulty: "Medium",
            source: "Microsoft Docs"
        },
        {
            id: 9,
            text: "(True/False) An indexer can only have one dimension and the parameter must be of type int.",
            image: null,
            imageCaption: "",
            options: [
                "True.",
                "False. (Indexers can have multiple dimensions and parameters can be of any type)."
            ],
            correct: 1,
            explanation: "False. Indexers can have multiple dimensions (e.g., [int x, int y]) and parameters can be of any type, not just int.",
            topic: "Indexer Capabilities",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 10,
            text: "What is the primary role of an indexer?",
            image: null,
            imageCaption: "",
            options: [
                "To store global data.",
                "To protect methods from being called.",
                "To provide functionality that appears 'array-like' to the user.",
                "To replace constructors."
            ],
            correct: 2,
            explanation: "The primary role of an indexer is to make an object behave like an array, providing intuitive, array-like access to its internal data.",
            topic: "Indexer Purpose",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 11,
            text: "Predict the error in the following code",
            image: "carbon4.png",
            imageCaption: "",
            options: [
                "Name is null.",
                "Property 'Name' cannot be assigned to because it is read-only (private set).",
                "Name must be static.",
                "No error."
            ],
            correct: 1,
            explanation: "The setter is private, meaning it can only be set within the class itself. From Main (outside the class), the property appears read-only.",
            topic: "Access Modifiers",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 12,
            text: "In the Histogram example, why can we pass a negative index to the indexer (e.g., histogram[-2])?",
            image: null,
            imageCaption: "",
            options: [
                "Because C# arrays allow negative indices.",
                "Because an indexer parameter is just a parameter, not an actual array index.",
                "Because the memory address is negative.",
                "It is not allowed and will throw an error."
            ],
            correct: 1,
            explanation: "Indexer parameters are just regular method parameters that we can validate and handle however we want. The class can define logic to handle any parameter value.",
            topic: "Indexer Logic",
            difficulty: "Hard",
            source: "Cairo University"
        },
        {
            id: 13,
            text: "How can you overload an indexer in C#?",
            image: null,
            imageCaption: "",
            options: [
                "You cannot overload indexers.",
                "By changing the return type only.",
                "By having a different number or type of parameters.",
                "By making it static."
            ],
            correct: 2,
            explanation: "Indexers can be overloaded by having different parameter types or number of parameters, just like methods.",
            topic: "Indexer Overloading",
            difficulty: "Hard",
            source: "Microsoft Docs"
        },
        {
            id: 14,
            text: "When using a 'Write-Only' property, you provide:",
            image: null,
            imageCaption: "",
            options: [
                "Only the get accessor.",
                "Only the set accessor.",
                "A private get and public set.",
                "Both get and set."
            ],
            correct: 1,
            explanation: "A write-only property has only a set accessor, allowing values to be set but not retrieved from outside the class.",
            topic: "Write-Only Properties",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 15,
            text: "(Scenario) If a property Price has logic inside set to check if (value >= 0), this is an example of:",
            image: null,
            imageCaption: "",
            options: [
                "Inheritance.",
                "Data protection/Encapsulation.",
                "Polymorphism.",
                "Memory management."
            ],
            correct: 1,
            explanation: "This is encapsulation - protecting the data by validating input before allowing it to be stored in the private field.",
            topic: "Encapsulation",
            difficulty: "Easy",
            source: "Cairo University",
            
        }
    ]
};

// For backward compatibility
var oop5_data = OOP_CHAPTER_5;
var questions5 = OOP_CHAPTER_5.questions;
var oopQuestions5 = OOP_CHAPTER_5.questions;