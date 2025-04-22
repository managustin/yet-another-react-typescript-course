export default function Button(props: {
    backgroundColor: string;
}) {

    return (
        <button style={{background: props.backgroundColor}} className="bg-blue-500 text-white rounded px-4 py-2">
            Cliqueame
        </button>
    )
}