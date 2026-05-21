**Notes on "Create your own react library and JSX"**

### **1. Introduction**

* In this video, we will build our own "Custom React" to understand how React works under the hood.
* The goal is to gain confidence and clarity that React isn't magic, and you can build a bare-minimum version of it.
* We will also explore how JSX works and take a look at the original React GitHub repository. [[02:01](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=121)]

### **2. Building a Custom React App**

* A basic `index.html` is created with a `div` having `id="root"`. This is where our React app will be injected.
* A custom JS file (e.g., `customreact.js`) is linked. [[03:04](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=184)]
* The process starts by grabbing the root element using `document.querySelector('#root')` and storing it in a variable called `mainContainer`. [[05:08](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=308)]

### **3. Understanding React Elements**

* When a React component returns JSX (like `<h1>Hello</h1>`), React doesn't see HTML. It converts it into a "Tree" or an object. [[06:54](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=414)]
* We simulate this by creating a `reactElement` object. It typically contains:
* `type`: The type of tag (e.g., `'a'`, `'div'`, `'p'`).
* `props`: An object containing properties/attributes (e.g., `href`, `target`).
* `children`: The content inside the tag (e.g., text). [[07:16](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=436)]



**Example of a React Element Object:**

```javascript
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

```

### **4. Creating a Custom Render Method**

* We need a function to take this element and inject it into the root container. We call this `customRender(reactElement, container)`. [[09:18](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=558)]

**Step-by-Step Rendering:**

1. **Create the DOM Element:** Use `document.createElement(reactElement.type)`. [[10:27](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=627)]
2. **Add Content:** Set `innerHTML` to `reactElement.children`. [[11:27](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=687)]
3. **Set Attributes:** Add attributes from `props`. Initially, this was done manually (e.g., `.setAttribute('href', ...)`). [[11:55](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=715)]
4. **Inject:** Use `container.appendChild(domElement)` to add it to the page. [[12:59](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=779)]

**Modular Approach (Version 2):**

* To make the code dynamic for any number of attributes, a `for...in` loop is used to iterate over `reactElement.props` and set each attribute dynamically. [[15:38](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=938)]

### **5. Exploring Vite and JSX**

* When using Vite or Create React App, `App.js` is just a function that returns JSX. [[19:54](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1194)]
* JSX is Javascript mixed with HTML. React doesn't understand JSX natively. It uses a bundler/transpiler (like Babel or Vite's internal bundler) to convert JSX into an object structure (a tree). [[21:08](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1268)]
* Since `App` is a function, you can technically run it as `App()` instead of `<App/>`, but it's not recommended for optimization and standard code convention. [[22:12](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1332)]

### **6. Why direct objects don't work in `root.render()**`

* If you try to pass the raw `reactElement` object directly into `ReactDOM.createRoot().render()`, it will fail. [[25:24](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1524)]
* This is because React's internal `render` method expects a specific object structure created by its own methods, not a manually crafted one with arbitrary keys. [[26:40](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1600)]

### **7. `React.createElement**`

* React provides a method to create elements: `React.createElement(type, props, children)`. [[30:46](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1846)]
* **Syntax:**
1. `type`: The HTML tag (e.g., `'a'`).
2. `props`: An object with attributes (or `null` if empty).
3. `children`: The content/text or nested elements.
4. Subsequent arguments are evaluated expressions (variables).



### **8. Evaluated Expressions in JSX**

* Variables are injected into JSX using curly braces `{}`. [[34:36](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=2076)]
* **Crucial Rule:** The `{}` syntax only takes **Evaluated Expressions**. This means you provide the final outcome (like a variable name).
* You **cannot** write logic like `if/else` statements or `for` loops inside the `{}`. [[35:10](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=2110)]
* **Why?** Because at the end of the day, JSX is converted into a Javascript object. You cannot write `if/else` logic as properties inside a Javascript object. [[37:50](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=2270)]

### **9. Deep Dive into React's Source Code**

* The video takes a quick look at the React source code on GitHub. [[42:13](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=2533)]
* We see how Babel interacts with React and where `React.createElement` is actually defined. [[43:42](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=2622)]
* This confirms that the simplified custom version we built mirrors the core logic of the actual React library, minus the complex algorithms and optimizations. [[44:30](https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=2670)]