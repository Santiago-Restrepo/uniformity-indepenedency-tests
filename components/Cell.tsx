import React, {useState} from 'react'
interface CellProps {
    index: number,
    number: number,
    data: number[],
    setData: React.Dispatch<React.SetStateAction<number[]>>
}
export const Cell = ({
    index,
    number,
    data,
    setData
}: CellProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = [...data];
        newData[index] = parseInt(e.target.value);
        setData(newData);
    }
    return (
        <div className="p-5">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <input 
                        className="text-sm font-medium text-gray-900"
                        type="number"
                        value={number}
                        onChange={handleChange}
                    />                        
                </div>
            </div>
        </div>
    )
}
