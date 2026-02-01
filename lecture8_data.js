// lecture8_data.js
window.lecture8Questions = [
    {
        id: 1,
        question: "Sinusoidal steady-state analysis is performed by transforming the circuit into the:",
        options: [
            "Time domain",
            "Phasor (frequency) domain",
            "Linear domain",
            "Real number domain"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Sinusoidal steady-state analysis is done in the phasor domain, where sinusoidal sources are represented by phasors, and circuit elements by impedances, converting differential equations into algebraic equations."
    },
    {
        id: 2,
        question: "Which of the following analysis techniques can be applied to AC circuits in the phasor domain?",
        options: [
            "Nodal analysis",
            "Mesh analysis",
            "Superposition",
            "All of the above"
        ],
        correctAnswer: 3,
        marks: 3,
        explanation: "All standard circuit analysis techniques (nodal, mesh, superposition, Thevenin, Norton) can be applied to AC circuits in the phasor domain, using complex numbers for voltages, currents, and impedances."
    },
    {
        id: 3,
        question: "In nodal analysis of AC circuits, we solve for unknown:",
        options: [
            "Mesh currents",
            "Node voltages",
            "Resistances",
            "Time constants"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Nodal analysis solves for node voltages. KCL is applied at each non-reference node, resulting in simultaneous complex equations that are solved for the phasor node voltages."
    },
    {
        id: 4,
        question: "When performing mesh analysis on an AC circuit, we apply:",
        options: [
            "Kirchhoff's Current Law (KCL)",
            "Kirchhoff's Voltage Law (KVL)",
            "Faraday's Law",
            "The Power Law"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Mesh analysis uses KVL around each mesh (loop). The sum of voltage drops (impedance times current) equals the sum of source voltages in that mesh, in phasor form."
    },
    {
        id: 5,
        question: "The Superposition Principle applies to AC circuits only if the circuit is:",
        options: [
            "Non-linear",
            "Linear",
            "Purely resistive",
            "Operating at DC only"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Superposition applies only to linear circuits. AC circuits with linear elements (R, L, C) and linear dependent sources are linear and superposition can be used."
    },
    {
        id: 6,
        question: "If an AC circuit has sources with different frequencies, you must use:",
        options: [
            "Nodal analysis only",
            "Mesh analysis only",
            "Superposition",
            "Source transformation"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "When sources have different frequencies, superposition must be used. Analyze the circuit for each frequency separately, then combine the time-domain responses (not phasors, since phasors are frequency-specific)."
    },
    {
        id: 7,
        question: "When using superposition with different frequencies, the final total response is found in the:",
        options: [
            "Phasor domain",
            "Time domain",
            "Complex plane",
            "Frequency domain"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Phasors at different frequencies cannot be added directly. Each frequency's response is found in the phasor domain, converted to time domain, then all time-domain responses are added."
    },
    {
        id: 8,
        question: "Source transformation in the phasor domain involves replacing a voltage source $V_s$ in series with $Z$ by a current source $I_s$ in parallel with $Z$, where:",
        options: [
            "$I_s = V_s / Z$",
            "$I_s = V_s \\times Z$",
            "$I_s = Z / V_s$",
            "$I_s = V_s + Z$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Source transformation: A voltage source $V_s$ in series with impedance $Z$ is equivalent to a current source $I_s = V_s/Z$ in parallel with the same impedance $Z$. Both must be in phasor form."
    },
    {
        id: 9,
        question: "Thevenin's Theorem states that an AC circuit can be reduced to a single voltage source $V_{Th}$ and a:",
        options: [
            "Parallel impedance $Z_{Th}$",
            "Series impedance $Z_{Th}$",
            "Series resistor only",
            "Parallel capacitor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Thevenin equivalent for AC: $V_{Th}$ = open-circuit voltage (phasor) at terminals, $Z_{Th}$ = impedance seen from terminals with all independent sources turned off (voltage sources shorted, current sources opened)."
    },
    {
        id: 10,
        question: "Norton's Theorem reduces an AC circuit to a single current source $I_N$ in parallel with:",
        options: [
            "$Z_{Th}$",
            "$R$",
            "$L$",
            "$V_{Th}$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Norton equivalent: $I_N$ = short-circuit current (phasor) at terminals, $Z_{Th}$ = same Thevenin impedance. $V_{Th} = I_N \\times Z_{Th}$, so the two equivalents are related."
    },
    {
        id: 11,
        question: "For an ideal Op-Amp in the phasor domain, the current entering the input terminals is:",
        options: [
            "Infinite",
            "Zero",
            "$V/Z$",
            "Equal to the output current"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Ideal op-amp assumption: $i_1 = i_2 = 0$ (infinite input impedance). No current flows into either input terminal, valid for both DC and AC analysis."
    },
    {
        id: 12,
        question: "In an ideal Op-Amp, the differential input voltage $(V_1 - V_2)$ is assumed to be:",
        options: [
            "Maximum",
            "Zero",
            "1 Volt",
            "Equal to the supply voltage"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Ideal op-amp assumption: $V_1 - V_2 = 0$ (virtual short circuit). This simplifies analysis significantly in both time and frequency domains."
    },
    {
        id: 13,
        question: "AC Op-Amp circuits are used to build:",
        options: [
            "Active filters",
            "Phase shifters",
            "Both A and B",
            "Only DC amplifiers"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "Op-amps in AC applications include active filters (low-pass, high-pass, band-pass), phase shifters, oscillators, integrators, differentiators, and AC amplifiers."
    },
    {
        id: 14,
        question: "In the phasor domain, the impedance of a capacitor $(Z_C)$ is:",
        options: [
            "$j\\omega C$",
            "$1 / (j\\omega C)$",
            "$\\omega C$",
            "$-j\\omega C$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Capacitor impedance: $Z_C = 1/(j\\omega C) = -j/(\\omega C)$. Magnitude decreases with increasing frequency, phase = -90° (current leads voltage)."
    },
    {
        id: 15,
        question: "The impedance of an inductor $(Z_L)$ in the phasor domain is:",
        options: [
            "$L / j\\omega$",
            "$j\\omega L$",
            "$1 / j\\omega L$",
            "$\\omega L$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Inductor impedance: $Z_L = j\\omega L$. Magnitude increases with frequency, phase = +90° (voltage leads current)."
    },
    {
        id: 16,
        question: "As the frequency $\\omega$ increases, the magnitude of the capacitor's impedance:",
        options: [
            "Increases",
            "Decreases",
            "Stays the same",
            "Becomes zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$|Z_C| = 1/(\\omega C)$, so as $\\omega$ increases, $|Z_C|$ decreases. At high frequency, capacitor acts like a short circuit; at DC ($\\omega=0$), it acts like an open circuit."
    },
    {
        id: 17,
        question: "As frequency $\\omega$ increases, the magnitude of the inductor's impedance:",
        options: [
            "Increases",
            "Decreases",
            "Stays the same",
            "Becomes purely real"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "$|Z_L| = \\omega L$, so as $\\omega$ increases, $|Z_L|$ increases. At high frequency, inductor acts like an open circuit; at DC ($\\omega=0$), it acts like a short circuit."
    },
    {
        id: 18,
        question: "A capacitance multiplier is an op-amp circuit used to:",
        options: [
            "Increase the physical size of a capacitor",
            "Make a small capacitor appear much larger in the circuit",
            "Multiply the voltage across a capacitor",
            "Convert a capacitor into an inductor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A capacitance multiplier uses an op-amp and resistors to make a small physical capacitor $C$ appear as a much larger equivalent capacitance $C_{eq}$ at the input terminals, useful in integrated circuits where large capacitors are impractical."
    },
    {
        id: 19,
        question: "In a capacitance multiplier circuit, the effective capacitance $C_{eq}$ is typically proportional to:",
        options: [
            "$1/R$",
            "The ratio of two resistors $(R_2/R_1)$",
            "The frequency squared",
            "The input voltage"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For a basic capacitance multiplier: $C_{eq} \\approx (1 + R_2/R_1)C$. By choosing resistor ratio $R_2/R_1$, we can multiply $C$ by large factors (10× to 1000×)."
    },
    {
        id: 20,
        question: "Which of the following is an advantage of a capacitance multiplier?",
        options: [
            "It eliminates the need for any capacitors",
            "It allows large equivalent capacitance in a small integrated circuit space",
            "It works only at DC",
            "It reduces the power consumption of the op-amp"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Main advantage: Achieves large effective capacitance using small physical capacitors, saving space in ICs. For example, a 1 µF capacitor can be made to appear as 100 µF using resistor ratio of 99:1."
    },
    {
        id: 21,
        question: "An oscillator is a circuit that produces a ________ output without an external input signal:",
        options: [
            "Constant DC",
            "Periodic (sinusoidal)",
            "Random noise",
            "Zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Oscillator generates a periodic waveform (usually sinusoidal) from DC power supply, without AC input signal. It converts DC power into AC power at a specific frequency."
    },
    {
        id: 22,
        question: "Oscillators require a ________ feedback loop to sustain oscillations:",
        options: [
            "Negative",
            "Positive",
            "Zero",
            "High-resistance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Positive (regenerative) feedback is needed: Output signal is fed back to input in phase, reinforcing oscillations. Negative feedback would dampen oscillations."
    },
    {
        id: 23,
        question: "The 'Barkhausen Criterion' for oscillation requires the loop gain $A\\beta$ to be:",
        options: [
            "Zero",
            "1 with a phase shift of $0^\\circ$ (or $360^\\circ$)",
            "Infinite",
            "Negative"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Barkhausen criteria: 1) Magnitude: $|A\\beta| = 1$; 2) Phase: $\\angle A\\beta = 0^\\circ$ (or integer multiples of $360^\\circ$). At oscillation frequency, signal returns in phase with same amplitude."
    },
    {
        id: 24,
        question: "A common type of oscillator mentioned in the lecture that uses an RC network is the:",
        options: [
            "Tesla coil",
            "Wien bridge oscillator",
            "Hartley oscillator",
            "Colpitts oscillator"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Wien bridge oscillator uses RC network for frequency selection. Common for audio frequencies (1 Hz to 1 MHz). LC oscillators (Hartley, Colpitts) are for higher RF frequencies."
    },
    {
        id: 25,
        question: "In a Wien bridge oscillator, the frequency of oscillation $f$ is given by:",
        options: [
            "$1 / (RC)$",
            "$1 / (2\\pi RC)$",
            "$2\\pi \\sqrt{LC}$",
            "$R/L$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Wien bridge oscillator frequency: $f = 1/(2\\pi RC)$. By choosing R and C values, specific frequencies can be obtained. Commonly used in audio signal generators."
    },
    {
        id: 26,
        question: "If a phasor voltage $\\mathbf{V} = 10 \\angle 30^\\circ$ and $Z = 2 \\angle 0^\\circ$, the phasor current $\\mathbf{I}$ is:",
        options: [
            "$20 \\angle 30^\\circ$",
            "$5 \\angle 30^\\circ$",
            "$5 \\angle -30^\\circ$",
            "$12 \\angle 30^\\circ$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Ohm's law in phasor form: $\\mathbf{I} = \\mathbf{V}/Z = (10\\angle30^\\circ)/(2\\angle0^\\circ) = 5\\angle30^\\circ$. Divide magnitudes, subtract angles: $10/2=5$, $30^\\circ-0^\\circ=30^\\circ$."
    },
    {
        id: 27,
        question: "To convert a sinusoid $v(t) = 5 \\cos(10t)$ into a phasor, we use:",
        options: [
            "$5 \\angle 10^\\circ$",
            "$5 \\angle 0^\\circ$",
            "$10 \\angle 5^\\circ$",
            "$5 \\angle 90^\\circ$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For $v(t) = V_m\\cos(\\omega t + \\phi)$, phasor is $V_m\\angle\\phi$. Here $V_m=5$, $\\omega=10$ rad/s, $\\phi=0$, so phasor = $5\\angle0^\\circ$. Frequency $\\omega$ is not part of phasor representation."
    },
    {
        id: 28,
        question: "In AC nodal analysis, the reference node is usually assumed to have a voltage of:",
        options: [
            "$1 \\angle 0^\\circ$",
            "Zero",
            "The source voltage",
            "Infinite"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "As in DC analysis, one node is chosen as reference (ground) with voltage = 0. All other node voltages are measured relative to this reference, in phasor form."
    },
    {
        id: 29,
        question: "When multiple meshes share a current source in an AC circuit, we create a:",
        options: [
            "Supernode",
            "Super-mesh",
            "Short circuit",
            "Bridge circuit"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "When a current source (independent or dependent) is between two meshes, we create a super-mesh by excluding the current source and any elements in series with it, then write KVL around the combined loop."
    },
    {
        id: 30,
        question: "Nodal and Mesh analysis result in a set of ________ equations when applied to AC circuits:",
        options: [
            "Differential",
            "Simultaneous complex",
            "Simple linear",
            "Quadratic"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "In phasor domain, nodal and mesh analysis yield simultaneous complex algebraic equations. Coefficients are complex impedances/admittances, unknowns are complex node voltages or mesh currents."
    }
];

// إضافة رسالة تحميل في الكونسول
console.log("✅ lecture8_data.js loaded successfully!");
console.log(`📚 Total questions: ${window.lecture8Questions.length}`);
console.log("📝 Topic: Sinusoidal Steady-State Analysis");
console.log("🎯 Covers: Phasor domain analysis techniques, circuit theorems, op-amps, capacitance multipliers, oscillators");