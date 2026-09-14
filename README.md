### 📂 GitHub Repository

- Project Name
  --Dev Stack
- A little description
  -- Dev Stack is a React + TypeScript web app that allows developers to build their own custom web stacks.
- Technology that you use.
  -- 1. React
  -- 2. Typescript.
  -- 3. Tailwind CSS.
  -- 4. Ddaisyui.
  -- 5. React Toastify.
  -- 6. Font Awesome.
- 3 features about your project.
  -- 1. Techno Grid
  -- 2. Add Stack.
  -- 3. Explore the Technologies.

- Also answer these React questions at the end of your Readme (write the answers in
  your own words, short and simple):

1. What is JSX, and why is it used in React?

   --JSX (JavaScript XML) is a syntax extension to JavaScript that looks a lot like HTML, but is actually written within JavaScript code. It is used to describe the UI in React.

   ***

2. What is the difference between props and state?
   -- Props is data passed from the parent component to the child component. They work much like parameters to a function.
   & state is component own, internal data, which can change over time and causes the component to re-render.

3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook that allows a component to remember and update data—known as "state"—that persists even after a re-render.
I have used it in `TechnoItem.tsx`.

---

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
   -- A React hook that can be used to run side effects inside a component.....

---

5. Why does every item in a `.map()` list need a unique `key` prop?
   -- When React renders a list such as with .map() , the key prop tells React which array item corresponds to which DOM element — especially when items are added, removed, or re-ordered in the list.

---

6. What is conditional rendering? Show one place you used it (example: the empty
   stack message).
   --Conditional rendering means displaying different UI elements based on specific conditions.
   I have used it in YourStack.tsx
   "<p className="text-sm text-gray-400 mt-1 mb-4">
   {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
   Selected
    </p>"

---

7.  How do you pass data from a parent component to a child component, and how  
    does a child send something back to the parent?
    by `useState` .

---
