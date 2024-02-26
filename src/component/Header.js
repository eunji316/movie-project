import { useState } from "react";

const Header = ({setCategory}) => {

    const [selectedCate, setSelectedCate] = useState('all');

    const clickBtn = (cateName) => {
        setSelectedCate(cateName);
        setCategory(cateName);
    }

    return (
        <div className="Header">
            <h1>🎬 영화 리스트</h1>
            <div className="category">
                <button
                    onClick={() => clickBtn('all')}
                    className={selectedCate==='all' ? 'active' : ''}
                >전체</button>
                <button
                    onClick={() => clickBtn('2020')}
                    className={selectedCate==='2020' ? 'active' : ''}
                >2020년</button>
                <button
                    onClick={() => clickBtn('2021')}
                    className={selectedCate==='2021' ? 'active' : ''}
                >2021년</button>
                <button
                    onClick={() => clickBtn('2022')}
                    className={selectedCate==='2022' ? 'active' : ''}
                >2022년</button>
                <button
                    onClick={() => clickBtn('2023')}
                    className={selectedCate==='2023' ? 'active' : ''}
                >2023년</button>
            </div>
        </div>
    )
}

export default Header;