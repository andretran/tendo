import styled from 'styled-components';

interface HeaderProps {
    title: string,
}

interface TextProps {
    size?: number,
    value: string,
    weight?: number,
}

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    & h1 {
        font-size: 24px;
    }
`;

const StyledText = styled.p <{ $size: number, $weight: number }>`
    font-size: ${props => `${props.$size}px`};
    font-weight: ${props => props.$weight};
    line-height: 1.5em;
`

export const Text = ({size = 14, weight = 400, value}: TextProps) => {
    return <StyledText $size={size} $weight={weight}>{value}</StyledText>;
}

export const Header = ({title}: HeaderProps) => {
    return (
        <StyledHeader>
            <h1>{title}</h1>
        </StyledHeader>
    );
}

