// oop10_data.js
// Chapter 10: Delegates & Events - Question Bank

var OOP_CHAPTER_10 = {
    id: 10,
    title: "Chapter 10: Delegates & Events",
    description: "Passing methods as parameters and reactive programming with events",
    questions: [
        {
            id: 1,
            text: "A delegate is a type that represents references to methods with a particular ________ and ________.",
            image: null,
            imageCaption: "",
            options: [
                "Name, Body.",
                "Parameter list, Return type.",
                "Class, Object.",
                "Field, Property."
            ],
            correct: 1,
            explanation: "Delegates define a contract: they specify the method signature (parameters) and return type that compatible methods must have.",
            topic: "Delegate Definition",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 2,
            text: "Delegates allow for passing ________ as arguments to other methods.",
            image: null,
            imageCaption: "",
            options: [
                "Objects only.",
                "Methods.",
                "Variables only.",
                "Classes."
            ],
            correct: 1,
            explanation: "Delegates enable methods to be passed as parameters, enabling callback patterns and event-driven programming.",
            topic: "Delegate Purpose",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 3,
            text: "To call the method whose reference is held by a delegate instance, you simply ________ the delegate instance.",
            image: null,
            imageCaption: "",
            options: [
                "Delete.",
                "Invoke (or call).",
                "Copy.",
                "Print."
            ],
            correct: 1,
            explanation: "You invoke a delegate like a method: delegateInstance() or delegateInstance.Invoke().",
            topic: "Delegate Invocation",
            difficulty: "Easy",
            source: "GeeksforGeeks"
        },
        {
            id: 4,
            text: "(Syntax) If you have delegate int MyDelegate(int x, int y);, any method associated with it must:",
            image: null,
            imageCaption: "",
            options: [
                "Have a different return type.",
                "Be a constructor.",
                "Have the same signature (parameters) and return type.",
                "Be a private field."
            ],
            correct: 2,
            explanation: "Methods must match the delegate's signature exactly: same parameter types in same order, and same return type.",
            topic: "Delegate Compatibility",
            difficulty: "Medium",
            source: "Stack Overflow"
        },
        {
            id: 5,
            text: "A delegate that can hold more than one method reference is called a ________ delegate.",
            image: null,
            imageCaption: "",
            options: [
                "Single.",
                "Multicast.",
                "Static.",
                "Abstract."
            ],
            correct: 1,
            explanation: "Multicast delegates can have multiple methods. When invoked, all methods are called in sequence.",
            topic: "Multicast Delegates",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 6,
            text: "Which operators are used to add and remove methods from a multicast delegate?",
            image: null,
            imageCaption: "",
            options: [
                "* and /.",
                ". and ->.",
                "+= and -=.",
                "&& and ||."
            ],
            correct: 2,
            explanation: "+= adds a method to the delegate's invocation list; -= removes it.",
            topic: "Delegate Operators",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 7,
            text: "In a multicast delegate, when the delegate is called, the methods are executed in what order?",
            image: null,
            imageCaption: "",
            options: [
                "Random order.",
                "The order they were assigned.",
                "Reverse order.",
                "Simultaneously."
            ],
            correct: 1,
            explanation: "Methods are called in the order they were added to the delegate's invocation list.",
            topic: "Delegate Invocation Order",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 8,
            text: "If a multicast delegate returns a value (e.g., int), it returns the value from:",
            image: null,
            imageCaption: "",
            options: [
                "All methods combined.",
                "The first method only.",
                "The last assigned method.",
                "None, it results in an error."
            ],
            correct: 2,
            explanation: "For non-void delegates, only the last method's return value is returned. The others' return values are ignored.",
            topic: "Delegate Return Values",
            difficulty: "Hard",
            source: "Stack Overflow"
        },
        {
            id: 9,
            text: "________ are user actions like clicks or mouse movements, or system-generated notifications.",
            image: null,
            imageCaption: "",
            options: [
                "Delegates.",
                "Events.",
                "Structures.",
                "Methods."
            ],
            correct: 1,
            explanation: "Events represent something that happened, like a button click or data received.",
            topic: "Event Definition",
            difficulty: "Easy",
            source: "Cairo University"
        },
        {
            id: 10,
            text: "An 'event handler' is a ________ that is called whenever the event is raised.",
            image: null,
            imageCaption: "",
            options: [
                "Class.",
                "Method.",
                "Field.",
                "Interface."
            ],
            correct: 1,
            explanation: "Event handlers are methods that subscribe to events and get called when the event occurs.",
            topic: "Event Handlers",
            difficulty: "Easy",
            source: "Microsoft Docs"
        },
        {
            id: 11,
            text: "Why is it important to check if an event is not null before raising it (e.g., if (StateChanged != null))?",
            image: null,
            imageCaption: "",
            options: [
                "To save memory.",
                "To prevent a runtime exception if there are no event handlers assigned.",
                "To speed up the code.",
                "Because events are value types."
            ],
            correct: 1,
            explanation: "If no handlers are attached, the event is null. Trying to invoke null causes NullReferenceException.",
            topic: "Event Null Check",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        },
        {
            id: 12,
            text: "Which keyword is used to declare an event in a class?",
            image: null,
            imageCaption: "",
            options: [
                "handler.",
                "delegate.",
                "event.",
                "raise."
            ],
            correct: 2,
            explanation: "The 'event' keyword declares an event. Example: public event EventHandler StateChanged;",
            topic: "Event Declaration",
            difficulty: "Easy",
            source: "Stack Overflow"
        },
        {
            id: 13,
            text: "Predict the output of a multicast delegate d that has Add then Subtract assigned, if both print their name:",
            image: null,
            imageCaption: "",
            options: [
                "Add called.",
                "Subtract called.",
                "Add called, then Subtract called.",
                "Error."
            ],
            correct: 2,
            explanation: "With multicast delegates, all methods are called in the order they were added.",
            topic: "Multicast Behavior",
            difficulty: "Medium",
            source: "Cairo University"
        },
        {
            id: 14,
            text: "(Advanced) To add a method to an event, you must use the += operator because events:",
            image: null,
            imageCaption: "",
            options: [
                "Are the same as fields.",
                "Do not allow assignment using the = operator (to protect other handlers).",
                "Are always static.",
                "Are only for Windows Forms."
            ],
            correct: 1,
            explanation: "Events restrict access: outside the declaring class, you can only use += and -=, preventing accidental removal of other handlers.",
            topic: "Event Protection",
            difficulty: "Hard",
            source: "Microsoft Docs"
        },
        {
            id: 15,
            text: "In the PowerSwitch example, when p.TurnOn() is called, what happens to the event handlers?",
            image: null,
            imageCaption: "",
            options: [
                "They are deleted.",
                "They are ignored.",
                "They are called/executed because the StateChanged event is raised.",
                "They are converted to delegates."
            ],
            correct: 2,
            explanation: "Calling TurnOn() raises the StateChanged event, which invokes all subscribed event handlers.",
            topic: "Event Raising",
            difficulty: "Medium",
            source: "GeeksforGeeks"
        }
    ]
};

// For backward compatibility
var oop10_data = OOP_CHAPTER_10;
var questions10 = OOP_CHAPTER_10.questions;
var oopQuestions10 = OOP_CHAPTER_10.questions;