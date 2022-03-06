const Dic=[
    {
        id: 1,
        name: "What is the Virtual DOM ?",
        answer: "The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM."
    },
    {
        id: 2,
        name: "How do you create React app ?",
        answer: "If you've previously installed create-react-app globally via npm install -g create-react-app , we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version."
    },
    {
        id: 3,
        name: "What is an Event ?",
        answer: "React events are written in camelCase syntax: onClick instead of onclick React event handlers are written inside curly braces: onClick={shoot} instead of onClick=shoot()"
    },
    {
        id: 4,
        name: "What is synthetic event in React ?",
        answer: "A synthetic event is a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including stopPropagation() and preventDefault() , except the events work identically across all browsers."
    }
]
export default Dic;

