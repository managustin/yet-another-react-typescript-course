type Color = "red" | "blue" | "green" | "yellow" | "purple" | "black"

type ButtonProps = {    //added this type, so that I can specify that the props for the button are of type buttonProps
    backgroundColor: Color
    fontSize?: number
    pillShape?: boolean
    textColor: Color
    padding: [number, number, number, number]
}

export default function Button({    //added some destructuring for the props, which is a common practice
    backgroundColor,
    textColor,
    fontSize,
    pillShape,
    padding,
}:  ButtonProps) {
    return (
        <button style={{
                background: backgroundColor,
                fontSize: fontSize, 
                color: textColor,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
                }} 
                className={`text-white border-2 ${pillShape ? 'rounded-[50px]' : 'rounded'}`}
                >
            Cliqueame
        </button>
    )
}