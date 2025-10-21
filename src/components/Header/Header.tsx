import { useState } from "react";
import "./_Header.scss";

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleMenuClick = () => {
        setIsNavActive(!isNavActive);
        setIsMenuActive(!isMenuActive);
    };

    return (
        <header>
            <div className="header_inner">
                <h1 className="logo">
                    <a href="#">
                        <img src="/nike/img/logo.png" alt="나이키 로고" />
                    </a>
                </h1>
                <button
                    className={isMenuActive ? "menu_btn active" : "menu_btn"}
                    onClick={handleMenuClick}
                >
                    <span className="sr_only">메뉴 버튼</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={isNavActive ? "active" : ""}>
                    <h2 className="sr_only">메인 네비게이션</h2>
                    <ul>
                        <li>
                            <a href="#">Brand</a>
                        </li>
                        <li>
                            <a href="#">Iconic</a>
                        </li>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
