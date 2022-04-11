import React, { DetailedHTMLProps, LinkHTMLAttributes, ReactNode } from 'react'
import { Link, useMatch } from 'react-router-dom'

interface CustomLinkProps {
    to: string;
    children: ReactNode;
}

export const CustomLink = ({ children, to, ...props }: CustomLinkProps): JSX.Element => {

    const match = useMatch(to)

    return (
        <Link
            to={to}
            style={{
                color: match ? 'var(--color-bg-hover)' : '#fff'
            }}
            {...props}

        >
            {children}
        </Link>
    )
}