# 💛 Modern JavaScript Learning Catalog

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![DOM](https://img.shields.io/badge/DOM-Manipulation-00599C?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
[![Node.js](https://img.shields.io/badge/Node.js-v20-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Git](https://img.shields.io/badge/Git-Control-F05033?logo=git&logoColor=white)](https://git-scm.com/)

Welcome to my personal **JavaScript (ES6+) Learning Catalog**! This repository is a highly organized, step-by-step documentation log tracing my deep-dive through pure modern JavaScript core paradigms (inspired by the *Chai aur Code* playlist by Hitesh Choudhary). It details core compiler behaviors, scopes, data structures, dynamic browser DOM engines, and asynchronous event loops.

---

## 🗺️ JavaScript Core Learning Roadmap

Below is the directory roadmap mapping the progression of fundamental and advanced JavaScript mechanics:

| Module Directory | Core JavaScript Paradigm Learned | Key Concepts & Methods |
| :--- | :--- | :--- |
| **[01_basics](file:///c:/Users/jaish/Desktop/temp-repos/js-cac/01_basics)** | Foundational environment variables and compiler rules. Stack vs Heap memory mapping. | `let`/`const`, Datatypes (Primitive vs Reference), Type conversions, Comparison operators, Heap allocation |
| **[02_basics](file:///c:/Users/jaish/Desktop/temp-repos/js-cac/02_basics)** | Advanced array structures and key-value Object declarations. | Splicing, spread operator (`...`), Object destructuring, Singleton vs Literal objects, `Object.assign()`, JSON notation |
| **[03_basics](file:///c:/Users/jaish/Desktop/temp-repos/js-cac/03_basics)** | Execution scopes, closure, functional scopes, context binding, and self-instantiation. | Scopes, dynamic functional parameters, Arrow functions (`this` context), IIFEs (Immediately Invoked Function Expressions) |
| **[04_control_flow](file:///c:/Users/jaish/Desktop/temp-repos/js-cac/04_control_flow)** | Logical routing and conditionals. | Truthy vs Falsy, Nullish Coalescing (`??`), Ternary operators, logical AND/OR short-circuiting |
| **[05_iterations](file:///c:/Users/jaish/Desktop/temp-repos/js-cac/05_iterations)** | Higher-Order array iterations and data transformations. | `for...of`, `for...in`, `forEach()`, `map()`, `filter()`, `reduce()`, pipeline chaining |
| **[06_dom](file:///c:/Users/jaish/Desktop/temp-repos/js-cac/06_dom)** | Dynamic browser manipulation, document querying, and elements tree creation. | `querySelector`, `createElement()`, `appendChild()`, Class/Attribute modifiers, innerHTML vs textContent |
| **[07_projects](file:///c:/Users/jaish/Desktop/temp-repos/js-cac/07_projects)** | Hands-on DOM sandbox applications. | Color togglers, BMI index counters, Digital live clocks, Guessing numbers |
| **[08_events](file:///c:/Users/jaish/Desktop/temp-repos/js-cac/08_events)** | Asynchronous event models and capturing systems. | `addEventListener`, Bubble vs Capture propagation, event delegation, `preventDefault()`, timing callbacks (`setTimeout`) |

---

## 🛠️ Key Engine Mechanics Mastered

- **Memory Scopes:** Detailed parsing of variables inside Stack (primitive type referencing) versus Heap (object structure dereferencing).
- **Execution Context & Call Stack:** Visualizing how the JavaScript engine runs scripts through the *Global Execution Context*, *Memory Creation Phase*, and *Execution Phase* along the Call Stack.
- **Asynchronous Event Loop:** Deep comprehension of how async tasks are queued inside the *Task Queue* and *Microtask Queue* (Promises) and executed by the *Event Loop*.
- **DOM & Event Propagation:** Understanding bubbling and capturing event dispatch workflows, optimizing UI responsiveness with event delegation.

---

## 🚀 Running Any Project Locally

To run the custom projects or test modules on your machine:

### 1. Clone the Catalog
```bash
git clone https://github.com/Shresth-11/js-cac.git
cd js-cac
```

### 2. Run in a Node environment or open in a browser
For basics or iteration modules:
```bash
node 05_iterations/reduce.js
```
For DOM and graphical projects, open the `index.html` file in any modern web browser or run with a local server plugin like *Live Server* in VS Code!

---

## 🤝 Contributing & Feedback

This repository serves as a personal log of my coding roadmap. Suggested improvements and learning queries are always welcome—feel free to fork or submit issues!

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

*Authored with 💻 and ☕ by [Shresth-11](https://github.com/Shresth-11)* 🚀
