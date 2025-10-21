import styled from "styled-components";
import RoundBtn from "../Button/RoundBtn";

interface IconicSlideProps {
    name: string;
    description: string;
    imgUrl: string;
}

const StyledSlide = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 448px;
    padding-bottom: 63px;

    @media (min-width: 768px) {
        height: 530px;
    }
`;

const NikeLogo = styled.div`
    position: absolute;
    top: 18px;
    left: 6px;
    width: 38px;
    height: 14px;

    @media (min-width: 768px) {
        top: 36px;
        left: 12px;
        width: 77px;
        height: 27px;
    }
`;

const ShoesImg = styled.div`
    position: absolute;
    top: -86px;
    left: 50%;
    transform: translateX(-50%);
    width: 222px;
    height: 320px;

    @media (min-width: 768px) {
        width: 264px;
        height: 371px;
    }
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    text-align: center;
`;

const ShoesName = styled.p`
    color: var(--white-color);
    font-weight: 800;
    font-size: 20px;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`;

const ShoesDescription = styled.p`
    margin: 10px 0 32px;
    color: var(--white-color);

    @media (min-width: 768px) {
        margin: 15px 0 33px;
    }
`;

const IconicSlide = ({ name, description, imgUrl }: IconicSlideProps) => {
    return (
        <StyledSlide className="iconic_slide">
            <NikeLogo
                className="bg_nike_logo"
                style={{
                    background: `url(img/logo.png) no-repeat center/cover`,
                }}
            ></NikeLogo>
            <ShoesImg
                className="bg_shoes"
                style={{
                    background: `url('${imgUrl}') no-repeat center/contain`,
                }}
            ></ShoesImg>
            <InfoBox>
                <ShoesName>{name}</ShoesName>
                <ShoesDescription className="paragraph">
                    {description}
                </ShoesDescription>
                <RoundBtn btnName="SHOW NOW" color="white" />
            </InfoBox>
        </StyledSlide>
    );
};

export default IconicSlide;
