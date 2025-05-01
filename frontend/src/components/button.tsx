import React, { useRef, useState } from "react";

type User = {
    name: string;
    age: number;
}

export default function Button() {
    
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("Click me!");
    const [isPrimary, setIsPrimary] = useState(true);  //the specification of <boolean> could be added, though it's not necessary 
    const [user, setUser] = useState<User | null>(null);    //initially, the user is null
    
    const name = user?.name;

    const ref = useRef<HTMLButtonElement>(null);

    return (
    <button ref={ref}>
        Click me!
    </button>
    );
}