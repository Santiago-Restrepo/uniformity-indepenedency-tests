import React from 'react'
import { Cell } from './Cell'
interface TableProps {
    data: number[],
    setData: any
}
export const Table = ({
    data,
    setData
}: TableProps) => {
    return (
        <div className="flex flex-wrap">
            {
                data.map((item, index) => (
                    <Cell
                        key={item}
                        index={index}
                        number={item}
                        data={data}
                        setData={setData}
                    />
                ))
            }
        </div>
    )
}
