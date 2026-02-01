// lecture5_data.js
window.lecture5Questions = [
    {
        id: 1,
        question: "A first-order circuit is characterized by a:",
        options: [
            "Second-order differential equation",
            "First-order differential equation",
            "Linear algebraic equation",
            "Quadratic equation"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "First-order circuits are described by first-order differential equations, containing one energy storage element (C or L) and resistors."
    },
    {
        id: 2,
        question: "How many types of first-order circuits are typically studied?",
        options: [
            "One",
            "Two (RC and RL)",
            "Three",
            "Four"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Two main types: RC circuits (resistor-capacitor) and RL circuits (resistor-inductor), each with first-order dynamics."
    },
    {
        id: 3,
        question: "A 'source-free' circuit is one where:",
        options: [
            "There are no resistors",
            "Independent sources are suddenly disconnected",
            "Dependent sources are removed",
            "The voltage is always zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Source-free means all independent sources are turned off (zeroed) after initial energy is stored in C or L."
    },
    {
        id: 4,
        question: "The energy that drives a source-free circuit comes from:",
        options: [
            "An external battery",
            "Stored energy in the capacitor or inductor",
            "The resistor's heat",
            "A current source"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Initially stored energy in C ($\\frac{1}{2}CV_0^2$) or L ($\\frac{1}{2}LI_0^2$) is gradually dissipated in the resistor."
    },
    {
        id: 5,
        question: "In a source-free RC circuit, the differential equation for voltage is expressed as:",
        options: [
            "$\\frac{dv}{dt} + \\frac{v}{RC} = 0$",
            "$v = iR$",
            "$\\frac{di}{dt} + \\frac{i}{RC} = 0$",
            "$v = C \\frac{dv}{dt}$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "From KCL: $C\\frac{dv}{dt} + \\frac{v}{R} = 0$ → $\\frac{dv}{dt} + \\frac{1}{RC}v = 0$."
    },
    {
        id: 6,
        question: "The natural response of an RC circuit refers to the behavior of the circuit:",
        options: [
            "When a DC source is connected",
            "Without any external excitation (sources)",
            "During the charging phase only",
            "When the resistor is short-circuited"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Natural response = circuit's behavior due solely to initial conditions (no external forcing function)."
    },
    {
        id: 7,
        question: "The voltage response v(t) of a source-free RC circuit is given by:",
        options: [
            "$V_0 e^{-t/\\tau}$",
            "$V_0 (1 - e^{-t/\\tau})$",
            "$I_0 e^{-t/\\tau}$",
            "$V_0 \\cos(t)$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Solution to $\\frac{dv}{dt} + \\frac{1}{RC}v = 0$ is $v(t) = V_0 e^{-t/\\tau}$, $\\tau = RC$."
    },
    {
        id: 8,
        question: "The time constant $\\tau$ for an RC circuit is defined as:",
        options: [
            "$R/C$",
            "$C/R$",
            "$RC$",
            "$1/RC$"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "$\\tau = RC$ (seconds). Determines how quickly capacitor charges/discharges."
    },
    {
        id: 9,
        question: "After one time constant (t = $\\tau$), the voltage in an RC circuit drops to what percentage of its initial value?",
        options: [
            "50%",
            "63.2%",
            "36.8%",
            "1%"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "$e^{-1} \\approx 0.368$ = 36.8%. After $\\tau$, voltage decays to about 37% of initial value."
    },
    {
        id: 10,
        question: "A circuit is considered to have reached steady-state (discharged) after approximately how many time constants?",
        options: [
            "One",
            "Two",
            "Five",
            "Ten"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "After 5$\\tau$, $e^{-5} \\approx 0.0067$ (<1%), effectively at steady-state."
    },
    {
        id: 11,
        question: "In a source-free RL circuit, the current i(t) decays:",
        options: [
            "Linearly",
            "Logarithmically",
            "Exponentially",
            "Sinusoidally"
        ],
        correctAnswer: 2,
        marks: 3,
        explanation: "RL circuit: $i(t) = I_0 e^{-t/\\tau}$, $\\tau = L/R$, exponential decay like RC but for current."
    },
    {
        id: 12,
        question: "The time constant $\\tau$ for an RL circuit is:",
        options: [
            "$RL$",
            "$L/R$",
            "$R/L$",
            "$1/RL$"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\tau = L/R$ (seconds). Larger L or smaller R gives slower response."
    },
    {
        id: 13,
        question: "The differential equation for a source-free RL circuit is:",
        options: [
            "$\\frac{di}{dt} + \\frac{R}{L}i = 0$",
            "$\\frac{dv}{dt} + RCv = 0$",
            "$v = L \\frac{di}{dt}$",
            "$i = I_0$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "From KVL: $L\\frac{di}{dt} + Ri = 0$ → $\\frac{di}{dt} + \\frac{R}{L}i = 0$."
    },
    {
        id: 14,
        question: "If the resistance R in an RL circuit increases, the time constant $\\tau$ will:",
        options: [
            "Increase",
            "Decrease",
            "Stay the same",
            "Double"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\tau = L/R$, so increasing R decreases $\\tau$ → faster current decay."
    },
    {
        id: 15,
        question: "Singularity functions are specifically useful in circuit analysis for modeling:",
        options: [
            "Constant DC signals",
            "Switching operations and discontinuous signals",
            "Steady-state AC signals",
            "Power dissipation in resistors"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Singularity functions (step, ramp, impulse) model switches, sudden changes, pulses."
    },
    {
        id: 16,
        question: "The unit step function u(t) is defined as:",
        options: [
            "0 for t < 0, 1 for t > 0",
            "1 for t < 0, 0 for t > 0",
            "t for t > 0",
            "A spike at t = 0"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "$u(t) = \\begin{cases} 0, & t < 0 \\\\ 1, & t > 0 \\end{cases}$ models sudden application of source."
    },
    {
        id: 17,
        question: "The derivative of the unit step function u(t) is the:",
        options: [
            "Unit ramp function r(t)",
            "Unit impulse function $\\delta(t)$",
            "Constant function",
            "Exponential function"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\frac{d}{dt}u(t) = \\delta(t)$. Impulse is derivative of step, models instantaneous events."
    },
    {
        id: 18,
        question: "The unit ramp function r(t) is defined as:",
        options: [
            "0 for t < 0, t for t ≥ 0",
            "0 for t < 0, 1 for t ≥ 0",
            "$t^2$ for t ≥ 0",
            "$\\int u(t) dt$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "$r(t) = \\begin{cases} 0, & t < 0 \\\\ t, & t \\ge 0 \\end{cases} = \\int_{-\\infty}^t u(\\tau)d\\tau$."
    },
    {
        id: 19,
        question: "The 'step response' of a circuit refers to its behavior when:",
        options: [
            "The sources are removed",
            "An excitation is a step function (sudden application of a source)",
            "The circuit is in steady-state",
            "The time constant is zero"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Step response: output when input changes abruptly from 0 to constant value (u(t) input)."
    },
    {
        id: 20,
        question: "The total response of a circuit consists of two parts:",
        options: [
            "Natural response and forced response",
            "Resistance and Capacitance",
            "Initial response and final response",
            "Voltage and Current"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Total = natural (transient, depends on initial conditions) + forced (steady-state, depends on source)."
    },
    {
        id: 21,
        question: "The forced response (also called steady-state response) is:",
        options: [
            "The response that decays to zero",
            "The response after a long time when the switch has been closed",
            "The response at t = 0",
            "The response due to stored energy only"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Forced response = particular solution, persists as t → ∞, matches source type."
    },
    {
        id: 22,
        question: "For an RC circuit step response, the capacitor voltage v(t) for t > 0 is:",
        options: [
            "$V_s + (V_0 - V_s) e^{-t/\\tau}$",
            "$V_s e^{-t/\\tau}$",
            "$V_s (1 - e^{-t/\\tau})$",
            "$V_0 e^{-t/\\tau}$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Complete response: $v(t) = v(\\infty) + [v(0) - v(\\infty)]e^{-t/\\tau}$, where $v(\\infty) = V_s$."
    },
    {
        id: 23,
        question: "In an RL circuit step response, as t → ∞, the inductor acts as a:",
        options: [
            "Open circuit",
            "Short circuit",
            "Voltage source",
            "Variable resistor"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "At DC steady-state, $di/dt = 0$, so $v_L = L(di/dt) = 0$ → inductor shorts."
    },
    {
        id: 24,
        question: "The general formula for any variable x(t) in a first-order circuit is:",
        options: [
            "$x(t) = x(\\infty) + [x(t_0) - x(\\infty)] e^{-(t-t_0)/\\tau}$",
            "$x(t) = x(0) e^{-t/\\tau}$",
            "$x(t) = x(\\infty) (1 - e^{-t/\\tau})$",
            "$x(t) = x(0) + x(\\infty)$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "Universal first-order formula: $x(t) = x_f + (x_i - x_f)e^{-(t-t_0)/\\tau}$, valid for any variable."
    },
    {
        id: 25,
        question: "A delay circuit can be used to control:",
        options: [
            "The brightness of a LED",
            "The timing of a flash unit in a camera",
            "The resistance of a wire",
            "The frequency of an AC source"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "RC time constant sets delay: $t_d = -RC\\ln(1 - V_{th}/V_s)$, used in timers, camera flashes."
    },
    {
        id: 26,
        question: "In an RC delay circuit, the time it takes for the capacitor to reach a specific voltage $V_c$ is:",
        options: [
            "$t = -RC \\ln(1 - V_c/V_s)$",
            "$t = RC$",
            "$t = V_c/V_s$",
            "$t = \\ln(V_s/V_c)$"
        ],
        correctAnswer: 0,
        marks: 3,
        explanation: "From $V_c = V_s(1 - e^{-t/RC})$, solve: $t = -RC \\ln(1 - V_c/V_s)$."
    },
    {
        id: 27,
        question: "What happens to the inductor current i(t) immediately after a switch changes position (t=0⁺)?",
        options: [
            "It jumps to a new value",
            "It remains the same as i(0⁻)",
            "It drops to zero instantly",
            "It becomes infinite"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Inductor current continuity: $i_L(0^+) = i_L(0^-)$. Cannot change instantaneously."
    },
    {
        id: 28,
        question: "What happens to the capacitor voltage v(t) immediately after a switch changes position?",
        options: [
            "It jumps to the source voltage",
            "It remains the same as v(0⁻)",
            "It drops to zero",
            "It reverses polarity"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "Capacitor voltage continuity: $v_C(0^+) = v_C(0^-)$. Cannot change instantaneously."
    },
    {
        id: 29,
        question: "The unit impulse function $\\delta(t)$ is zero everywhere except at:",
        options: [
            "t = 1",
            "t = 0",
            "t = ∞",
            "t = τ"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "$\\delta(t) = 0$ for $t \\neq 0$, infinite at t=0, with $\\int_{-\\infty}^{\\infty} \\delta(t) dt = 1$."
    },
    {
        id: 30,
        question: "The time constant τ is a measure of:",
        options: [
            "How much energy is stored",
            "How fast the circuit responds to changes",
            "The total resistance of the circuit",
            "The maximum voltage possible"
        ],
        correctAnswer: 1,
        marks: 3,
        explanation: "τ indicates response speed: small τ → fast response, large τ → slow response to changes."
    }
];

// إضافة رسالة تحميل في الكونسول
console.log("✅ lecture5_data.js loaded successfully!");
console.log(`📚 Total questions: ${window.lecture5Questions.length}`);
console.log("📝 Topic: First-Order Circuits (RC and RL Circuits)");