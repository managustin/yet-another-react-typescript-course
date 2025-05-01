import React from "react"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "secondary";
};    // this is a helper type, we can now accept all the

export default function Button({ type, autoFocus, variant, ...rest }: ButtonProps) {
    return (
    <button type={type} autoFocus={autoFocus} {...rest}>
        Click me!
    </button>
    );
}