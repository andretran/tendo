import * as React from 'react';

interface HeaderProps {
    title: string,
    subtitle?: string,
}

const Header = ({title, subtitle}: HeaderProps) => {
    return (
        <>
        <h1>{title}</h1>
        {subtitle ? <h2>{subtitle}</h2> : null}
        </>
    );
}

export default Header;