import React from 'react'
import { Cell } from './Cell'
interface TableProps {
    data: string[],
    setData: any
}
export const Table = ({
    data,
    setData
}: TableProps) => {
    const handleAddCell = () => {
        const newData = [...data];
        newData.push("0");
        setData(newData);
    }
    const handleClear = () => {
        setData([]);
    }   
    return (
        <div className="flex flex-col">
            <div className="table__container flex flex-wrap justify-center max-h-96 overflow-y-scroll">
                {
                    data.map((item, index) => (
                        <Cell
                            key={index}
                            index={index}
                            number={item}
                        />
                    ))
                }
            </div>
            <div className="buttons flex justify-center">
                <button
                    className="p-5"
                    onClick={handleAddCell}
                >
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                                Add Cell
                            </div>
                        </div>
                    </div>
                </button>  
                <button
                    className="m-2"
                >

                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                                Upload File
                            </div>
                        </div>
                    </div>
                </button>

                <button
                    className="p-5"
                    onClick={handleClear}
                >
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="text-sm font-medium text-gray-900">
                                Clear
                            </div>
                        </div>
                    </div>
            
                </button>
            </div>
        </div>
    )
}
