import React from "react"

type ButtonProps = {
    type: "button" | "submit" | "reset";
    color: "red" | "blue" | "green";
}

type superButtonProps = ButtonProps & {
    size: "md" | "lg";
}
export default function Button({}: ButtonProps) {
    return (
    <button>
        Click me!
    </button>
    );
}