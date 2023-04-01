import { methods } from '@/data/methods'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
export const Header = () => {
    const router = useRouter();
    return (
        <header className={`bg-white ${router.pathname === '/' ? 'hidden' : ''}`}>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Methods</h1>
                <nav>

                    <ul className="mt-6 space-y-6">
                        {
                            methods.map((method) => (
                                <li key={method.name}>
                                    <Link href={method.href}>
                                        <h3 className="text-xl font-medium text-gray-700">{method.name}</h3>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}
