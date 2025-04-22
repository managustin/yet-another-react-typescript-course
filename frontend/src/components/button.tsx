import React from "react"

type ButtonProps = {    //added this type, so that I can specify that the props for the button are of type buttonProps
    // style: {
    //     backgroundColor: string;
    //     fontSize: number;
    //     textColor: string;
    // } instead of doing this, we can use one of the types we get from REACT.
    style: React.CSSProperties
    borderRadius: Record<'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight', number>
}

export default function Button({style, borderRadius}: ButtonProps) {
    return (
        <button style={{
            ...style,   //spread operator 
            borderTopLeftRadius: borderRadius.topLeft + 'px',
            borderTopRightRadius: borderRadius.topRight + 'px',
            borderBottomLeftRadius: borderRadius.bottomLeft + 'px',
            borderBottomRightRadius: borderRadius.bottomRight + 'px',
        }}>
            Cliqueame
        </button>
    )
}