const buttonTextOption = [
    "Click me",
    "click me again",
    "click me one more time"
] as const; // this sets these specific strings as options

export default function Button() {
    
    return <button>{
        buttonTextOption.map(option => {
            return option;
        })
    }</button>
}