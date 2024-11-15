import React from "react";


export default function App() {
    const testBool: boolean | null = null
    const lintTest = testBool!;

    return <div>
        <span>Hello world {lintTest}</span>
    </div>
}