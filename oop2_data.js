// ============================================
// C# OOP CHAPTER 2: CLASS MEMBERS
// Complete Question Bank for University Students
// Total: 15 Questions with Code Examples
// ============================================

var OOP_CHAPTER_2 = {
    id: 2,
    title: "Chapter 2: Class Members",
    description: "Fields, Methods, Static Members, Access Modifiers & Encapsulation",
    level: "Beginner",
    color: "#2563eb",
    icon: "🔒",
    
    questions: [
        // ===== Phase 1: Fields and Methods (The Basics) =====
        {
            id: 1,
            text: "Fields and methods inside classes are referred to as:",
            options: [
                "Class objects.",
                "Class members.",
                "Class parameters.",
                "Local variables."
            ],
            correct: 1,
            explanation: "Fields and methods are collectively called class members because they belong to the class.",
            topic: "Class Members Basics",
            difficulty: "Beginner",
            source: "Textbook - Section 2.1"
        },
        {
            id: 2,
            text: "To access a field or call a method of an object, you must use the ________ syntax.",
            options: [
                "Plus (+)",
                "Arrow (->)",
                "Dot (.)",
                "Colon (:)"
            ],
            correct: 2,
            explanation: "In C#, the dot operator (.) is used to access members of an object.",
            topic: "Member Access Syntax",
            difficulty: "Beginner",
            source: "Textbook - Section 2.1"
        },
        {
            id: 3,
            text: "Object methods define how an object of a class ________.",
            options: [
                "Is stored.",
                "Behaves.",
                "Is named.",
                "Is initialized."
            ],
            correct: 1,
            explanation: "Methods define the behavior or actions that an object can perform.",
            topic: "Methods Definition",
            difficulty: "Beginner",
            source: "Textbook - Section 2.1"
        },
        
        // ===== Phase 2: Static Members (Global Concepts) =====
        {
            id: 4,
            text: "A static method belongs to the ________ rather than an object created from it.",
            options: [
                "Stack.",
                "Heap.",
                "Class.",
                "Method."
            ],
            correct: 2,
            explanation: "Static methods belong to the class itself, not to any specific instance.",
            topic: "Static Methods",
            difficulty: "Beginner",
            source: "Textbook - Section 2.2"
        },
        {
            id: 5,
            text: "Calling a static method ________ require creating an object.",
            options: [
                "Always.",
                "Does not.",
                "Sometimes.",
                "Usually."
            ],
            correct: 1,
            explanation: "Static methods can be called directly using the class name, without creating an object.",
            topic: "Static Method Usage",
            difficulty: "Beginner",
            source: "Textbook - Section 2.2"
        },
        {
            id: 6,
            text: "Static fields serve as global variables that are always in memory in the ________ section.",
            options: [
                "Stack.",
                "Heap.",
                "Text.",
                "Data."
            ],
            correct: 3,
            explanation: "Static fields are stored in the Data section of memory and exist for the entire program lifetime.",
            topic: "Static Fields Memory",
            difficulty: "Intermediate",
            source: "Textbook - Section 2.2"
        },
        {
            id: 7,
            text: "How many copies of a static member exist, regardless of how many instances (objects) are created?",
            options: [
                "Zero.",
                "Only one.",
                "One for each object.",
                "Three."
            ],
            correct: 1,
            explanation: "Static members have only one copy that is shared among all instances of the class.",
            topic: "Static Member Count",
            difficulty: "Beginner",
            source: "Textbook - Section 2.2"
        },
        
        // ===== Phase 3: Static Classes =====
        {
            id: 8,
            text: "A static class ________ be instantiated (cannot have objects).",
            options: [
                "Can.",
                "Cannot.",
                "Must.",
                "Should."
            ],
            correct: 1,
            explanation: "Static classes cannot be instantiated; they are sealed and cannot have instance constructors.",
            topic: "Static Classes",
            difficulty: "Intermediate",
            source: "Textbook - Section 2.3"
        },
        {
            id: 9,
            text: "All members of a static class must be ________.",
            options: [
                "Private.",
                "Public.",
                "Static.",
                "Non-static."
            ],
            correct: 2,
            explanation: "A static class can only contain static members (fields, methods, properties).",
            topic: "Static Class Members",
            difficulty: "Intermediate",
            source: "Textbook - Section 2.3"
        },
        
        // ===== Phase 4: Access Modifiers & Encapsulation =====
        {
            id: 10,
            text: "Which access modifier makes a member accessible only within the same class?",
            options: [
                "Public.",
                "Internal.",
                "Private.",
                "Protected."
            ],
            correct: 2,
            explanation: "The private access modifier restricts access to the containing class only.",
            topic: "Access Modifiers",
            difficulty: "Beginner",
            source: "Textbook - Section 2.4"
        },
        {
            id: 11,
            text: "By default, if no access modifier is specified, all members of a class are ________.",
            options: [
                "Public.",
                "Private.",
                "Protected.",
                "Internal."
            ],
            correct: 1,
            explanation: "In C#, class members are private by default if no access modifier is specified.",
            topic: "Default Access",
            difficulty: "Beginner",
            source: "Textbook - Section 2.4"
        },
        {
            id: 12,
            text: "________ is a protective shield that prevents the internal data of an object from being accessed directly by outside code.",
            options: [
                "Inheritance.",
                "Polymorphism.",
                "Encapsulation (Data-hiding).",
                "Instantiation."
            ],
            correct: 2,
            explanation: "Encapsulation bundles data and methods together and restricts direct access to data.",
            topic: "Encapsulation Definition",
            difficulty: "Beginner",
            source: "Textbook - Section 2.5"
        },
        {
            id: 13,
            text: "Encapsulation can be achieved by declaring fields as ________ and providing access through ________ methods.",
            options: [
                "Public, Private.",
                "Private, Public.",
                "Static, Instance.",
                "Protected, Public."
            ],
            correct: 1,
            explanation: "Fields are made private to hide data, and public methods (getters/setters) provide controlled access.",
            topic: "Encapsulation Implementation",
            difficulty: "Intermediate",
            source: "Textbook - Section 2.5"
        },
        
        // ===== Phase 5: Code Tracing (Advanced Logic) =====
        {
            id: 14,
            text: "Predict the output of this code",
            options: [
                "10.",
                "25.",
                "5.",
                "Error (Need to create Math object)."
            ],
            correct: 1,
            explanation: "Math.Pow() is a static method that calculates 5^2 = 25. No object needed.",
            topic: "Static Method Example",
            difficulty: "Intermediate",
            source: "Textbook - Section 2.6",
            image: "carbon12.png"
        },
        {
            id: 15,
            text: "What will happen if you try to access a private field from another class?",
            options: [
                "The program will run normally.",
                "It will return a null value.",
                "A compiler error: 'Member' is inaccessible due to its protection level.",
                "The computer will restart."
            ],
            correct: 2,
            explanation: "Private members cannot be accessed from outside their containing class.",
            topic: "Private Access Error",
            difficulty: "Beginner",
            source: "Textbook - Section 2.6"
        }
    ]
};

// ============================================
// Additional Practice Questions
// ============================================

const OOP_CHAPTER_2_EXTRA_QUESTIONS = [
    {
        id: 16,
        text: "What is the main purpose of using static methods?",
        options: [
            "To improve performance",
            "To create utility functions that don't need object state",
            "To make code more complex",
            "To increase memory usage"
        ],
        correct: 1,
        explanation: "Static methods are used for utility functions that don't depend on instance data.",
        topic: "Static Methods Purpose",
        difficulty: "Beginner"
    },
    {
        id: 17,
        text: "Which of the following correctly demonstrates encapsulation?",
        options: [
            "public string name;",
            "private string name; public string GetName() { return name; }",
            "protected string name;",
            "All fields are public"
        ],
        correct: 1,
        explanation: "Encapsulation uses private fields with public methods to control access.",
        topic: "Encapsulation Example",
        difficulty: "Intermediate"
    },
    {
        id: 18,
        text: "When should you use a static class instead of a regular class?",
        options: [
            "When you need to create multiple objects",
            "When the class only contains helper/utility methods",
            "When you need inheritance",
            "When you need instance-specific data"
        ],
        correct: 1,
        explanation: "Static classes are ideal for utility classes that don't need state or instances.",
        topic: "Static Class Usage",
        difficulty: "Intermediate"
    }
];

// ============================================
// Helper Functions for Chapter 2
// ============================================

// Get all questions for Chapter 2
function getChapter2Questions() {
    return OOP_CHAPTER_2.questions;
}

// Get all questions including extra
function getAllChapter2Questions() {
    return [...OOP_CHAPTER_2.questions, ...OOP_CHAPTER_2_EXTRA_QUESTIONS];
}

// Get random subset of questions
function getRandomChapter2Questions(count = 10) {
    const allQuestions = getAllChapter2Questions();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Get questions by difficulty
function getChapter2QuestionsByDifficulty(level) {
    return getAllChapter2Questions().filter(q => 
        q.difficulty.toLowerCase() === level.toLowerCase()
    );
}

// Get questions by topic
function getChapter2QuestionsByTopic(topic) {
    return getAllChapter2Questions().filter(q => 
        q.topic.toLowerCase().includes(topic.toLowerCase())
    );
}

// Get question statistics
function getChapter2Stats() {
    const allQuestions = getAllChapter2Questions();
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
// Update OOP_CHAPTERS Array with Chapter 2
// ============================================

// Find OOP_CHAPTERS array in global scope and update it
if (typeof OOP_CHAPTERS !== 'undefined') {
    // Check if chapter 2 already exists
    const chapter2Index = OOP_CHAPTERS.findIndex(ch => ch.id === 2);
    
    if (chapter2Index !== -1) {
        // Update existing chapter 2
        OOP_CHAPTERS[chapter2Index] = OOP_CHAPTER_2;
    } else {
        // Add chapter 2 at the correct position
        OOP_CHAPTERS.splice(1, 0, OOP_CHAPTER_2);
    }
} else {
    // Create OOP_CHAPTERS if it doesn't exist
    const OOP_CHAPTERS = [
        // Chapter 1 should be loaded from oop1_data.js
        OOP_CHAPTER_2
        // Other chapters will be added here
    ];
}

// ============================================
// Enhanced Functions for Multi-Chapter Support
// ============================================

// Function to get questions by chapter ID (updated to support chapter 2)
function getChapterQuestions(chapterId) {
    // If the function already exists, check if it handles chapter 2
    if (typeof getChapterQuestions === 'function' && chapterId === 2) {
        return OOP_CHAPTER_2.questions;
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
            return OOP_CHAPTER_2.questions;
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
        allQuestions = allQuestions.concat(OOP_CHAPTER_2.questions);
    }
    
    return allQuestions;
}

// ============================================
// Export for Node.js (if needed)
// ============================================

if (typeof module !== 'undefined') {
    module.exports = {
        OOP_CHAPTER_2,
        OOP_CHAPTER_2_EXTRA_QUESTIONS,
        getChapter2Questions,
        getAllChapter2Questions,
        getRandomChapter2Questions,
        getChapterQuestions,
        getAllOOPQuestions,
        getChapter2Stats
    };
}

// ============================================
// Console logging for debugging
// ============================================

console.log("==========================================");
console.log("🎯 C# OOP Question Bank - Chapter 2 Loaded!");
console.log("==========================================");
console.log(`📚 Chapter: ${OOP_CHAPTER_2.title}`);
console.log(`❓ Total Questions: ${OOP_CHAPTER_2.questions.length}`);
console.log(`📊 Difficulty: ${OOP_CHAPTER_2.level}`);
console.log(`🎓 Topics Covered: Class Members, Static, Access Modifiers, Encapsulation`);
console.log("==========================================");
console.log("🚀 Chapter 2 ready for quiz engine integration!");
console.log("==========================================");

// Check if chapter 1 is also loaded
if (typeof OOP_CHAPTER_1 !== 'undefined') {
    console.log("✅ Chapter 1 already loaded - Multi-chapter system active!");
}

// Initialize compatibility with existing quiz engine
if (typeof QuizEngine !== 'undefined') {
    console.log("✅ Quiz Engine detected - Chapter 2 integrated!");
}