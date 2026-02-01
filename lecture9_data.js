// lecture9_data.js
window.lecture9Questions = [
    {
        id: 1,
        question: "Instantaneous power $p(t)$ is the product of the instantaneous voltage and current, measured in:",
        options: [
            "Ohms",
            "Watts (W)",
            "Volts",
            "Amperes"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Instantaneous power $p(t) = v(t) \\cdot i(t)$, measured in watts (W). It represents the power at any instant in time and varies with time for AC circuits."
    },
    {
        id: 2,
        question: "The average power $P$ is the average of the instantaneous power over:",
        options: [
            "Half a cycle",
            "One full period $T$",
            "One microsecond",
            "Infinity"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Average power $P = \\frac{1}{T} \\int_0^T p(t)\\,dt$, where $T$ is the period. It represents the constant power that would deliver the same energy as the varying instantaneous power over one period."
    },
    {
        id: 3,
        question: "For a purely resistive circuit, the phase difference between voltage and current is:",
        options: [
            "90 degrees",
            "Zero (they are in phase)",
            "180 degrees",
            "45 degrees"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "In a resistor, $v_R(t) = R\\,i_R(t)$, so voltage and current are in phase ($\\theta_v - \\theta_i = 0$). All power delivered to a resistor is dissipated as heat (real power)."
    },
    {
        id: 4,
        question: "In a purely reactive circuit (inductor or capacitor), the average power $P$ is:",
        options: [
            "Maximum",
            "Zero",
            "$V_m I_m$",
            "Negative"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For purely reactive elements, $\\theta_v - \\theta_i = \\pm 90^\\circ$, so $\\cos(\\pm 90^\\circ) = 0$, making $P = 0$. Reactive elements store and release energy but don't dissipate it on average."
    },
    {
        id: 5,
        question: "To transfer maximum average power to a load impedance $Z_L$, the load must be:",
        options: [
            "Equal to the Thevenin impedance ($Z_L = Z_{Th}$)",
            "The complex conjugate of the Thevenin impedance ($Z_L = Z_{Th}^*$)",
            "Purely resistive",
            "Zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Maximum power transfer theorem: $Z_L = Z_{Th}^*$ (complex conjugate). If $Z_{Th} = R_{Th} + jX_{Th}$, then $Z_L = R_{Th} - jX_{Th}$. This maximizes average power delivery."
    },
    {
        id: 6,
        question: "If the load is purely resistive ($Z_L = R_L$), maximum power transfer occurs when $R_L$ equals:",
        options: [
            "The Thevenin resistance $R_{Th}$",
            "The magnitude of the Thevenin impedance $|Z_{Th}|$",
            "Zero",
            "Infinity"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For a resistive load, $R_L = |Z_{Th}|$ gives maximum power transfer. When $Z_{Th}$ has reactance, matching magnitudes ($R_L = \\sqrt{R_{Th}^2 + X_{Th}^2}$) maximizes power, not matching just the resistance."
    },
    {
        id: 7,
        question: "The RMS (root-mean-square) value of a periodic current is also known as the:",
        options: [
            "Peak value",
            "Effective value",
            "Average value",
            "Imaginary value"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "RMS value = effective value. For AC, $I_{rms} = \\sqrt{\\frac{1}{T}\\int_0^T i^2(t) dt}$. An AC current with RMS value $I_{rms}$ delivers the same average power to a resistor as a DC current of value $I_{rms}$."
    },
    {
        id: 8,
        question: "For a sinusoidal signal $I_m \\cos(\\omega t)$, the RMS value $I_{rms}$ is:",
        options: [
            "$I_m / 2$",
            "$I_m / \\sqrt{2}$",
            "$I_m \\times \\sqrt{2}$",
            "$I_m$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For sinusoids: $I_{rms} = I_m/\\sqrt{2}$, $V_{rms} = V_m/\\sqrt{2}$. RMS value = peak value divided by $\\sqrt{2} \\approx 0.707$. This applies to sine, cosine, or any sinusoidal waveform."
    },
    {
        id: 9,
        question: "Average power can be expressed in terms of RMS values as:",
        options: [
            "$P = V_{rms} I_{rms} \\cos(\\theta_v - \\theta_i)$",
            "$P = V_{rms} I_{rms}$",
            "$P = I_{rms}^2 / R$",
            "$P = V_{rms}^2 R$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Average power formula: $P = V_{rms} I_{rms} \\cos(\\theta)$, where $\\theta = \\theta_v - \\theta_i$ is the power factor angle. $\\cos(\\theta)$ is the power factor (pf)."
    },
    {
        id: 10,
        question: "Apparent power $S$ is the product of RMS voltage and RMS current, measured in:",
        options: [
            "Watts",
            "Volt-Amperes (VA)",
            "VAR",
            "Ohms"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Apparent power $S = V_{rms} I_{rms}$, measured in volt-amperes (VA). It represents the magnitude of complex power and is the product of what the voltage source 'sees' (V) and what it 'supplies' (I)."
    },
    {
        id: 11,
        question: "The power factor (pf) is defined as the ratio of:",
        options: [
            "Apparent power to average power",
            "Average power to apparent power",
            "Reactive power to average power",
            "Voltage to current"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Power factor = $P/S = \\cos(\\theta)$. It's the ratio of real (average) power $P$ to apparent power $S$. $0 \\leq \\text{pf} \\leq 1$, with pf = 1 being ideal."
    },
    {
        id: 12,
        question: "The power factor is equal to the cosine of the:",
        options: [
            "Angular frequency",
            "Phase difference between voltage and current",
            "Impedance angle",
            "Both B and C are correct"
        ],
        correctAnswer: 3,
        marks: 3,
        explanation: "pf = $\\cos(\\theta_v - \\theta_i) = \\cos(\\theta_Z)$, where $\\theta_Z$ is the impedance angle. For an impedance $Z = |Z| \\angle \\theta_Z$, $\\theta_Z$ equals the phase difference between voltage and current."
    },
    {
        id: 13,
        question: "A 'leading' power factor occurs when the current:",
        options: [
            "Lags the voltage (inductive load)",
            "Leads the voltage (capacitive load)",
            "Is in phase with the voltage",
            "Is zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Leading pf: current leads voltage (capacitive load, $\\theta_i > \\theta_v$, $\\theta_v - \\theta_i < 0$). Lagging pf: current lags voltage (inductive load, $\\theta_i < \\theta_v$, $\\theta_v - \\theta_i > 0$)."
    },
    {
        id: 14,
        question: "Complex power $\\mathbf{S}$ is defined as the product of the phasor voltage and the:",
        options: [
            "Phasor current",
            "Complex conjugate of the phasor current",
            "RMS current",
            "Impedance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\mathbf{S} = \\frac{1}{2} \\mathbf{V} \\mathbf{I}^*$ (using peak values) or $\\mathbf{S} = \\mathbf{V}_{rms} \\mathbf{I}_{rms}^*$ (using RMS values). The conjugate ensures correct phase relationships in the power calculation."
    },
    {
        id: 15,
        question: "The real part of complex power is the:",
        options: [
            "Reactive power $Q$",
            "Average (Real) power $P$",
            "Apparent power",
            "Power factor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\mathbf{S} = P + jQ$, where $P = \\text{Re}\\{\\mathbf{S}\\}$ is real/average power (watts), and $Q = \\text{Im}\\{\\mathbf{S}\\}$ is reactive power (VAR). $P$ represents actual power consumption."
    },
    {
        id: 16,
        question: "The imaginary part of complex power is the:",
        options: [
            "Real power $P$",
            "Reactive power $Q$",
            "Apparent power",
            "Admittance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$Q = \\text{Im}\\{\\mathbf{S}\\}$, measured in volt-amperes reactive (VAR). $Q$ represents energy that oscillates between source and load (stored in magnetic/electric fields) but isn't consumed."
    },
    {
        id: 17,
        question: "Reactive power $Q$ is measured in:",
        options: [
            "Watts",
            "Volt-Ampere Reactive (VAR)",
            "VA",
            "Joules"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Reactive power unit: VAR (volt-ampere reactive). $Q > 0$ for inductive loads (absorbs reactive power), $Q < 0$ for capacitive loads (supplies reactive power)."
    },
    {
        id: 18,
        question: "For an inductive load ($X > 0$), the reactive power $Q$ is:",
        options: [
            "Negative",
            "Positive",
            "Zero",
            "Infinite"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Inductive load: impedance $Z = R + jX_L$, $X_L > 0$, current lags voltage, $\\theta_v - \\theta_i > 0$, so $Q = V_{rms}I_{rms}\\sin\\theta > 0$. Inductors absorb reactive power."
    },
    {
        id: 19,
        question: "The Principle of Conservation of AC Power states that the total complex power supplied to a circuit equals:",
        options: [
            "Zero",
            "The sum of the complex powers delivered to each element",
            "The real power only",
            "The source voltage times total resistance"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Total complex power supplied by sources = sum of complex powers absorbed by all elements. Applies to both real power ($P$) and reactive power ($Q$) separately."
    },
    {
        id: 20,
        question: "Power factor correction is the process of increasing the power factor without altering the:",
        options: [
            "Apparent power",
            "Voltage or real power of the load",
            "Reactive power",
            "Current"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Goal: increase pf (make it closer to 1) while keeping load voltage and real power $P$ unchanged. Usually done by adding parallel capacitors to compensate for inductive reactive power."
    },
    {
        id: 21,
        question: "Most industrial loads are inductive; therefore, power factor correction usually involves adding a:",
        options: [
            "Resistor in series",
            "Capacitor in parallel",
            "Inductor in parallel",
            "Transformer"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Industrial loads (motors, transformers) are inductive (lagging pf). Parallel capacitors supply reactive power ($Q_C < 0$) to cancel inductive reactive power ($Q_L > 0$), reducing net reactive power and increasing pf."
    },
    {
        id: 22,
        question: "By increasing the power factor, the ________ required from the source is decreased:",
        options: [
            "Real power",
            "Current",
            "Resistance",
            "Frequency"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "For fixed $P$ and $V$, $I = P/(V \\cdot \\text{pf})$. Increasing pf reduces current $I$ needed to deliver same $P$. Lower current means lower $I^2R$ losses in transmission lines."
    },
    {
        id: 23,
        question: "The device used to measure the average power delivered to a load is the:",
        options: [
            "Ammeter",
            "Wattmeter",
            "Voltmeter",
            "Ohmmeter"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Wattmeter measures average (real) power $P$. It has current coil (in series with load) and voltage coil (in parallel with load). Digital wattmeters compute $P = V_{rms}I_{rms}\\cos\\theta$."
    },
    {
        id: 24,
        question: "A wattmeter consists of two coils:",
        options: [
            "Two current coils",
            "A current coil and a potential (voltage) coil",
            "Two voltage coils",
            "A resistor and a capacitor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Traditional wattmeter: current coil (low impedance, series with load) senses $I$; potential coil (high impedance, parallel with load) senses $V$. Needle deflection ∝ $VI\\cos\\theta = P$."
    },
    {
        id: 25,
        question: "Electricity bills for residential consumers are typically based on:",
        options: [
            "Reactive power",
            "Real energy consumed (kWh)",
            "Peak voltage",
            "Apparent power"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Residential: billed for real energy (kWh = kilowatt-hours). Industrial: often penalized for low power factor (additional charges for reactive power or apparent power)."
    },
    {
        id: 26,
        question: "In a complex power triangle, the hypotenuse represents:",
        options: [
            "Real power $P$",
            "Apparent power $S$",
            "Reactive power $Q$",
            "Power factor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Power triangle: $S = \\sqrt{P^2 + Q^2}$. $S$ is hypotenuse, $P$ is adjacent side, $Q$ is opposite side. $\\theta = \\arctan(Q/P)$, $\\text{pf} = \\cos\\theta = P/S$."
    },
    {
        id: 27,
        question: "If the power factor is 1 (unity), the reactive power $Q$ is:",
        options: [
            "Maximum",
            "Zero",
            "Equal to apparent power",
            "Negative"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "pf = 1 means $\\theta = 0$, so $\\cos\\theta = 1$, $\\sin\\theta = 0$, thus $Q = V_{rms}I_{rms}\\sin\\theta = 0$. All power is real power; no reactive power exchange."
    },
    {
        id: 28,
        question: "An 'inductive' load is said to have a ________ power factor:",
        options: [
            "Leading",
            "Lagging",
            "Unity",
            "Zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Inductive load: current lags voltage → lagging power factor ($0 < \\theta \\leq 90^\\circ$). Example: motors, transformers, solenoids."
    },
    {
        id: 29,
        question: "Complex power can be expressed as $\\mathbf{S} = I_{rms}^2 \\mathbf{Z}$. If $\\mathbf{Z} = R + jX$, the reactive power $Q$ is:",
        options: [
            "$I_{rms}^2 R$",
            "$I_{rms}^2 X$",
            "$V_{rms} I_{rms}$",
            "$P/S$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\mathbf{S} = I_{rms}^2 \\mathbf{Z} = I_{rms}^2 R + j I_{rms}^2 X$. So $P = I_{rms}^2 R$ and $Q = I_{rms}^2 X$. Reactive power depends on reactance $X$ (positive for inductive, negative for capacitive)."
    },
    {
        id: 30,
        question: "Why is power factor correction important for utilities?",
        options: [
            "It increases the real power delivered",
            "It reduces line losses by reducing the current needed to deliver the same real power",
            "It increases the voltage at the consumer end",
            "It allows the use of smaller resistors"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Low pf increases current for same $P$, causing: 1) Higher $I^2R$ losses in transmission lines, 2) Larger voltage drops ($\\Delta V = IZ_{line}$), 3) Need for larger conductors/equipment. Utilities penalize low pf to encourage correction."
    }
];

// إضافة رسالة تحميل في الكونسول
console.log("✅ lecture9_data.js loaded successfully!");
console.log(`📚 Total questions: ${window.lecture9Questions.length}`);
console.log("📝 Topic: AC Power Analysis");
console.log("🎯 Covers: Instantaneous/average power, RMS values, power factor, complex power, power factor correction, power measurement");