import styled from "styled-components";

interface RoundBtnProps {
    btnName: string;
    color?: string;
    "data-aos"?: string;
    "data-aos-delay"?: string;
}

interface ColorProps {
    color?: string;
}

const StyledBtn = styled.a<ColorProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 140px;
    height: 40px;
    border-radius: 50px;
    border: 2px solid
        ${props =>
            props.color == "white"
                ? "var(--white-color)"
                : "var(--black-color)"};
    color: ${props =>
        props.color == "white" ? "var(--white-color)" : "var(--black-color)"};

    @media (min-width: 768px) {
        width: 177px;
        height: 52px;
        gap: 18px;
    }
`;

const Arrow = styled.img`
    width: 5px;
    height: 11px;
`;

const RoundBtn = ({ btnName, color, ...rest }: RoundBtnProps) => {
    return (
        <StyledBtn href="#" color={color} className="round_btn" {...rest}>
            {btnName}
            <Arrow
                src={
                    color === "black"
                        ? `/nike/img/more_btn_arrow_black.png`
                        : `/nike/img/more_btn_arrow_white.png`
                }
                alt="arrow"
                color={color}
            />
        </StyledBtn>
    );
};

export default RoundBtn;
