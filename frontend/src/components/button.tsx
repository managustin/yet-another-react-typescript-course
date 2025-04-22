import React from "react"

type ButtonProps = {    //added this type, so that I can specify that the props for the button are of type buttonProps
    children: React.ReactNode;
}
export default function Button({ children }: ButtonProps) {
    return (
        <button>
            {children}
        </button>
    )
}