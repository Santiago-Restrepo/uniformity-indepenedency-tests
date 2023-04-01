import { Layout } from "@/components/Layout"
import Head from "next/head"
export default function Smirnov() {
    return (
        <>
            <Head>
                <title>Smirnov Test</title>
                <meta name="description" content="Smirnov Test" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <h1 className="text-4xl font-bold text-gray-900">Smirnov Test</h1>
                <p className="mt-1 text-base text-gray-500">Smirnov Test</p>
            </Layout>
        </>
    )
}
