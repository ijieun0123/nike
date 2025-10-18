import styled from "styled-components";

interface TrendingSlideProps {
    title: string;
    imageUrl: string;
}

const StyledSlide = styled.a`
    position: relative;
    display: inline-block;
    width: 100%;
`;

const BackgroundPhoto = styled.div<{ imageUrl: string }>`
    width: 100%;
    height: 395px;
    background: url(${props => props.imageUrl}) no-repeat center/cover;
`;

const InfoBox = styled.div`
    width: 100%;
    padding: 20px;
    background: var(--white-color);
`;

const Title = styled.b`
    color: var(--black-color);
`;

const ShopNow = styled.p`
    margin-top: 10px;
    color: var(--black-color);
    font-size: 15px;
`;

const TrendingSlide = ({ title, imageUrl }: TrendingSlideProps) => {
    return (
        <StyledSlide href="#" className="trending_slide">
            <BackgroundPhoto className="bg_photo" imageUrl={imageUrl} />
            <InfoBox>
                <Title className="card_title">{title}</Title>
                <ShopNow>SHOP NOW</ShopNow>
            </InfoBox>
        </StyledSlide>
    );
};

export default TrendingSlide;
