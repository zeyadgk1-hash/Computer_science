// lecture7_data.js
window.lecture7Questions = [
    {
        id: 1,
        question: "A sinusoid is a signal that has the form of the:",
        options: [
            "Tangent or cotangent function",
            "Sine or cosine function",
            "Logarithmic function",
            "Square wave function"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A sinusoid is a signal that varies with time according to the sine or cosine function. It is the most fundamental periodic signal in AC circuit analysis."
    },
    {
        id: 2,
        question: "In the expression $v(t) = V_m \\sin(\\omega t + \\phi)$, $V_m$ represents the:",
        options: [
            "Phase",
            "Amplitude",
            "Angular frequency",
            "Period"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$V_m$ is the amplitude or peak value of the sinusoid. It represents the maximum magnitude of the signal."
    },
    {
        id: 3,
        question: "The 'period' ($T$) of a periodic function is the:",
        options: [
            "Number of cycles per second",
            "Time of one complete cycle",
            "Maximum value of the displacement",
            "Speed of the wave"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "The period $T$ is the duration of one complete cycle of the waveform, measured in seconds."
    },
    {
        id: 4,
        question: "The relationship between angular frequency ($\\omega$) and frequency ($f$) is:",
        options: [
            "$\\omega = 2\\pi f$",
            "$\\omega = 1/f$",
            "$\\omega = 2\\pi T$",
            "$\\omega = f/2\\pi$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Angular frequency $\\omega$ (in radians per second) is related to frequency $f$ (in Hertz) by $\\omega = 2\\pi f$, where one complete cycle corresponds to $2\\pi$ radians."
    },
    {
        id: 5,
        question: "If two sinusoids have the same frequency and reach their maximum values at the same time, they are said to be:",
        options: [
            "Out of phase",
            "In phase",
            "Lagging",
            "Leading"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Two sinusoids are in phase when they have the same frequency and their phase difference is zero, meaning they reach their peaks and zero crossings simultaneously."
    },
    {
        id: 6,
        question: "To compare the phase of two sinusoids, they must be expressed:",
        options: [
            "As both sine and cosine",
            "With the same frequency and positive amplitudes",
            "Using different angular frequencies",
            "With zero phase angles"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For valid phase comparison, both sinusoids must have the same frequency and their amplitudes must be positive. They should also be expressed in the same form (both as sine or both as cosine)."
    },
    {
        id: 7,
        question: "A sinusoid $v_1$ leads $v_2$ if it:",
        options: [
            "Reaches its peak later than $v_2$",
            "Reaches its peak earlier than $v_2$",
            "Has a smaller amplitude",
            "Has a higher frequency"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A sinusoid leads another if it attains its maximum value earlier in time. If $\\phi_1 > \\phi_2$ (for the same frequency), then $v_1$ leads $v_2$."
    },
    {
        id: 8,
        question: "A phasor is a complex number that represents the ________ of a sinusoid:",
        options: [
            "Frequency and period",
            "Amplitude and phase",
            "Resistance and inductance",
            "Power and energy"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "A phasor captures the amplitude and phase angle of a sinusoid, but not its frequency. It simplifies AC circuit analysis by converting differential equations into algebraic equations."
    },
    {
        id: 9,
        question: "Phasors are based on which mathematical identity?",
        options: [
            "Pythagorean theorem",
            "Euler's identity",
            "Kirchhoff's Law",
            "Ohm's Law"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Phasors rely on Euler's identity: $e^{j\\theta} = \\cos\\theta + j \\sin\\theta$, which allows representation of sinusoids as complex exponentials."
    },
    {
        id: 10,
        question: "The phasor representation of $v(t) = V_m \\cos(\\omega t + \\phi)$ is:",
        options: [
            "$\\mathbf{V} = V_m \\angle \\phi$",
            "$\\mathbf{V} = V_m \\sin(\\phi)$",
            "$\\mathbf{V} = \\omega \\angle \\phi$",
            "$\\mathbf{V} = V_m e^{j\\omega t}$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "The phasor form is $\\mathbf{V} = V_m \\angle \\phi$, where $V_m$ is the magnitude and $\\phi$ is the phase angle. The time-varying factor $e^{j\\omega t}$ is implicit and omitted."
    },
    {
        id: 11,
        question: "The 'Frequency Domain' representation of a signal is also known as the:",
        options: [
            "Time domain",
            "Phasor domain",
            "Real domain",
            "Linear domain"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "When signals are represented by phasors, we are working in the frequency domain or phasor domain, as opposed to the time domain where signals are functions of time."
    },
    {
        id: 12,
        question: "In a phasor diagram, the phase angle $\\phi$ is measured from the:",
        options: [
            "Positive vertical axis",
            "Positive real axis",
            "Negative imaginary axis",
            "Origin"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "In phasor diagrams, the phase angle is measured counterclockwise from the positive real axis, following standard complex plane conventions."
    },
    {
        id: 13,
        question: "For a resistor $R$, the phasor voltage and current are related by:",
        options: [
            "$\\mathbf{V} = j\\omega L \\mathbf{I}$",
            "$\\mathbf{V} = R \\mathbf{I}$",
            "$\\mathbf{V} = \\mathbf{I} / (j\\omega C)$",
            "$\\mathbf{V} = \\omega C \\mathbf{I}$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For a resistor, voltage and current are in phase: $\\mathbf{V} = R \\mathbf{I}$. This is Ohm's law in phasor form."
    },
    {
        id: 14,
        question: "In an inductor, the current ________ the voltage by 90 degrees:",
        options: [
            "Leads",
            "Lags",
            "Is in phase with",
            "Is 180 degrees out of phase with"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "In an inductor, current lags voltage by 90° (or $\\pi/2$ radians). This is because $v_L = L\\,di/dt$, so the current is the integral of the voltage."
    },
    {
        id: 15,
        question: "In a capacitor, the current ________ the voltage by 90 degrees:",
        options: [
            "Lags",
            "Leads",
            "Is in phase with",
            "Is the square of"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "In a capacitor, current leads voltage by 90° (or $\\pi/2$ radians). This is because $i_C = C\\,dv/dt$, so the current is proportional to the derivative of the voltage."
    },
    {
        id: 16,
        question: "The phasor relationship for an inductor is:",
        options: [
            "$\\mathbf{V} = R \\mathbf{I}$",
            "$\\mathbf{V} = j\\omega L \\mathbf{I}$",
            "$\\mathbf{V} = \\mathbf{I} / (j\\omega C)$",
            "$\\mathbf{I} = j\\omega L \\mathbf{V}$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For an inductor: $\\mathbf{V} = j\\omega L \\mathbf{I}$. The $j$ factor indicates a 90° phase shift, and $\\omega L$ is the inductive reactance $X_L$."
    },
    {
        id: 17,
        question: "The phasor relationship for a capacitor is:",
        options: [
            "$\\mathbf{V} = \\mathbf{I} / (j\\omega C)$",
            "$\\mathbf{V} = j\\omega L \\mathbf{I}$",
            "$\\mathbf{I} = R \\mathbf{V}$",
            "$\\mathbf{V} = C\\,dv/dt$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "For a capacitor: $\\mathbf{V} = \\mathbf{I} / (j\\omega C) = -j \\mathbf{I}/(\\omega C)$. The $-j$ factor indicates that current leads voltage by 90°, and $1/(\\omega C)$ is the capacitive reactance $X_C$."
    },
    {
        id: 18,
        question: "Impedance ($Z$) is defined as the ratio of phasor voltage to phasor current, measured in:",
        options: [
            "Farads",
            "Ohms ($\\Omega$)",
            "Henrys",
            "Siemens"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Impedance $Z = \\mathbf{V}/\\mathbf{I}$ has units of ohms ($\\Omega$), similar to resistance. It is a complex quantity that generalizes resistance to AC circuits."
    },
    {
        id: 19,
        question: "The impedance of an inductor is:",
        options: [
            "$R$",
            "$j\\omega L$",
            "$1 / (j\\omega C)$",
            "$L/C$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$Z_L = j\\omega L = jX_L$, where $X_L = \\omega L$ is the inductive reactance. The impedance is purely imaginary and positive for inductors."
    },
    {
        id: 20,
        question: "The impedance of a capacitor is:",
        options: [
            "$j\\omega C$",
            "$1 / (j\\omega C)$",
            "$\\omega L$",
            "$j\\omega R$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$Z_C = 1/(j\\omega C) = -j/(\\omega C) = -jX_C$, where $X_C = 1/(\\omega C)$ is the capacitive reactance. The impedance is purely imaginary and negative for capacitors."
    },
    {
        id: 21,
        question: "Admittance ($Y$) is the reciprocal of impedance and is measured in:",
        options: [
            "Ohms",
            "Siemens (S)",
            "Farads",
            "Volts"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Admittance $Y = 1/Z = G + jB$, measured in siemens (S), formerly mhos. It is the AC counterpart of conductance."
    },
    {
        id: 22,
        question: "The real part of impedance ($Z = R + jX$) is called:",
        options: [
            "Reactance",
            "Resistance",
            "Conductance",
            "Susceptance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "In $Z = R + jX$, $R$ is the resistance (real part) representing energy dissipation, and $X$ is the reactance (imaginary part) representing energy storage."
    },
    {
        id: 23,
        question: "The imaginary part of impedance ($X$) is called:",
        options: [
            "Resistance",
            "Reactance",
            "Admittance",
            "Capacitance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Reactance $X$ is the imaginary part of impedance. It can be positive (inductive) or negative (capacitive) and represents the opposition to current due to energy storage elements."
    },
    {
        id: 24,
        question: "Kirchhoff's laws (KCL and KVL) ________ in the phasor domain:",
        options: [
            "Do not apply",
            "Still apply",
            "Apply only to resistors",
            "Are modified by a factor of $2\\pi$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Kirchhoff's Current Law ($\\sum \\mathbf{I} = 0$) and Kirchhoff's Voltage Law ($\\sum \\mathbf{V} = 0$) hold in the phasor domain, provided all quantities are phasors at the same frequency."
    },
    {
        id: 25,
        question: "When impedances are connected in series, the total impedance $Z_{eq}$ is:",
        options: [
            "The sum of individual impedances",
            "The reciprocal of the sum",
            "The product of impedances",
            "Always zero"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "For series impedances: $Z_{eq} = Z_1 + Z_2 + ... + Z_n$. This follows directly from KVL and the definition of impedance."
    },
    {
        id: 26,
        question: "The principle of voltage division applies to series impedances using the formula:",
        options: [
            "$\\mathbf{V}_1 = \\frac{Z_1}{Z_1 + Z_2} \\mathbf{V}$",
            "$\\mathbf{V}_1 = \\frac{Z_2}{Z_1 + Z_2} \\mathbf{V}$",
            "$\\mathbf{V}_1 = \\mathbf{I} Z_{eq}$",
            "$\\mathbf{V}_1 = \\mathbf{V} / Z_1$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Voltage division for two series impedances: $\\mathbf{V}_1 = [Z_1/(Z_1 + Z_2)] \\mathbf{V}$. This is analogous to resistive voltage division but with complex impedances."
    },
    {
        id: 27,
        question: "Delta-to-Wye ($\\Delta$ to $Y$) transformations can be applied to impedances:",
        options: [
            "Only at DC",
            "In the same way as they are applied to resistors",
            "Only for inductors",
            "Only if the frequency is zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\Delta$-Y transformations work for impedances exactly as they do for resistances, using the same formulas but with complex numbers instead of real resistances."
    },
    {
        id: 28,
        question: "A phase-shifting network is used to vary the phase angle between:",
        options: [
            "Resistance and Reactance",
            "Input and output voltages",
            "Current and Power",
            "Real and Imaginary numbers"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Phase-shifting circuits (like RC or RL networks) produce an output voltage that is phase-shifted relative to the input voltage, while maintaining the same frequency."
    },
    {
        id: 29,
        question: "In an RC phase-shifting circuit, the output voltage ________ the input voltage:",
        options: [
            "Lags",
            "Leads",
            "Is identical to",
            "Is the derivative of"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "In a simple RC circuit where the output is taken across the capacitor, the output voltage lags the input voltage. If taken across the resistor, it leads."
    },
    {
        id: 30,
        question: "An AC bridge circuit is in 'balance' when the detector current is:",
        options: [
            "Maximum",
            "Zero",
            "Equal to the source current",
            "Purely imaginary"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "An AC bridge is balanced when no current flows through the detector. This occurs when the impedance ratios satisfy: $Z_1/Z_2 = Z_3/Z_4$."
    }
];

// إضافة رسالة تحميل في الكونسول
console.log("✅ lecture7_data.js loaded successfully!");
console.log(`📚 Total questions: ${window.lecture7Questions.length}`);
console.log("📝 Topic: Sinusoids and Phasors (AC Circuit Analysis)");
console.log("🎯 Covers: Sinusoidal signals, phasor representation, impedance, circuit laws in frequency domain");