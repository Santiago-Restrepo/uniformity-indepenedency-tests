import Link from 'next/link'
import React from 'react'
interface MethodLinkProps {
    name: string,
    href: string,
    description: string
}
export const MethodLink = ({
    name,
    href,
    description
}: MethodLinkProps) => {
    return (
        <Link href={href}>
            <h3 className="text-xl font-medium text-gray-700">{name}</h3>
            <p className="mt-1 text-base text-gray-500">{description}</p>
        </Link>
    )
}
