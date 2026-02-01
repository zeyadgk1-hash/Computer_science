// lecture2_data.js
window.lecture2Questions = [
    {
        id: 1,
        question: "Resistance is a property of a material that tends to:",
        options: [
            "Increase the flow of electricity",
            "Resist the flow of electricity",
            "Generate electrical power",
            "Change the direction of current"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Resistance opposes or resists the flow of electric current through a material."
    },
    {
        id: 2,
        question: "Which formula correctly represents the resistance of an object?",
        options: [
            "$R = \\rho \\frac{A}{l}$",
            "$R = \\frac{V}{I}$",
            "$R = \\rho \\frac{l}{A}$",
            "Both B and C are correct"
        ],
        correctAnswer: 3,
        marks: 3,
        explanation: "Both $R = V/I$ (Ohm's Law) and $R = \\rho l/A$ (resistivity formula) are correct expressions for resistance."
    },
    {
        id: 3,
        question: "In the formula $R = \\rho \\frac{l}{A}$, what does the symbol $\\rho$ represent?",
        options: [
            "Resistance",
            "Power",
            "Resistivity",
            "Current density"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "$\\rho$ represents resistivity, an intrinsic property of the material that quantifies how strongly it opposes current flow."
    },
    {
        id: 4,
        question: "According to Ohm's Law, voltage across a resistor is directly proportional to:",
        options: [
            "The length of the wire",
            "The current flowing through it",
            "The power dissipated",
            "The square of the resistance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Ohm's Law states $V = IR$, meaning voltage is directly proportional to current for a constant resistance."
    },
    {
        id: 5,
        question: "What is the unit of measurement for resistance?",
        options: [
            "Amperes (A)",
            "Volts (V)",
            "Ohms ($\\Omega$)",
            "Watts (W)"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Resistance is measured in Ohms ($\\Omega$), named after Georg Simon Ohm."
    },
    {
        id: 6,
        question: "If resistance increases in a circuit while voltage remains constant, the current will:",
        options: [
            "Increase",
            "Decrease",
            "Stay the same",
            "Drop to zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "From Ohm's Law $I = V/R$, if $R$ increases and $V$ is constant, $I$ must decrease."
    },
    {
        id: 7,
        question: "Which of the following materials is considered the best conductor based on its resistivity?",
        options: [
            "Silver ($1.64 \\times 10^{-8}\\, \\Omega\\cdot\\text{m}$)",
            "Aluminum ($2.8 \\times 10^{-8}\\, \\Omega\\cdot\\text{m}$)",
            "Carbon ($4 \\times 10^{-5}\\, \\Omega\\cdot\\text{m}$)",
            "Silicon ($6.4 \\times 10^{2}\\, \\Omega\\cdot\\text{m}$)"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Silver has the lowest resistivity ($1.64 \\times 10^{-8}\\, \\Omega\\cdot\\text{m}$) among the listed materials, making it the best conductor."
    },
    {
        id: 8,
        question: "Materials like Teflon and Glass are categorized as:",
        options: [
            "Conductors",
            "Semiconductors",
            "Insulators",
            "Linear resistors"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Teflon and glass have very high resistivity and are used as insulators to prevent current flow."
    },
    {
        id: 9,
        question: "Resistors that strictly obey Ohm's Law and have a linearly proportional current-voltage relationship are called:",
        options: [
            "Non-linear resistors",
            "Linear resistors",
            "Diodes",
            "Active elements"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Linear resistors maintain a constant resistance value, resulting in a straight-line I-V characteristic that obeys Ohm's Law."
    },
    {
        id: 10,
        question: "Which of these is an example of a non-linear element?",
        options: [
            "Copper wire",
            "Silver conductor",
            "Light bulb",
            "Standard carbon resistor"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "A light bulb's filament resistance changes with temperature, making its I-V relationship non-linear."
    },
    {
        id: 11,
        question: "A connection with almost zero resistance is known as a:",
        options: [
            "Open circuit",
            "Short circuit",
            "Parallel circuit",
            "Bridge circuit"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A short circuit provides a path of negligible resistance between two points in a circuit."
    },
    {
        id: 12,
        question: "In an ideal short circuit, what is the value of the current?",
        options: [
            "Exactly zero",
            "Always 1 Ampere",
            "Any current may flow",
            "Infinite voltage"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "In an ideal short circuit, current is theoretically unlimited (in practice, limited by the source's capacity)."
    },
    {
        id: 13,
        question: "An open circuit is characterized by having:",
        options: [
            "Zero resistance",
            "Infinite resistance",
            "High power dissipation",
            "Constant current flow"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "An open circuit has an extremely high (ideally infinite) resistance, preventing current flow."
    },
    {
        id: 14,
        question: "In an open circuit, no matter the voltage, the current flow is:",
        options: [
            "Maximum",
            "Equal to the resistance",
            "Zero",
            "Constant"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "With infinite resistance, current is zero regardless of applied voltage (from Ohm's Law: $I = V/\\infty = 0$)."
    },
    {
        id: 15,
        question: "Which formula is used to calculate power dissipation in a resistor?",
        options: [
            "$p = vi$",
            "$p = i^2R$",
            "$p = \\frac{v^2}{R}$",
            "All of the above"
        ],
        correctAnswer: 3,
        marks: 3,
        explanation: "All three formulas are equivalent and valid for calculating power in a resistor when Ohm's Law applies."
    },
    {
        id: 16,
        question: "Power dissipated by a resistor is always:",
        options: [
            "Negative",
            "Zero",
            "Positive",
            "Equal to the voltage"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Resistors consume energy, converting electrical energy to heat, so their power dissipation is always positive."
    },
    {
        id: 17,
        question: "Can a resistor generate power?",
        options: [
            "Yes, if the current is high enough",
            "No, it can never generate power",
            "Only in a parallel configuration",
            "Only if it is a non-linear element"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Resistors are passive elements that only absorb power (convert it to heat), never generate it."
    },
    {
        id: 18,
        question: "A 'branch' in a circuit represents:",
        options: [
            "A connection of three or more wires",
            "A single element like a resistor or source",
            "A closed path",
            "A point of zero voltage"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A branch is a single two-terminal element (resistor, voltage source, etc.) in a circuit."
    },
    {
        id: 19,
        question: "What is a 'node'?",
        options: [
            "A single circuit element",
            "Any closed path in a circuit",
            "The point of connection between two or more branches",
            "A type of insulator"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "A node is a junction point where two or more circuit elements connect."
    },
    {
        id: 20,
        question: "A 'loop' is defined as:",
        options: [
            "A single resistor",
            "Any closed path in a circuit",
            "A connection of two nodes",
            "The flow of electrons in one direction"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A loop is any closed conducting path in a circuit where you can start and end at the same point without lifting your pen."
    },
    {
        id: 21,
        question: "Two elements are in series if they share a single node and carry:",
        options: [
            "The same voltage",
            "The same current",
            "Zero power",
            "Different resistance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Series-connected elements have the same current flowing through them, as there's only one path for current."
    },
    {
        id: 22,
        question: "Elements are in parallel if they are connected to the same two nodes and have:",
        options: [
            "The same voltage",
            "The same current",
            "Half the resistance",
            "Infinite loop paths"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Parallel-connected elements have the same voltage across their terminals since they're connected between the same two nodes."
    },
    {
        id: 23,
        question: "Kirchhoff's Current Law (KCL) is based on the conservation of:",
        options: [
            "Energy",
            "Mass",
            "Charge",
            "Resistance"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "KCL states that charge cannot accumulate at a node; the sum of currents entering equals the sum leaving."
    },
    {
        id: 24,
        question: "Kirchhoff's Voltage Law (KVL) is based on the conservation of:",
        options: [
            "Energy",
            "Charge",
            "Current",
            "Time"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "KVL is derived from energy conservation; the net energy gained/lost around any closed loop is zero."
    },
    {
        id: 25,
        question: "KCL states that the algebraic sum of currents entering a node is:",
        options: [
            "Equal to the voltage",
            "One",
            "Zero",
            "Infinite"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "KCL: $\\sum I_{in} = \\sum I_{out}$, or equivalently $\\sum I = 0$ (taking current entering as positive)."
    },
    {
        id: 26,
        question: "For N resistors in series, the equivalent resistance ($R_{eq}$) is found by:",
        options: [
            "Multiplying all resistances",
            "Taking the reciprocal sum",
            "Summing all individual resistances",
            "Averaging the resistances"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Series resistances add directly: $R_{eq} = R_1 + R_2 + ... + R_N$."
    },
    {
        id: 27,
        question: "The principle of 'Voltage Division' applies to resistors in:",
        options: [
            "Parallel",
            "Series",
            "Both series and parallel",
            "Bridge circuits only"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Voltage divides among series resistors in proportion to their resistance values."
    },
    {
        id: 28,
        question: "What is the equivalent resistance ($R_{eq}$) of two resistors, $R_1$ and $R_2$, in parallel?",
        options: [
            "$R_1 + R_2$",
            "$\\frac{R_1 + R_2}{R_1 R_2}$",
            "$\\frac{R_1 R_2}{R_1 + R_2}$",
            "$R_1 - R_2$"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "For two parallel resistors: $R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}$ (product over sum)."
    },
    {
        id: 29,
        question: "Wye-Delta transformations are useful when resistors are:",
        options: [
            "Only in series",
            "Only in parallel",
            "Neither parallel nor series",
            "Connected to a single node"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Wye-Delta transformations simplify circuits where resistors are interconnected in ways that aren't simple series or parallel."
    },
    {
        id: 30,
        question: "In a Delta to Wye transformation, the wye resistors are located:",
        options: [
            "Outside the delta",
            "Inside the delta",
            "Parallel to the delta",
            "At the voltage source"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "The wye (Y) configuration is formed inside the delta (Δ) triangle, with resistors radiating from a central point."
    }
];

// إضافة رسالة تحميل في الكونسول
console.log("✅ lecture2_data.js loaded successfully!");
console.log(`📚 Total questions: ${window.lecture2Questions.length}`);