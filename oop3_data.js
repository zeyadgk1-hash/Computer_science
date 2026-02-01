// ============================================
// C# OOP CHAPTER 3: CONSTRUCTORS & DESTRUCTORS
// Complete Question Bank for University Students
// Total: 14 Questions
// ============================================

var OOP_CHAPTER_3 = {
    id: 3,
    title: "Chapter 3: Constructors & Destructors",
    description: "Object Initialization, Constructor Overloading, Garbage Collection & Destructors",
    level: "Beginner",
    color: "#8b5cf6",
    icon: "⚙️",
    
    questions: [
        // ===== Phase 1: Constructor Basics =====
        {
            id: 1,
            text: "A constructor is a special method that is automatically called when:",
            options: [
                "A class is defined.",
                "An object is created.",
                "A method is called.",
                "The program ends."
            ],
            correct: 1,
            explanation: "Constructors are automatically invoked when an object is instantiated using the 'new' keyword.",
            topic: "Constructor Basics",
            difficulty: "Beginner",
            source: "Textbook - Section 3.1"
        },
        {
            id: 2,
            text: "Which of the following is TRUE about constructor naming?",
            options: [
                "It can have any name.",
                "Its name must match the class name.",
                "It must start with a lowercase letter.",
                "It must be named 'Create'."
            ],
            correct: 1,
            explanation: "In C#, constructor names must exactly match the class name, including case sensitivity.",
            topic: "Constructor Naming",
            difficulty: "Beginner",
            source: "Textbook - Section 3.1"
        },
        {
            id: 3,
            text: "What is the return type of a constructor in C#?",
            options: [
                "void.",
                "int.",
                "It has no return type.",
                "Task."
            ],
            correct: 2,
            explanation: "Constructors do not have explicit return types (not even void). They implicitly return the newly created object.",
            topic: "Constructor Return Type",
            difficulty: "Beginner",
            source: "Textbook - Section 3.1"
        },
        {
            id: 4,
            text: "If you do not create a constructor for your class, what happens?",
            options: [
                "The code will not compile.",
                "C# creates a default parameter-less constructor for you.",
                "The objects will have no fields.",
                "You cannot create objects from that class."
            ],
            correct: 1,
            explanation: "C# automatically provides a default parameter-less constructor if no constructors are explicitly defined.",
            topic: "Default Constructor",
            difficulty: "Beginner",
            source: "Textbook - Section 3.1"
        },
        
        // ===== Phase 2: Overloading & Initializers =====
        {
            id: 5,
            text: "Constructors can be ________, meaning a class can have multiple constructors with different parameters.",
            options: [
                "Overridden.",
                "Overloaded.",
                "Static only.",
                "Private only."
            ],
            correct: 1,
            explanation: "Constructor overloading allows multiple constructors with different parameter lists in the same class.",
            topic: "Constructor Overloading",
            difficulty: "Intermediate",
            source: "Textbook - Section 3.2"
        },
        {
            id: 6,
            text: "What is the purpose of 'Constructor Initializers' using the this keyword?",
            options: [
                "To destroy an object.",
                "To allow one constructor to call another constructor in the same class.",
                "To call a method from the Main function.",
                "To initialize static fields only."
            ],
            correct: 1,
            explanation: "Constructor initializers (using : this()) enable constructor chaining within the same class.",
            topic: "Constructor Initializers",
            difficulty: "Intermediate",
            source: "Textbook - Section 3.2"
        },
        
        // ===== Phase 3: The this Keyword =====
        {
            id: 7,
            text: "The this keyword acts as a reference to:",
            options: [
                "The base class.",
                "The current instance (object) of the class.",
                "The static members only.",
                "The Main method."
            ],
            correct: 1,
            explanation: "The 'this' keyword refers to the current instance of the class, allowing access to instance members.",
            topic: "this Keyword",
            difficulty: "Beginner",
            source: "Textbook - Section 3.3"
        },
        {
            id: 8,
            text: "When is using the this keyword mandatory?",
            options: [
                "Always.",
                "Only in static methods.",
                "When a local variable (parameter) has the same name as a class field.",
                "Never."
            ],
            correct: 2,
            explanation: "The 'this' keyword is necessary to distinguish between class fields and local variables/parameters with the same name.",
            topic: "this Keyword Usage",
            difficulty: "Intermediate",
            source: "Textbook - Section 3.3"
        },
        
        // ===== Phase 4: Garbage Collection & Destructors =====
        {
            id: 9,
            text: "Which memory section stores local variables that are removed automatically when they go out of scope?",
            options: [
                "Heap.",
                "Data section.",
                "Stack.",
                "Text section."
            ],
            correct: 2,
            explanation: "The Stack automatically manages local variables, removing them when they go out of scope.",
            topic: "Stack Memory",
            difficulty: "Beginner",
            source: "Textbook - Section 3.4"
        },
        {
            id: 10,
            text: "Unlike C++, C# uses ________ to automatically reclaim memory from objects no longer in use.",
            options: [
                "Delete operator.",
                "Garbage Collector.",
                "Destructors only.",
                "Memory pointers."
            ],
            correct: 1,
            explanation: "C# employs a Garbage Collector (GC) that automatically manages memory, unlike C++ which requires manual memory management.",
            topic: "Garbage Collection",
            difficulty: "Beginner",
            source: "Textbook - Section 3.4"
        },
        {
            id: 11,
            text: "A destructor name is the same as the class name but starts with which symbol?",
            options: [
                "Dot (.)",
                "Tilde (~)",
                "At (@)",
                "Hash (#)"
            ],
            correct: 1,
            explanation: "Destructors are named with the class name preceded by a tilde (~) symbol.",
            topic: "Destructor Syntax",
            difficulty: "Beginner",
            source: "Textbook - Section 3.4"
        },
        {
            id: 12,
            text: "Which of the following is TRUE about destructors?",
            options: [
                "They can take parameters.",
                "They can be overloaded.",
                "A class can have only one destructor and it cannot be called manually.",
                "They must be public."
            ],
            correct: 2,
            explanation: "In C#, a class can have only one destructor, it cannot have parameters, and it cannot be invoked directly.",
            topic: "Destructor Characteristics",
            difficulty: "Intermediate",
            source: "Textbook - Section 3.4"
        },
        
        // ===== Phase 5: Code Tracing (Advanced) =====
        {
            id: 13,
            text: "Predict the output of this code",
            options: [
                "A",
                "B",
                "B then A",
                "A then B"
            ],
            correct: 1,
            explanation: "The parameter-less constructor calls the parameterized constructor first, so 'B' is printed, then 'A'.",
            topic: "Constructor Chaining",
            difficulty: "Advanced",
            source: "Textbook - Section 3.5",
            image: "carbon1.png"
        },
        {
            id: 14,
            text: "What is the primary use of a destructor?",
            options: [
                "To initialize fields.",
                "To perform final cleanup (like closing files or network connections).",
                "To speed up the program.",
                "To create new instances."
            ],
            correct: 1,
            explanation: "Destructors are used for cleanup operations like releasing unmanaged resources before an object is garbage collected.",
            topic: "Destructor Purpose",
            difficulty: "Intermediate",
            source: "Textbook - Section 3.5"
        }
    ]
};

// ============================================
// Additional Practice Questions
// ============================================

const OOP_CHAPTER_3_EXTRA_QUESTIONS = [
    {
        id: 15,
        text: "When does the Garbage Collector run in C#?",
        options: [
            "At fixed time intervals.",
            "When memory is low or when explicitly called.",
            "Only when the program starts.",
            "Never - it runs continuously."
        ],
        correct: 1,
        explanation: "The GC runs when the system is low on memory or when GC.Collect() is explicitly called.",
        topic: "Garbage Collection Timing",
        difficulty: "Intermediate"
    },
    {
        id: 16,
        text: "What happens when you define only parameterized constructors in a class?",
        options: [
            "The default constructor is still available.",
            "You cannot create objects without parameters.",
            "The class becomes static.",
            "Compilation error occurs."
        ],
        correct: 1,
        explanation: "If you define any constructor, the default parameter-less constructor is not automatically provided.",
        topic: "Parameterized Constructors",
        difficulty: "Intermediate"
    },
    {
        id: 17,
        text: "Which of the following is a valid constructor?",
        options: [
            "public void MyClass() { }",
            "public MyClass(int x) : base() { }",
            "private ~MyClass() { }",
            "static MyClass() { }"
        ],
        correct: 1,
        explanation: "The second option is a valid parameterized constructor that calls the base class constructor.",
        topic: "Constructor Validation",
        difficulty: "Beginner"
    }
];

// ============================================
// Helper Functions for Chapter 3
// ============================================

// Get all questions for Chapter 3
function getChapter3Questions() {
    return OOP_CHAPTER_3.questions;
}

// Get all questions including extra
function getAllChapter3Questions() {
    return [...OOP_CHAPTER_3.questions, ...OOP_CHAPTER_3_EXTRA_QUESTIONS];
}

// Get random subset of questions
function getRandomChapter3Questions(count = 10) {
    const allQuestions = getAllChapter3Questions();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Get questions by difficulty
function getChapter3QuestionsByDifficulty(level) {
    return getAllChapter3Questions().filter(q => 
        q.difficulty.toLowerCase() === level.toLowerCase()
    );
}

// Get questions by topic
function getChapter3QuestionsByTopic(topic) {
    return getAllChapter3Questions().filter(q => 
        q.topic.toLowerCase().includes(topic.toLowerCase())
    );
}

// Get question statistics
function getChapter3Stats() {
    const allQuestions = getAllChapter3Questions();
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
// Update OOP_CHAPTERS Array with Chapter 3
// ============================================

// Initialize OOP_CHAPTERS if it doesn't exist
if (typeof OOP_CHAPTERS === 'undefined') {
    var OOP_CHAPTERS = [];
}

// Check if chapter 3 already exists
const chapter3Index = OOP_CHAPTERS.findIndex(ch => ch.id === 3);

if (chapter3Index !== -1) {
    // Update existing chapter 3
    OOP_CHAPTERS[chapter3Index] = OOP_CHAPTER_3;
} else {
    // Add chapter 3 at the correct position
    OOP_CHAPTERS.push(OOP_CHAPTER_3);
    // Sort chapters by ID to maintain order
    OOP_CHAPTERS.sort((a, b) => a.id - b.id);
}

// ============================================
// Enhanced Functions for Multi-Chapter Support
// ============================================

// Function to get questions by chapter ID (updated to support chapter 3)
function getChapterQuestions(chapterId) {
    // If the function already exists, extend it
    if (typeof getChapterQuestions === 'function') {
        // Handle chapter 3 specifically
        if (chapterId === 3) {
            return OOP_CHAPTER_3.questions;
        }
    }
    
    // Fallback to checking OOP_CHAPTERS
    if (typeof OOP_CHAPTERS !== 'undefined') {
        const chapter = OOP_CHAPTERS.find(ch => ch.id === chapterId);
        if (chapter && chapter.questions) {
            return chapter.questions;
        }
    }
    
    // Specific handling for each chapter
    switch (chapterId) {
        case 1:
            if (typeof OOP_CHAPTER_1 !== 'undefined') {
                return OOP_CHAPTER_1.questions || [];
            }
            break;
        case 2:
            if (typeof OOP_CHAPTER_2 !== 'undefined') {
                return OOP_CHAPTER_2.questions || [];
            }
            break;
        case 3:
            return OOP_CHAPTER_3.questions;
        default:
            return [];
    }
    
    return [];
}

// Function to get all questions from all chapters
function getAllOOPQuestions() {
    let allQuestions = [];
    
    // Collect from OOP_CHAPTERS if it exists
    if (typeof OOP_CHAPTERS !== 'undefined') {
        OOP_CHAPTERS.forEach(chapter => {
            if (chapter.questions) {
                allQuestions = allQuestions.concat(chapter.questions);
            }
        });
    } else {
        // Fallback to individual chapters
        if (typeof OOP_CHAPTER_1 !== 'undefined') {
            allQuestions = allQuestions.concat(OOP_CHAPTER_1.questions || []);
        }
        if (typeof OOP_CHAPTER_2 !== 'undefined') {
            allQuestions = allQuestions.concat(OOP_CHAPTER_2.questions || []);
        }
        allQuestions = allQuestions.concat(OOP_CHAPTER_3.questions);
    }
    
    return allQuestions;
}

// ============================================
// Export for Node.js (if needed)
// ============================================

if (typeof module !== 'undefined') {
    module.exports = {
        OOP_CHAPTER_3,
        OOP_CHAPTER_3_EXTRA_QUESTIONS,
        getChapter3Questions,
        getAllChapter3Questions,
        getRandomChapter3Questions,
        getChapterQuestions,
        getAllOOPQuestions,
        getChapter3Stats
    };
}

// ============================================
// Console logging for debugging
// ============================================

console.log("==========================================");
console.log("🎯 C# OOP Question Bank - Chapter 3 Loaded!");
console.log("==========================================");
console.log(`📚 Chapter: ${OOP_CHAPTER_3.title}`);
console.log(`❓ Total Questions: ${OOP_CHAPTER_3.questions.length}`);
console.log(`📊 Difficulty: ${OOP_CHAPTER_3.level}`);
console.log(`🎓 Topics Covered: Constructors, Destructors, Garbage Collection, this keyword`);
console.log("==========================================");
console.log(`📖 Total Chapters Available: ${OOP_CHAPTERS.length}`);
console.log("🚀 Chapter 3 ready for quiz engine integration!");
console.log("==========================================");

// Check if previous chapters are also loaded
if (typeof OOP_CHAPTER_1 !== 'undefined') {
    console.log("✅ Chapter 1 already loaded");
}
if (typeof OOP_CHAPTER_2 !== 'undefined') {
    console.log("✅ Chapter 2 already loaded");
}

if (typeof OOP_CHAPTERS === 'undefined') {
    var OOP_CHAPTERS = [];
}