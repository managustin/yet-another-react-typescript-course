import React from "react";
const convertToArray = <T,>(value: T): T[] => {//the comma is necessary, not using it will make React think it is an HTML tag
    return[value];
}

convertToArray(5);
convertToArray("hello");


function nonArrowFunction<T>(value: T): T[] {
    return [value];
}

nonArrowFunction(5);
nonArrowFunction("wtf");

// Example of generics in react components.

type ButtonProps<T> = {
    countValue: T;
    countHistory: T[];
}
export default function Button<T>({countValue, countHistory}: ButtonProps<T>) {
    console.log(countValue, countHistory);
    return <button>cliqueame</button>;

}