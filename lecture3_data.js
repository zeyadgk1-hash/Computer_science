// lecture3_data.js
window.lecture3Questions = [
    {
        id: 1,
        question: "A source in which the voltage is completely independent of the current flowing through it is called an:",
        options: [
            "Dependent voltage source",
            "Independent voltage source",
            "Passive element",
            "Ideal resistor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Independent voltage source maintains constant voltage regardless of the current drawn from it."
    },
    {
        id: 2,
        question: "Which symbol is typically used to designate dependent sources in a circuit diagram?",
        options: [
            "Circle",
            "Square",
            "Diamond",
            "Triangle"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Dependent sources are represented by diamond-shaped symbols in circuit diagrams."
    },
    {
        id: 3,
        question: "A source whose output depends on a current or voltage elsewhere in the circuit is a:",
        options: [
            "Independent source",
            "Ideal source",
            "Dependent source",
            "Primary source"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Dependent sources' output voltage or current is controlled by another voltage or current in the circuit."
    },
    {
        id: 4,
        question: "How many types of dependent sources exist based on their control variables?",
        options: [
            "Two",
            "Three",
            "Four",
            "Six"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Four types: VCVS (Voltage-Controlled Voltage Source), CCVS (Current-Controlled Voltage Source), VCCS (Voltage-Controlled Current Source), CCCS (Current-Controlled Current Source)."
    },
    {
        id: 5,
        question: "Parallel current sources i₁, i₂, and i₃ can be replaced by a single source equal to:",
        options: [
            "i₁ + i₂ + i₃",
            "The algebraic sum of the currents",
            "The average of the currents",
            "The largest individual current"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Parallel current sources add algebraically (considering direction) to form an equivalent current source."
    },
    {
        id: 6,
        question: "Which connection is considered 'impossible' in ideal circuit theory?",
        options: [
            "Voltage sources of equal value in parallel",
            "Current sources of equal value in series",
            "Voltage sources of different values in parallel",
            "Resistors of different values in series"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Parallel connection of ideal voltage sources with different values creates a contradiction (KVL violation)."
    },
    {
        id: 7,
        question: "Nodal analysis is based primarily on the application of:",
        options: [
            "Kirchhoff's Voltage Law (KVL)",
            "Kirchhoff's Current Law (KCL)",
            "Faraday's Law",
            "The Principle of Superposition"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Nodal analysis applies KCL at each non-reference node to solve for node voltages."
    },
    {
        id: 8,
        question: "In Nodal Analysis, voltages are referenced with respect to a:",
        options: [
            "Power source",
            "Supernode",
            "Reference node (Ground)",
            "Dependent source"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "All node voltages are measured relative to a chosen reference node (usually ground)."
    },
    {
        id: 9,
        question: "A 'Supernode' is formed when a voltage source is connected between:",
        options: [
            "A nonreference node and the reference node",
            "Two nonreference nodes",
            "Two resistors in parallel",
            "Two current sources"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A supernode encloses two nonreference nodes connected by a voltage source (independent or dependent)."
    },
    {
        id: 10,
        question: "Mesh analysis is only applicable to which type of circuits?",
        options: [
            "Non-planar circuits",
            "Planar circuits",
            "Circuits with only dependent sources",
            "Circuits with more than 10 nodes"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Mesh analysis works only for planar circuits (can be drawn without crossing wires)."
    },
    {
        id: 11,
        question: "A 'Mesh' is defined as a loop that:",
        options: [
            "Contains at least two voltage sources",
            "Passes through the reference node",
            "Does not contain any other loop within it",
            "Crosses at least one branch"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "A mesh is the simplest loop - contains no other loops inside it (like a window pane)."
    },
    {
        id: 12,
        question: "Mesh analysis involves solving simultaneous equations to determine unknown:",
        options: [
            "Node voltages",
            "Branch resistances",
            "Mesh currents",
            "Power dissipation"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Mesh analysis solves for mesh currents, then branch currents/voltages are derived from them."
    },
    {
        id: 13,
        question: "A 'Super-mesh' results when two meshes share a common:",
        options: [
            "Resistor",
            "Voltage source",
            "Current source",
            "Reference node"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Supermesh is created when a current source lies between two meshes (not in series with a resistor)."
    },
    {
        id: 14,
        question: "When choosing between methods, Nodal Analysis is generally best for circuits with:",
        options: [
            "Many current sources",
            "Many voltage sources",
            "No independent sources",
            "Only series resistors"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Nodal analysis is often simpler when there are many voltage sources (fewer nodes than meshes)."
    },
    {
        id: 15,
        question: "The linearity property is a combination of which two properties?",
        options: [
            "Resistance and Conductance",
            "KCL and KVL",
            "Homogeneity and Additivity",
            "Thevenin and Norton"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Linearity = Homogeneity (scaling) + Additivity (superposition). If y = f(x) is linear, then f(ax₁ + bx₂) = af(x₁) + bf(x₂)."
    },
    {
        id: 16,
        question: "If an input is multiplied by a constant k and the output is also multiplied by k, the circuit satisfies:",
        options: [
            "Additivity",
            "Homogeneity (Scaling)",
            "Duality",
            "Passive sign convention"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Homogeneity property: f(kx) = k f(x) for any constant k."
    },
    {
        id: 17,
        question: "Why is power (P = i²R) considered a non-linear relationship?",
        options: [
            "It depends on the reference node",
            "It does not satisfy the homogeneity property",
            "It only applies to dependent sources",
            "It is always a constant value"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "P(i) = i²R; P(ki) = (ki)²R = k²i²R ≠ kP(i) unless k=0 or k=1, so it's non-linear."
    },
    {
        id: 18,
        question: "According to the Superposition Principle, to 'turn off' an independent voltage source, you must replace it with a:",
        options: [
            "Open circuit (0 A)",
            "Resistor of infinite value",
            "Short circuit (0 V)",
            "Dependent source"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Turning off voltage source means setting V = 0 → short circuit (wire)."
    },
    {
        id: 19,
        question: "To 'turn off' an independent current source during Superposition, you replace it with a:",
        options: [
            "Short circuit",
            "Open circuit",
            "1-Ohm resistor",
            "Ground connection"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Turning off current source means setting I = 0 → open circuit (no path)."
    },
    {
        id: 20,
        question: "During the application of Superposition, dependent sources are:",
        options: [
            "Turned off like independent sources",
            "Replaced by short circuits",
            "Left intact in the circuit",
            "Replaced by their controlling variables"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Dependent sources remain active in each superposition step; only independent sources are turned off."
    },
    {
        id: 21,
        question: "Source transformation allows a voltage source V_s in series with resistor R to be replaced by a current source i_s in parallel with R, where:",
        options: [
            "i_s = V_s × R",
            "i_s = V_s / R",
            "i_s = V_s + R",
            "i_s = R / V_s"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Source transformation: V_s series R ↔ I_s = V_s/R parallel R."
    },
    {
        id: 22,
        question: "Source transformation is NOT possible for which of the following?",
        options: [
            "A real voltage source",
            "A dependent current source",
            "An ideal voltage source (R=0)",
            "A resistor in series with a battery"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Ideal voltage source (R=0) transforms to infinite current source → not practical. Need finite R."
    },
    {
        id: 23,
        question: "Thevenin's Theorem states that a linear two-terminal circuit can be replaced by:",
        options: [
            "A current source and parallel resistor",
            "A voltage source and series resistor",
            "A single equivalent capacitor",
            "Three resistors in a delta configuration"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Thevenin equivalent: V_th (open-circuit voltage) in series with R_th (equivalent resistance)."
    },
    {
        id: 24,
        question: "The Thevenin voltage (V_th) is equal to the:",
        options: [
            "Short-circuit current",
            "Open-circuit voltage at the terminals",
            "Total source voltage",
            "Voltage across the load resistor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "V_th = voltage across terminals with load removed (open-circuit)."
    },
    {
        id: 25,
        question: "To find the Thevenin resistance (R_th) in a circuit with only independent sources, you:",
        options: [
            "Measure the voltage with the load attached",
            "Turn off independent sources and simplify the remaining resistor network",
            "Divide total voltage by total current",
            "Short the output terminals"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "With independent sources off (V=0 short, I=0 open), R_th is the resistance seen from terminals."
    },
    {
        id: 26,
        question: "If a circuit contains dependent sources, R_th can be found by applying a test voltage v₀ and calculating:",
        options: [
            "v₀ × i₀",
            "v₀ / i₀",
            "i₀ / v₀",
            "v₀ + i₀"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For circuits with dependent sources: apply test source (V_test or I_test) and find R_th = V_test/I_test."
    },
    {
        id: 27,
        question: "Norton's Theorem replaces a linear two-terminal circuit with:",
        options: [
            "An equivalent voltage source and series resistor",
            "An equivalent current source (I_N) and parallel resistor (R_N)",
            "A short circuit",
            "A dependent source only"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Norton equivalent: I_N (short-circuit current) parallel with R_N (= R_th)."
    },
    {
        id: 28,
        question: "The relationship between Norton resistance (R_N) and Thevenin resistance (R_th) is:",
        options: [
            "R_N = 1 / R_th",
            "R_N = R_th",
            "R_N = V_th × I_N",
            "They are unrelated"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "R_N = R_th; same equivalent resistance in both theorems."
    },
    {
        id: 29,
        question: "The Norton current (I_N) is equal to the:",
        options: [
            "Open-circuit voltage",
            "Short-circuit current at the terminals",
            "Current through the first branch",
            "Sum of all mesh currents"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "I_N = current through shorted terminals (short-circuit current)."
    },
    {
        id: 30,
        question: "A negative Thevenin resistance indicates that the circuit:",
        options: [
            "Is broken",
            "Has the ability to provide power",
            "Is purely capacitive",
            "Contains only insulators"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Negative R_th occurs in active circuits (with dependent sources) that can deliver power."
    }
];

// إضافة رسالة تحميل في الكونسول
console.log("✅ lecture3_data.js loaded successfully!");
console.log(`📚 Total questions: ${window.lecture3Questions.length}`);
console.log("📝 Topic: Circuit Analysis and Theorems (Nodal, Mesh, Superposition, Thevenin, Norton)");