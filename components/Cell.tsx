import { setValue, setData } from '@/features/chisquareSlice'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
interface CellProps {
    index: number,
    number: string
}
export const Cell = ({
    index,
    number
}: CellProps) => {
    const dispatch = useDispatch();
    const {data} = useSelector((state: RootState) => state.chisquare);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let splittedData = e.target.value.split('\t').reduce((acc, item) => {
            //Split by spaces
            if (item.includes(' ')) {
                return [...acc, ...item.split(' ')];
            }
            return [...acc, item];
        }, [] as string[]);

        if (splittedData.length > 1) {
            const newData = [...data];
            newData.splice(index, 1, ...splittedData.map((item) => item.replace(',', '.')));
            dispatch(setData(newData));
            return;
        }
        //Return if input is not a number
        dispatch(setValue({
            index,
            value: e.target.value
        }));
    }
    const handleRemove = () => {
        const newData = [...data];
        newData.splice(index, 1);
        dispatch(setData(newData));
    }
    return (
        <div className="p-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <input 
                        className="w-10 mr-2 text-sm font-medium text-gray-900 "
                        type="text"
                        value={number}
                        onChange={handleChange}
                    />
                    <button
                        className="ml-2 text-sm font-medium transition-colors duration-300 text-gray-300 hover:text-gray-500"               
                        onClick={handleRemove}
                    >
                        x
                    </button>
                </div>
            </div>
        </div>
    )
}
