import React, { Children } from "react"

type ButtonProps = {    //added this type, so that I can specify that the props for the button are of type buttonProps
    setCount: React.Dispatch<React.SetStateAction<number>>;
    children: React.ReactNode;
}
export default function Button({ setCount, children }: ButtonProps) {
    
    return (
        <button onClick={() => setCount(prev=> prev + 1)}>
            {children}
        </button>
    )
}