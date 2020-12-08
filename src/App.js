import React, { useState } from "react"
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: "What is react?",
        content: "React is a fron-end framework"
    },
    {
        title: "Why use react?",
        content: "React is a favorite among developers"
    },
    {
        title: "How do you use react?",
        content: "You use react by creating components"
    }

]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Color Blue",
        value: "blue"
    }
]


export default () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    )
};