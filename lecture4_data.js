// lecture4_data.js
window.lecture4Questions = [
    {
        id: 1,
        question: "A capacitor is a passive element designed to store energy in its:",
        options: [
            "Magnetic field",
            "Electric field",
            "Chemical bonds",
            "Internal resistance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A capacitor stores energy in the electric field between its plates when a voltage is applied."
    },
    {
        id: 2,
        question: "The capacitance C of a capacitor is defined as the ratio of the charge q on one plate to the:",
        options: [
            "Current i",
            "Resistance R",
            "Potential difference v",
            "Area of the plates A"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Capacitance is defined as $C = \\frac{q}{v}$, where q is charge and v is voltage."
    },
    {
        id: 3,
        question: "What is the unit of measurement for capacitance?",
        options: [
            "Henry (H)",
            "Farad (F)",
            "Ohm ($\\Omega$)",
            "Tesla (T)"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "The Farad (F) is the SI unit of capacitance, named after Michael Faraday."
    },
    {
        id: 4,
        question: "The capacitance of a parallel-plate capacitor is directly proportional to:",
        options: [
            "The distance between plates (d)",
            "The surface area of each plate (A)",
            "The voltage applied (v)",
            "The current flow (i)"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For parallel plates: $C = \\frac{\\epsilon A}{d}$, where A is area, d is separation, and ε is permittivity."
    },
    {
        id: 5,
        question: "Which of the following formulas represents the current-voltage relationship for a capacitor?",
        options: [
            "$v = L \\frac{di}{dt}$",
            "$i = C \\frac{dv}{dt}$",
            "$v = iR$",
            "$q = Cv^2$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For a capacitor: $i = C \\frac{dv}{dt}$, current is proportional to the rate of change of voltage."
    },
    {
        id: 6,
        question: "Under DC conditions (where voltage is constant), a capacitor acts as an:",
        options: [
            "Short circuit",
            "Open circuit",
            "Ideal voltage source",
            "Resistor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "With constant voltage, $dv/dt = 0$, so $i = C \\times 0 = 0$ → open circuit."
    },
    {
        id: 7,
        question: "The energy stored in a capacitor is given by the formula:",
        options: [
            "$w = \\frac{1}{2} C v^2$",
            "$w = \\frac{1}{2} L i^2$",
            "$w = qv$",
            "$w = Cv$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Energy stored in a capacitor: $W = \\frac{1}{2}CV^2$ or $W = \\frac{Q^2}{2C}$."
    },
    {
        id: 8,
        question: "An ideal capacitor does not:",
        options: [
            "Store energy",
            "Dissipate energy",
            "Oppose changes in voltage",
            "Require a dielectric"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Ideal capacitors store energy without loss; real capacitors have some leakage/resistance."
    },
    {
        id: 9,
        question: "When capacitors are connected in parallel, the equivalent capacitance ($C_{eq}$) is:",
        options: [
            "The sum of the individual capacitances",
            "The reciprocal sum of the capacitances",
            "The product divided by the sum",
            "Equal to the smallest capacitor"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Parallel capacitors: $C_{eq} = C_1 + C_2 + ... + C_n$ (similar to resistors in series)."
    },
    {
        id: 10,
        question: "For capacitors in series, the equivalent capacitance is found by:",
        options: [
            "$C_{eq} = C_1 + C_2 + \\dots + C_n$",
            "$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots + \\frac{1}{C_n}$",
            "$C_{eq} = \\sqrt{C_1 C_2}$",
            "$C_{eq} = C_1 - C_2$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Series capacitors: $\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + ... + \\frac{1}{C_n}$ (like resistors in parallel)."
    },
    {
        id: 11,
        question: "In a series connection of two capacitors, the voltage $v_1$ across $C_1$ can be found using:",
        options: [
            "$v_1 = \\frac{C_1}{C_1 + C_2} v$",
            "$v_1 = \\frac{C_2}{C_1 + C_2} v$",
            "$v_1 = \\frac{i}{C_1}$",
            "$v_1 = v$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Voltage division for series capacitors: $v_1 = v \\times \\frac{C_2}{C_1 + C_2}$ (opposite of resistors)."
    },
    {
        id: 12,
        question: "An inductor is a passive element designed to store energy in its:",
        options: [
            "Electric field",
            "Magnetic field",
            "Dielectric material",
            "Core resistance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Inductors store energy in the magnetic field created by current flow through a coil."
    },
    {
        id: 13,
        question: "The unit of inductance is the:",
        options: [
            "Farad (F)",
            "Henry (H)",
            "Weber (Wb)",
            "Joule (J)"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "The Henry (H) is the SI unit of inductance, named after Joseph Henry."
    },
    {
        id: 14,
        question: "The voltage across an inductor is directly proportional to:",
        options: [
            "The current flowing through it",
            "The time rate of change of the current",
            "The square of the current",
            "The total charge stored"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Inductor voltage: $v = L \\frac{di}{dt}$, proportional to the rate of change of current."
    },
    {
        id: 15,
        question: "Under DC conditions (where current is constant), an inductor acts as a:",
        options: [
            "Open circuit",
            "Short circuit",
            "Resistor",
            "Capacitor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "With constant current, $di/dt = 0$, so $v = L \\times 0 = 0$ → short circuit."
    },
    {
        id: 16,
        question: "Which property of an inductor is true?",
        options: [
            "It opposes an abrupt change in the current",
            "It opposes an abrupt change in the voltage",
            "It dissipates energy as heat",
            "It stores charge on its plates"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Inductors oppose changes in current (Lenz's Law), providing electrical inertia."
    },
    {
        id: 17,
        question: "The energy stored in an inductor is calculated as:",
        options: [
            "$w = \\frac{1}{2} L i^2$",
            "$w = \\frac{1}{2} C v^2$",
            "$w = Li$",
            "$w = L \\frac{di}{dt}$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Energy stored in an inductor: $W = \\frac{1}{2}LI^2$, analogous to kinetic energy."
    },
    {
        id: 18,
        question: "Real (non-ideal) inductors have a parasitic:",
        options: [
            "Capacitance only",
            "Winding resistance ($R_w$) and charging capacitance ($C_p$)",
            "Voltage source",
            "Open circuit behavior at DC"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Real inductors have wire resistance ($R_w$) and inter-winding capacitance ($C_p$)."
    },
    {
        id: 19,
        question: "Inductors connected in series have an equivalent inductance ($L_{eq}$) equal to:",
        options: [
            "The reciprocal sum of the inductances",
            "The sum of the individual inductances",
            "The square root of the sum",
            "Zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Series inductors: $L_{eq} = L_1 + L_2 + ... + L_n$ (no mutual coupling assumed)."
    },
    {
        id: 20,
        question: "Parallel-connected inductors have an equivalent inductance ($L_{eq}$) that satisfies:",
        options: [
            "$L_{eq} = L_1 + L_2 + \\dots + L_n$",
            "$\\frac{1}{L_{eq}} = \\frac{1}{L_1} + \\frac{1}{L_2} + \\dots + \\frac{1}{L_n}$",
            "$L_{eq} = \\frac{1}{L_1 + L_2}$",
            "$L_{eq} = L_1 \\times L_2$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Parallel inductors: $\\frac{1}{L_{eq}} = \\frac{1}{L_1} + \\frac{1}{L_2} + ... + \\frac{1}{L_n}$ (no mutual coupling)."
    },
    {
        id: 21,
        question: "A 'differentiator' circuit can be built using an op-amp and a:",
        options: [
            "Resistor only",
            "Capacitor",
            "Inductor",
            "Voltage source"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Differentiator uses capacitor in input path: $v_{out} = -RC \\frac{dv_{in}}{dt}$."
    },
    {
        id: 22,
        question: "In an 'integrator' circuit, the capacitor is placed in the:",
        options: [
            "Input path",
            "Feedback path",
            "Ground path",
            "Power supply path"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Integrator uses capacitor in feedback: $v_{out} = -\\frac{1}{RC} \\int v_{in} dt$."
    },
    {
        id: 23,
        question: "Which element's voltage is $v = L \\frac{di}{dt}$?",
        options: [
            "Resistor",
            "Capacitor",
            "Inductor",
            "Independent source"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "$v = L \\frac{di}{dt}$ is the defining equation for an inductor."
    },
    {
        id: 24,
        question: "Which element's current is $i = C \\frac{dv}{dt}$?",
        options: [
            "Resistor",
            "Capacitor",
            "Inductor",
            "Diode"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$i = C \\frac{dv}{dt}$ is the defining equation for a capacitor."
    },
    {
        id: 25,
        question: "Which element is used to oppose changes in current?",
        options: [
            "Resistor",
            "Capacitor",
            "Inductor",
            "Battery"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Inductors oppose changes in current, providing electrical inertia."
    },
    {
        id: 26,
        question: "Which element is used to oppose changes in voltage?",
        options: [
            "Resistor",
            "Capacitor",
            "Inductor",
            "Switch"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Capacitors oppose changes in voltage by storing/releasing charge."
    },
    {
        id: 27,
        question: "Capacitors and inductors are considered:",
        options: [
            "Active elements",
            "Passive elements",
            "Dissipative elements",
            "Non-linear elements"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Both are passive elements (cannot generate energy, only store/release it)."
    },
    {
        id: 28,
        question: "What happens to the current through an inductor if the voltage across it is zero?",
        options: [
            "The current must be zero",
            "The current is constant",
            "The current increases linearly",
            "The current decreases to zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$v = L \\frac{di}{dt} = 0$ → $di/dt = 0$ → current is constant (could be any value)."
    },
    {
        id: 29,
        question: "What happens to the voltage across a capacitor if the current through it is zero?",
        options: [
            "The voltage is constant",
            "The voltage must be zero",
            "The voltage increases",
            "The voltage oscillates"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "$i = C \\frac{dv}{dt} = 0$ → $dv/dt = 0$ → voltage is constant (could be any value)."
    },
    {
        id: 30,
        question: "The 'Farad' is a very large unit; most practical capacitors are measured in:",
        options: [
            "Kilo-farads (kF)",
            "Micro-farads ($\\mu$F) or pico-farads (pF)",
            "Mega-farads (MF)",
            "Tera-farads (TF)"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Typical capacitors: µF ($10^{-6}$ F) to pF ($10^{-12}$ F). 1 F is enormous physically."
    }
];

// إضافة رسالة تحميل في الكونسول
console.log("✅ lecture4_data.js loaded successfully!");
console.log(`📚 Total questions: ${window.lecture4Questions.length}`);
console.log("📝 Topic: Capacitors and Inductors");