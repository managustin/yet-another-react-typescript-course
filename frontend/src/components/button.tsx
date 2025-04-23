import React from "react"

type ButtonProps = React.ComponentPropsWithoutRef<"button">    // this is a helper type, we can now accept all the
                                                // attributes that this native html element accepts.

export default function Button({ type, autoFocus }: ButtonProps) {
    return <button> Click me!</button>
}