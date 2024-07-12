import styled from 'styled-components';

const StyledButton = styled.button<{ $style: ButtonStyle }>`
    align-items: center;
    border-radius: 5px;
    box-shadow: none;
    border: none;
    display: flex;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    min-width: 100px;
    font-weight: 600;

    ${(props) => {
        switch (props.$style) {
            case ButtonStyle.PRIMARY:
                return `
                    background-color: #dc3882;
                    color: #ffffff;

                    &:disabled {
                        background-color: #ffffff;
                        border: solid 1px #dc3882;
                        color: #dc3882;
                        cursor: default;
                    }
                `;
            default:
                return `
                    background-color: #ffffff;
                    border: solid 1px #a9adb2;
                    color: #0c1015;

                    &:disabled {
                        cursor: default;
                    }
                `;
        }
        
    }}
`;

enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

export enum ButtonStyle {
    DEFAULT,
    PRIMARY,
}

interface ButtonProps {
    text: string;
    type?: ButtonType;
    value?: string;
    disabled?: boolean;
    style?: ButtonStyle;
    onClick?: () => void;
}

const Button = ({type = ButtonType.BUTTON, style=ButtonStyle.DEFAULT, disabled = false, value, text, onClick}:ButtonProps) => 
    <StyledButton onClick={onClick} $style={style} disabled={disabled} type={type} value={value}>
        {text}
    </StyledButton>;

export default Button;