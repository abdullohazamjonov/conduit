import { useState } from "react"

type InputProps = {
    placeholder: string,
    type: string
}

export default function Input({ placeholder, type }: InputProps) {
    const [value, setValue] = useState("");

    return (
        <input
            type={type}
            value={value}
            className="border border-gray-300 p-2 w-80 rounded"
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
        />
    )
}