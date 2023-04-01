import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}
export const Layout = ({
    children
}: LayoutProps) => {
    return (
        <main className='p-5'>
            {children}
        </main>
    )
}
