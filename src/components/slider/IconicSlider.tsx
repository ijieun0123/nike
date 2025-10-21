import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import IconicSlide from "../slide/IconicSlide";
import styled from "styled-components";
import "./IconicSlider.scss";

interface IconicSliderProps {
    "data-aos"?: string;
    "data-aos-delay"?: string;
}

const iconicData = [
    {
        id: 1,
        name: "코르테즈",
        description: "트랙을 넘어 스트리트로, 영원한 클래식",
        imgUrl: "img/iconic_section_shoes_1.png",
    },
    {
        id: 2,
        name: "에어조던1",
        description: "스니커 문화의 시작, 전설을 만들다",
        imgUrl: "img/iconic_section_shoes_2.png",
    },
    {
        id: 3,
        name: "샥스",
        description: "혁신적인 컬럼 쿠셔닝, 대담한 미래",
        imgUrl: "img/iconic_section_shoes_3.png",
    },
];

const StyledSwiper = styled(Swiper)`
    margin-top: 114px;
    overflow: visible;

    @media (min-width: 768px) {
        margin-top: 124px;
    }
`;

const IconicSlider = ({ ...rest }: IconicSliderProps) => {
    return (
        <StyledSwiper
            className="iconic_swiper"
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView="auto"
            loop={false}
            pagination={{ clickable: true }}
            breakpoints={{
                768: {
                    spaceBetween: 20,
                },
            }}
            {...rest}
        >
            {iconicData.map(data => (
                <SwiperSlide key={data.id}>
                    <IconicSlide
                        name={data.name}
                        description={data.description}
                        imgUrl={data.imgUrl}
                    />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

export default IconicSlider;
