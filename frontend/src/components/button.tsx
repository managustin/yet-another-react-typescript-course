export default function Button({    //added some destructuring for the props, which is a common practice
    backgroundColor,
    fontSize,
    pillShape,
}:  {
    backgroundColor: string
    fontSize: number
    pillShape: boolean
}) {

    console.log('Valor de pillShape: ', pillShape)
    if (pillShape){
        return (
            <button style={{background: backgroundColor, fontSize: fontSize}} className="text-white rounded-[50px] px-4 py-2 border-2">
                Cliqueame
            </button>
        )
    }
    return (
        <button style={{background: backgroundColor, fontSize: fontSize}} className="text-white rounded px-4 py-2">
            Cliqueame
        </button>
    )
}