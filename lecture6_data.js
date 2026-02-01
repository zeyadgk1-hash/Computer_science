// lecture6_data.js
window.lecture6Questions = [
    {
        id: 1,
        question: "A second-order circuit is characterized by a differential equation of which order?",
        options: [
            "First order",
            "Second order",
            "Third order",
            "Zero order"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Second-order circuits are described by second-order differential equations, containing two energy storage elements."
    },
    {
        id: 2,
        question: "Which of the following elements are present in a second-order circuit?",
        options: [
            "Two resistors and one capacitor",
            "Two energy storage elements (like two capacitors or an inductor and a capacitor)",
            "Only one inductor and one resistor",
            "Only independent voltage sources"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Second-order circuits must contain two independent energy storage elements (L and C, or two C's, or two L's)."
    },
    {
        id: 3,
        question: "The 'natural response' of a second-order circuit is the behavior of the circuit when:",
        options: [
            "All independent sources are turned off",
            "A step voltage is applied",
            "Only the inductor is present",
            "The time constant is infinite"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Natural response: behavior due only to initial energy in storage elements, with all independent sources set to zero."
    },
    {
        id: 4,
        question: "In a source-free parallel RLC circuit, the initial energy is stored in:",
        options: [
            "The resistor only",
            "The capacitor and the inductor",
            "The voltage source",
            "The ground node"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Initially: $W_C = \\frac{1}{2}CV_0^2$ in capacitor and $W_L = \\frac{1}{2}LI_0^2$ in inductor."
    },
    {
        id: 5,
        question: "The parameter $\\alpha$ is known as the:",
        options: [
            "Resonant frequency",
            "Neper frequency or damping factor",
            "Phase constant",
            "Decibel level"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\alpha$ = damping factor (Np/s), determines how quickly oscillations decay."
    },
    {
        id: 6,
        question: "The parameter $\\omega_0$ is known as the:",
        options: [
            "Damping factor",
            "Undamped natural frequency or resonant frequency",
            "Angular acceleration",
            "Exponential decay constant"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\omega_0 = 1/\\sqrt{LC}$ = resonant frequency (rad/s), frequency of oscillation if no damping."
    },
    {
        id: 7,
        question: "For a series RLC circuit, the damping factor $\\alpha$ is defined as:",
        options: [
            "$1 / (2RC)$",
            "$R / (2L)$",
            "$\\sqrt{LC}$",
            "$1 / \\sqrt{LC}$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Series RLC: $\\alpha = \\frac{R}{2L}$. Larger R or smaller L increases damping."
    },
    {
        id: 8,
        question: "For a parallel RLC circuit, the damping factor $\\alpha$ is defined as:",
        options: [
            "$R / (2L)$",
            "$1 / (2RC)$",
            "$RC$",
            "$1 / \\sqrt{LC}$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Parallel RLC: $\\alpha = \\frac{1}{2RC}$. Smaller R or C increases damping."
    },
    {
        id: 9,
        question: "A circuit is 'overdamped' when:",
        options: [
            "$\\alpha > \\omega_0$",
            "$\\alpha = \\omega_0$",
            "$\\alpha < \\omega_0$",
            "$\\alpha = 0$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Overdamped: $\\alpha > \\omega_0$, two distinct real roots, no oscillation, slowest response."
    },
    {
        id: 10,
        question: "When a circuit is 'critically damped,' the damping factor and resonant frequency satisfy:",
        options: [
            "$\\alpha > \\omega_0$",
            "$\\alpha = \\omega_0$",
            "$\\alpha < \\omega_0$",
            "$\\omega_0 = 0$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Critical damping: $\\alpha = \\omega_0$, fastest return to steady-state without oscillation."
    },
    {
        id: 11,
        question: "An 'underdamped' response occurs when:",
        options: [
            "$\\alpha > \\omega_0$",
            "$\\alpha = \\omega_0$",
            "$\\alpha < \\omega_0$",
            "$R = 0$"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Underdamped: $\\alpha < \\omega_0$, complex conjugate roots, decaying oscillations."
    },
    {
        id: 12,
        question: "The response of an underdamped circuit is characterized by:",
        options: [
            "Pure exponential decay",
            "Constant DC voltage",
            "Decaying oscillations",
            "A linear ramp function"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Underdamped: $e^{-\\alpha t}[A\\cos\\omega_d t + B\\sin\\omega_d t]$, where $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$."
    },
    {
        id: 13,
        question: "The step response of a second-order circuit is obtained by the sudden application of:",
        options: [
            "A sinusoidal source",
            "A DC source",
            "No source at all",
            "An impulse function"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Step response: circuit behavior when DC source is suddenly applied (unit step input)."
    },
    {
        id: 14,
        question: "The complete response of a second-order circuit is the sum of:",
        options: [
            "The initial and final currents",
            "The natural response and the forced response",
            "The damping factor and resonant frequency",
            "Two separate first-order responses"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Complete response = natural (transient) response + forced (steady-state) response."
    },
    {
        id: 15,
        question: "In a series RLC circuit step response, the forced (steady-state) value of the capacitor voltage is:",
        options: [
            "Zero",
            "Equal to the source voltage $V_s$",
            "Infinite",
            "$V_s / R$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "As $t \\to \\infty$, capacitor acts as open circuit, so $v_C(\\infty) = V_s$."
    },
    {
        id: 16,
        question: "In a parallel RLC circuit step response, the forced value of the inductor current is:",
        options: [
            "Zero",
            "Equal to the source current $I_s$",
            "$V/R$",
            "$I_s \\times R$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "As $t \\to \\infty$, inductor acts as short circuit, so $i_L(\\infty) = I_s$."
    },
    {
        id: 17,
        question: "To solve second-order circuits, we must determine initial values for which two variables?",
        options: [
            "v and i",
            "R and L",
            "$\\alpha$ and $\\omega_0$",
            "t and $t_0$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Need initial capacitor voltage $v_C(0)$ and initial inductor current $i_L(0)$."
    },
    {
        id: 18,
        question: "In addition to initial values, we also need to find the initial rates of change, which are:",
        options: [
            "$\\alpha$ and $\\omega_0$",
            "$dv/dt$ and $di/dt$",
            "R and C",
            "The final steady-state values"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Need $dv_C/dt|_{t=0}$ and $di_L/dt|_{t=0}$ to solve second-order ODE."
    },
    {
        id: 19,
        question: "At t = ∞ (steady-state), an inductor in a DC circuit acts as a:",
        options: [
            "Open circuit",
            "Short circuit",
            "Voltage source",
            "Resistor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "DC steady-state: $di_L/dt = 0$, so $v_L = L(di_L/dt) = 0$ → short circuit."
    },
    {
        id: 20,
        question: "At t = ∞, a capacitor in a DC circuit acts as a:",
        options: [
            "Short circuit",
            "Open circuit",
            "Current source",
            "Inductor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "DC steady-state: $dv_C/dt = 0$, so $i_C = C(dv_C/dt) = 0$ → open circuit."
    },
    {
        id: 21,
        question: "The roots of the characteristic equation ($s_1$, $s_2$) are determined by:",
        options: [
            "$s = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}$",
            "$s = RC$",
            "$s = L/R$",
            "$s = \\pm \\omega_0$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Characteristic equation: $s^2 + 2\\alpha s + \\omega_0^2 = 0$, roots: $s_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}$."
    },
    {
        id: 22,
        question: "In the overdamped case, the roots $s_1$ and $s_2$ are:",
        options: [
            "Complex conjugates",
            "Real and unequal",
            "Real and equal",
            "Purely imaginary"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Overdamped ($\\alpha > \\omega_0$): $s_{1,2}$ are real, distinct, negative."
    },
    {
        id: 23,
        question: "In the critically damped case, the roots $s_1$ and $s_2$ are:",
        options: [
            "Real and unequal",
            "Real and equal",
            "Complex conjugates",
            "Zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Critically damped ($\\alpha = \\omega_0$): $s_1 = s_2 = -\\alpha$ (repeated real roots)."
    },
    {
        id: 24,
        question: "The 'damped natural frequency' $\\omega_d$ is used in which case?",
        options: [
            "Overdamped",
            "Critically damped",
            "Underdamped",
            "Steady-state"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "$\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$ appears only in underdamped case."
    },
    {
        id: 25,
        question: "The formula for $\\omega_d$ is:",
        options: [
            "$\\sqrt{\\alpha^2 - \\omega_0^2}$",
            "$\\sqrt{\\omega_0^2 - \\alpha^2}$",
            "$\\alpha + \\omega_0$",
            "$1 / \\sqrt{LC}$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Damped frequency: $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$, frequency of oscillation in underdamped case."
    },
    {
        id: 26,
        question: "Second-order circuits can be used to model:",
        options: [
            "Simple resistors",
            "Automobile ignition systems and smoothing circuits",
            "Only DC batteries",
            "Purely mechanical systems with no electricity"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "RLC circuits model many systems: ignition coils, filters, oscillators, mechanical analogs."
    },
    {
        id: 27,
        question: "In a dual-source circuit, the principle of ________ can be used to analyze the response.",
        options: [
            "Resistance",
            "Superposition",
            "Capacitance",
            "Friction"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Superposition applies to linear circuits with multiple sources."
    },
    {
        id: 28,
        question: "To find the step response of a parallel RLC circuit, we focus on finding the:",
        options: [
            "Inductor current i(t)",
            "Capacitor voltage v(t)",
            "Resistance R",
            "Total power"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "In parallel RLC, inductor current $i_L(t)$ is usually the variable of interest."
    },
    {
        id: 29,
        question: "The characteristic equation for a series RLC circuit is:",
        options: [
            "$s^2 + \\frac{R}{L}s + \\frac{1}{LC} = 0$",
            "$s + RC = 0$",
            "$s^2 + 2\\alpha s + \\omega_0^2 = 0$",
            "Both A and C are correct"
        ],
        correctAnswer: 3,
        marks: 3,
        explanation: "Both forms are equivalent: $\\alpha = R/(2L)$, $\\omega_0 = 1/\\sqrt{LC}$."
    },
    {
        id: 30,
        question: "Which response returns to steady-state the fastest without oscillation?",
        options: [
            "Overdamped",
            "Critically damped",
            "Underdamped",
            "Undamped"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Critically damped provides fastest non-oscillatory response to steady-state."
    }
];

// إضافة رسالة تحميل في الكونسول
console.log("✅ lecture6_data.js loaded successfully!");
console.log(`📚 Total questions: ${window.lecture6Questions.length}`);
console.log("📝 Topic: Second-Order Circuits (RLC Circuits)");