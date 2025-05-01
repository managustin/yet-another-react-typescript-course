import React, { useEffect } from "react"

type User = {
    sessionId: string;
    name: string
}

type Guest = Omit<User, "name">; //Omit takes an existing type and removes something from there 

type ButtonColor = "red" | "blue" | "green";

export default function Button() {

    useEffect(() => {
        const previousButtonColor = localStorage.getItem("buttonColor") as ButtonColor;
    }, []);
    return <button>cliqueame</button>

}