import { Layout } from "@/components/Layout"
import { Table } from "@/components/Table";
import { setData as setTableData } from "@/features/chisquareSlice";
import Head from "next/head"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../app/store';
export default function Chisquare() {
    const dispatch = useDispatch();
    const {data} = useSelector((state: RootState) => state.chisquare);
    const setData = (data: string[]) => {
        dispatch(setTableData(data));
    }
    return (
        <>
            <Head>
                <title>Chi-Square Test</title>
                <meta name="description" content="Chi-Square Test" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <h1 className="text-4xl font-bold text-gray-900">Chi-Square Test</h1>
                <p className="mt-1 text-base text-gray-500">Pega tu matriz en una celda o sube un archivo .csv</p>
                <Table data={data} setData={setData} />
            </Layout>
        </>
    )
}