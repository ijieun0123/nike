import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TrendingSlide from "../slide/TrendingSlide";
import styled from "styled-components";
import "./TrendingSlider.scss";

const trendingData = [
    {
        id: 1,
        title: "나이키와 시작하는 가을",
        imageUrl: "/nike/img/trend_section_photo_1.png",
    },
    {
        id: 2,
        title: "나이키 스트라이크 의류 컬렉션",
        imageUrl: "/nike/img/trend_section_photo_2.png",
    },
    {
        id: 3,
        title: "남성 맥스 90 농구 티셔츠",
        imageUrl: "/nike/img/trend_section_photo_3.png",
    },
    {
        id: 4,
        title: "나이키 골프 컬렉션",
        imageUrl: "/nike/img/trend_section_photo_4.png",
    },
];

const StyledSwiper = styled(Swiper)`
    margin-top: 40px;
    padding-bottom: 50px;

    @media (min-width: 768px) {
        margin-top: 50px;
    }
`;

const TrendingSlider = () => {
    return (
        <StyledSwiper
            className="trending_slider"
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            pagination={{ clickable: true }}
            centeredSlides={false}
        >
            {trendingData.map(card => (
                <SwiperSlide key={card.id}>
                    <TrendingSlide
                        title={card.title}
                        imageUrl={card.imageUrl}
                    />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

export default TrendingSlider;
