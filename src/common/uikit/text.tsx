export enum FontSize {
    SMALL = 'SMALL',
}

interface HeaderProps {
    title: string,
    subtitle?: string,
}

interface TextProps {
    size?: FontSize,
    value: string,
}

export const Text = ({size = FontSize.SMALL, value}: TextProps) => {
    return <p>{value}</p>;
}

export const Header = ({title, subtitle}: HeaderProps) => {
    return (
        <>
        <h1>{title}</h1>
        {subtitle ? <h2>{subtitle}</h2> : null}
        </>
    );
}

