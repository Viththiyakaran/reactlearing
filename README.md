# ⚛️ React Learning Repository

This repository is created to **learn React step by step** by practicing the **most commonly used syntax and concepts** in real-world React applications.

The focus is on **hands-on learning**, clear examples, and small mini projects.

---

## 🎨 Styling with Tailwind CSS

This project uses **Tailwind CSS** for styling React components. Tailwind allows you to use utility-first classes to build responsive and modern UIs quickly.

## 🌐 Live Demo

Check out the live React app deployed on Vercel:  
[React Learning Live Demo](https://reactlearning-puce.vercel.app/)

## 🚀 What You Will Learn

- JSX syntax
- Functional Components
- Props & State
- React Hooks (`useState`, `useEffect`)
- Conditional Rendering
- Event Handling
- Lists & Keys
- React Router
- Mini Projects

---

## 🛠 Tech Stack

- React (Latest version)
- JavaScript (ES6+)
- React Router DOM
- CSS / Tailwind CSS (optional)

# ⚡ React Rules (Best Practices & Common Mistakes)

> Follow these rules to write clean, maintainable, and bug-free React code.  

---

## 1️⃣ Components Must Start With Capital Letter
```jsx
// ❌ Wrong
function app() {
  return <h1>Hello</h1>;
}

// ✅ Correct
function App() {
  return <h1>Hello</h1>;
}

2️⃣ Hooks Must Be Used Correctly

    Only call hooks at the top level

    Do not use inside loops, conditions, or nested functions

// ✅ Correct
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

3️⃣ Never Mutate State Directly

// ❌ Wrong
users.push("new user");

// ✅ Correct
setUsers([...users, "new user"]);

Example:

const [users, setUsers] = useState(["Alice", "Bob"]);
setUsers([...users, "Charlie"]);

4️⃣ Always Use key When Rendering Lists

// Example
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

users.map(user => (
  <div key={user.id}>{user.name}</div>
));

5️⃣ JSX Must Return a Single Parent Element

// ✅ Correct
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);

6️⃣ Conditional Rendering

const isLogin = true;

// AND operator
{isLogin && <p>Welcome back!</p>}

// Ternary operator
{isLogin ? <Dashboard /> : <Login />}

7️⃣ Do Not Put JS Statements Directly in JSX

// ❌ Wrong
return (
  <div>
    if(isLogin) { <p>Welcome</p> }
  </div>
);

// ✅ Correct
const message = isLogin ? "Welcome" : "Please login";
<p>{message}</p>

8️⃣ useEffect for Side Effects

useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);
  return () => clearInterval(timer); // cleanup
}, []);

9️⃣ Keep Components Small and Reusable

// ✅ Example
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// Reusable
<Button label="Submit" onClick={handleSubmit} />
<Button label="Cancel" onClick={handleCancel} />

🔟 State Management Best Practices

// Derived state example
const tasks = [
  { id: 1, done: true },
  { id: 2, done: false },
];

const completedTasks = tasks.filter(task => task.done);

1️⃣1️⃣ Event Handling Best Practices

function ClickCounter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
}

1️⃣2️⃣ Forms & Controlled Components

function TextInput() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

1️⃣3️⃣ Lists and Keys

const items = ["Apple", "Banana", "Cherry"];
items.map((item, index) => <li key={index}>{item}</li>);

1️⃣4️⃣ Avoid Common Mistakes

    Do not mutate props

    Do not call setState in render

    Do not ignore dependencies in useEffect

    Avoid unnecessary re-renders

Example:

function Example({ value }) {
  // ❌ Wrong
  value.push("new"); // mutating prop

  // ✅ Correct
  const [localValue, setLocalValue] = useState([...value]);
}



## 📝 Author

**Name:** Viththiyakaran Nadarajah  
**About Me:** I am a software developer with a passion for building web applications using React and modern JavaScript. I enjoy creating clean, maintainable code and exploring innovative solutions to real-world problems.  
**Location:** Newtown, Wales, UK


