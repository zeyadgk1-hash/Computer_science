// ============================================
// C# OOP CHAPTER 1: CLASSES AND OBJECTS
// Complete Question Bank for University Students
// Total: 17 Questions with Code Examples
// ============================================

var OOP_CHAPTER_1 = {
    id: 1,
    title: "Chapter 1: Classes and Objects",
    description: "Introduction to Object-Oriented Programming - Classes & Objects",
    level: "Beginner",
    color: "#3b82f6",
    icon: "👶",
    
    questions: [
        // ===== Phase 1: Concepts & Syntax =====
        {
            id: 1,
            text: "The main difference between Structured Programming and OOP is that OOP represents a program using:",
            options: [
                "A) A set of modules.",
                "B) A set of functions.",
                "C) A set of objects and their interactions.",
                "D) A single main module."
            ],
            correct: 2,
            explanation: "OOP organizes software as a collection of objects that contain both data and behavior, unlike structured programming which focuses on functions and procedures.",
            topic: "Basic Concepts",
            difficulty: "Beginner",
            source: "Textbook - Section 1.1"
        },
        {
            id: 2,
            text: "In OOP, an object is defined as any entity that has:",
            options: [
                "A) Only a name.",
                "B) Only attributes.",
                "C) A state and a behavior.",
                "D) Only operations."
            ],
            correct: 2,
            explanation: "An object combines state (attributes/properties) and behavior (methods) into a single unit.",
            topic: "Object Definition",
            difficulty: "Beginner",
            source: "Textbook - Section 1.2"
        },
        {
            id: 3,
            text: "A ________ is a template or blueprint for objects, while an ________ is an instance of that class.",
            options: [
                "A) Object, Class.",
                "B) Class, Object.",
                "C) Field, Method.",
                "D) Reference, Value."
            ],
            correct: 1,
            explanation: "Class defines the structure and behavior, Object is a concrete instance created from that class.",
            topic: "Classes vs Objects",
            difficulty: "Beginner"
        },
        {
            id: 4,
            text: "In C#, attributes (characteristics) are represented using ________, while operations (behaviors) are represented using ________.",
            options: [
                "A) Methods, Fields.",
                "B) Fields, Methods.",
                "C) Classes, Objects.",
                "D) Stack, Heap."
            ],
            correct: 1,
            explanation: "Fields store the state/attributes of an object, Methods define the operations/behavior.",
            topic: "Fields vs Methods",
            difficulty: "Beginner"
        },
        {
            id: 5,
            text: "Which of the following is the correct syntax to create an object named x from class Car?",
            options: [
                "A) Car x;",
                "B) new Car x();",
                "C) Car x = new Car();",
                "D) Car x = Car();"
            ],
            correct: 2,
            explanation: "In C#, object creation requires the 'new' keyword followed by the constructor call.",
            topic: "Object Creation Syntax",
            difficulty: "Beginner"
        },
        
        // ===== Phase 2: Memory Layout =====
        {
            id: 6,
            text: "A program in execution is called a ________.",
            options: [
                "A) Thread.",
                "B) Process.",
                "C) Text section.",
                "D) Stack."
            ],
            correct: 1,
            explanation: "A process is an instance of a program in execution, containing memory sections and resources.",
            topic: "Memory Layout",
            difficulty: "Beginner"
        },
        {
            id: 7,
            text: "Which memory section is used to store local (automatic) variables?",
            options: [
                "A) Heap.",
                "B) Data section.",
                "C) Stack.",
                "D) Text section."
            ],
            correct: 2,
            explanation: "Stack stores local variables, method parameters, and return addresses.",
            topic: "Stack Memory",
            difficulty: "Beginner"
        },
        {
            id: 8,
            text: "Dynamically allocated data, such as objects and arrays, are stored in the ________.",
            options: [
                "A) Stack.",
                "B) Heap.",
                "C) Data section.",
                "D) Text section."
            ],
            correct: 1,
            explanation: "Heap memory is used for dynamic allocation at runtime.",
            topic: "Heap Memory",
            difficulty: "Beginner"
        },
        {
            id: 9,
            text: "Value-type variables (like int) store the ________ in their memory location, while reference-type variables (like objects) store a ________.",
            options: [
                "A) Reference, Value.",
                "B) Actual value, Reference (Address).",
                "C) Memory address, Data.",
                "D) Code, Data."
            ],
            correct: 1,
            explanation: "Value types store the actual data, reference types store memory addresses pointing to the data.",
            topic: "Value vs Reference Types",
            difficulty: "Intermediate"
        },
        {
            id: 10,
            text: "In the line 'int[] a = new int[10];', the variable a is stored in the ________ while the array itself is stored in the ________.",
            options: [
                "A) Heap, Stack.",
                "B) Stack, Heap.",
                "C) Data section, Text section.",
                "D) Stack, Stack."
            ],
            correct: 1,
            explanation: "Reference 'a' is in Stack, the actual array of 10 integers is in Heap.",
            topic: "Arrays Memory",
            difficulty: "Intermediate"
        },
        
        // ===== Phase 3: Reference Assignment & Advanced Tracing =====
        {
            id: 11,
            text: "When you execute 'Car c2 = c1;' (where c1 is an existing object), what happens?",
            options: [
                "A) A new Car object is created in the heap.",
                "B) The attributes of c1 are copied to a new object.",
                "C) c2 becomes another reference to the same Car object in the heap.",
                "D) An error occurs."
            ],
            correct: 2,
            explanation: "Reference assignment copies the memory address, not the object itself.",
            topic: "Reference Assignment",
            difficulty: "Intermediate"
        },
        {
            id: 12,
            text: "Predict the output of this code",
            options: [
                "A) Red.",
                "B) Blue.",
                "C) Null.",
                "D) Error."
            ],
            correct: 1,
            explanation: "c1 and c2 refer to the same object, so changing c2.color affects c1.color.",
            topic: "Reference Aliasing",
            difficulty: "Intermediate",
            image: "carbon.png"
        },
        {
            id: 13,
            text: "If you have two Car objects created as 'Car c1 = new Car(); Car c2 = new Car();', how many objects exist in the Heap?",
            options: [
                "A) 1.",
                "B) 2.",
                "C) 3.",
                "D) 0."
            ],
            correct: 1,
            explanation: "Each 'new' creates a separate object in the heap.",
            topic: "Object Count",
            difficulty: "Beginner"
        },
        {
            id: 14,
            text: "(Advanced) If a variable 'Car c1;' is declared but new is not used, its initial value in the stack is:",
            options: [
                "A) A default object.",
                "B) null.",
                "C) 0.",
                "D) Error."
            ],
            correct: 1,
            explanation: "Uninitialized reference variables in C# have null value by default.",
            topic: "Null References",
            difficulty: "Advanced"
        },
        {
            id: 15,
            text: "What does the \"Text Section\" of the memory layout store?",
            options: [
                "A) Global variables.",
                "B) Local variables.",
                "C) Program instructions.",
                "D) Dynamic objects."
            ],
            correct: 2,
            explanation: "Text section contains the executable code (machine instructions).",
            topic: "Memory Sections",
            difficulty: "Intermediate"
        },
        
        // ===== Phase 4: Best Practices & Scenarios =====
        {
            id: 16,
            text: "According to C# naming conventions, it is a good practice to start naming a Class with:",
            options: [
                "A) Lowercase letter.",
                "B) Uppercase letter.",
                "C) Underscore.",
                "D) Any character."
            ],
            correct: 1,
            explanation: "C# naming convention: Classes use PascalCase (starting with uppercase).",
            topic: "Naming Conventions",
            difficulty: "Beginner"
        },
        {
            id: 17,
            text: "If three objects are created from the Car class, which of the following is TRUE?",
            options: [
                "A) They all share the same state.",
                "B) Each object has its own state (attribute values).",
                "C) They are all stored in the Stack.",
                "D) They must have the same color."
            ],
            correct: 1,
            explanation: "Each object maintains its own separate copy of instance variables.",
            topic: "Object Independence",
            difficulty: "Beginner"
        }
    ]
};

// ============================================
// Additional Practice Questions
// ============================================

const OOP_CHAPTER_1_EXTRA_QUESTIONS = [
    {
        id: 18,
        text: "What is the purpose of the 'new' keyword in C#?",
        options: [
            "A) To declare a variable.",
            "B) To allocate memory for an object.",
            "C) To import namespaces.",
            "D) To define a class."
        ],
        correct: 1,
        explanation: "'new' allocates memory in the heap and calls the constructor.",
        topic: "New Keyword",
        difficulty: "Beginner"
    },
    {
        id: 19,
        text: "Which memory area grows and shrinks dynamically during program execution?",
        options: [
            "A) Text Section.",
            "B) Data Section.",
            "C) Both Stack and Heap.",
            "D) Neither."
        ],
        correct: 2,
        explanation: "Both Stack (for method calls) and Heap (for dynamic allocation) change size.",
        topic: "Dynamic Memory",
        difficulty: "Intermediate"
    },
    {
        id: 20,
        text: "What will be the output of this code?\n\nint x = 5;\nint y = x;\nx = 10;\nConsole.WriteLine(y);",
        options: [
            "A) 5",
            "B) 10",
            "C) 15",
            "D) Error"
        ],
        correct: 0,
        explanation: "Value types are copied by value, so y remains 5.",
        topic: "Value Type Copy",
        difficulty: "Beginner"
    }
];

// ============================================
// Helper Functions
// ============================================

// Get all questions for Chapter 1
function getChapter1Questions() {
    return OOP_CHAPTER_1.questions;
}

// Get all questions including extra
function getAllChapter1Questions() {
    return [...OOP_CHAPTER_1.questions, ...OOP_CHAPTER_1_EXTRA_QUESTIONS];
}

// Get random subset of questions
function getRandomChapter1Questions(count = 10) {
    const allQuestions = getAllChapter1Questions();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Get questions by difficulty
function getChapter1QuestionsByDifficulty(level) {
    return getAllChapter1Questions().filter(q => 
        q.difficulty.toLowerCase() === level.toLowerCase()
    );
}

// Get questions by topic
function getChapter1QuestionsByTopic(topic) {
    return getAllChapter1Questions().filter(q => 
        q.topic.toLowerCase().includes(topic.toLowerCase())
    );
}

// Get question statistics
function getChapter1Stats() {
    const allQuestions = getAllChapter1Questions();
    const stats = {
        total: allQuestions.length,
        byDifficulty: {
            Beginner: allQuestions.filter(q => q.difficulty === "Beginner").length,
            Intermediate: allQuestions.filter(q => q.difficulty === "Intermediate").length,
            Advanced: allQuestions.filter(q => q.difficulty === "Advanced").length
        },
        topics: {},
        withCode: allQuestions.filter(q => q.code).length,
        withImage: allQuestions.filter(q => q.image).length
    };
    
    // Count questions by topic
    allQuestions.forEach(q => {
        stats.topics[q.topic] = (stats.topics[q.topic] || 0) + 1;
    });
    
    return stats;
}

// ============================================
// Chapters Data Structure
// ============================================

const OOP_CHAPTERS = [
    OOP_CHAPTER_1,
    // Add other chapters here as they become available
    {
        id: 2,
        title: "Chapter 2: Encapsulation",
        description: "Access Modifiers - Getters/Setters - Data Hiding",
        level: "Beginner",
        color: "#2563eb",
        icon: "🔒",
        questions: [
            // Questions will be added here
            {
                id: 1,
                text: "What is the primary purpose of encapsulation in OOP?",
                options: [
                    "A) To improve code performance",
                    "B) To hide implementation details and protect data",
                    "C) To make code more readable",
                    "D) To reduce code size"
                ],
                correct: 1,
                explanation: "Encapsulation bundles data and methods that operate on that data, hiding internal state and requiring all interaction through object's methods.",
                topic: "Encapsulation",
                difficulty: "Beginner"
            }
        ]
    }
    // Continue with chapters 3-12...
];

// ============================================
// Main Functions for Quiz Engine
// ============================================

// Get questions by chapter ID
function getChapterQuestions(chapterId) {
    const chapter = OOP_CHAPTERS.find(ch => ch.id === chapterId);
    if (chapter && chapter.questions) {
        return chapter.questions;
    }
    
    // Default to chapter 1 if not found
    if (chapterId === 1) {
        return OOP_CHAPTER_1.questions;
    }
    
    return [];
}

// Get all questions (for marathon mode)
function getAllQuestions() {
    let allQuestions = [];
    OOP_CHAPTERS.forEach(chapter => {
        if (chapter.questions) {
            allQuestions = allQuestions.concat(chapter.questions);
        }
    });
    return allQuestions;
}

// Get mixed questions for review
function getReviewQuestions(count = 20) {
    let questions = [];
    OOP_CHAPTERS.forEach(chapter => {
        if (chapter.questions && chapter.questions.length > 0) {
            // Take 3-5 questions from each chapter
            const takeCount = Math.min(5, chapter.questions.length);
            questions = questions.concat(chapter.questions.slice(0, takeCount));
        }
    });
    // Shuffle and return requested count
    return shuffleArray(questions).slice(0, count);
}

// Get midterm questions (first 6 chapters)
function getMidtermQuestions() {
    let questions = [];
    for (let i = 1; i <= 6; i++) {
        const chapterQuestions = getChapterQuestions(i);
        if (chapterQuestions.length > 0) {
            // Take 5-8 questions from each chapter
            const takeCount = Math.min(8, chapterQuestions.length);
            questions = questions.concat(chapterQuestions.slice(0, takeCount));
        }
    }
    return shuffleArray(questions);
}

// Get final exam questions
function getFinalQuestions() {
    return shuffleArray(getAllQuestions()).slice(0, 100);
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ============================================
// Export for testing
// ============================================

if (typeof module !== 'undefined') {
    module.exports = {
        OOP_CHAPTER_1,
        OOP_CHAPTERS,
        getChapter1Questions,
        getAllChapter1Questions,
        getRandomChapter1Questions,
        getChapterQuestions,
        getAllQuestions,
        getReviewQuestions,
        getMidtermQuestions,
        getFinalQuestions,
        getChapter1Stats
    };
}

// ============================================
// Console logging for debugging
// ============================================

console.log("==========================================");
console.log("🎯 C# OOP Question Bank - Chapter 1 Loaded!");
console.log("==========================================");
console.log(`📚 Chapter: ${OOP_CHAPTER_1.title}`);
console.log(`❓ Total Questions: ${OOP_CHAPTER_1.questions.length}`);
console.log(`📊 Difficulty: ${OOP_CHAPTER_1.level}`);
console.log(`💻 With Code Examples: ${OOP_CHAPTER_1.questions.filter(q => q.code).length}`);
console.log("==========================================");
console.log(`📖 Total Chapters Available: ${OOP_CHAPTERS.length}`);
console.log("🚀 Ready for quiz engine integration!");
console.log("==========================================");