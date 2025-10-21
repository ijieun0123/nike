import styled from "styled-components";

interface ColorProps {
    color?: "white" | "black";
}

interface TitleBoxProps {
    title: string;
    subtitle1: string;
    subtitle2: string;
    color?: "white" | "black";
    "data-aos"?: string;
    "data-aos-delay"?: string;
}

const TitleContainer = styled.div`
    position: relative;
`;

const Title = styled.h2<ColorProps>`
    color: ${props =>
        props.color == "white" ? "var(--white-color)" : "var(--black-color)"};
`;

const Paragraph = styled.p<ColorProps>`
    margin: 20px 0 30px;
    color: ${props =>
        props.color == "white" ? "var(--white-color)" : "var(--black-color)"};

    span {
        @media (min-width: 768px) {
            display: block;
        }
    }
`;

const Line = styled.span<ColorProps>`
    display: block;
    width: 100%;
    height: 1px;
    background: ${props =>
        props.color == "white"
            ? "rgba(255,255,255,0.3)"
            : "rgba(17,17,17,0.3)"};
`;

const MoreBtn = styled.a<ColorProps>`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    justify-content: end;
    color: ${props =>
        props.color == "white" ? "var(--white-color)" : "var(--black-color)"};

    img {
        width: 5px;
        height: 11px;
    }

    @media (min-width: 768px) {
        position: absolute;
        right: 0;
        bottom: 30px;
    }
`;

const TitleBox = ({
    title,
    subtitle1,
    subtitle2,
    color,
    ...rest
}: TitleBoxProps) => {
    return (
        <TitleContainer className="title_box" {...rest}>
            <Title color={color} className="section_title">
                {title}
            </Title>
            <Paragraph color={color} className="paragraph">
                <span>{subtitle1}</span>
                <span>{subtitle2}</span>
            </Paragraph>
            <Line color={color}></Line>
            <MoreBtn href="#" className="more_btn" color={color}>
                MORE
                <img
                    src={
                        color === "black"
                            ? `img/more_btn_arrow_black.png`
                            : `img/more_btn_arrow_white.png`
                    }
                    alt="arrow"
                />
            </MoreBtn>
        </TitleContainer>
    );
};

export default TitleBox;
