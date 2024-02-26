import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieItem = ({id, title, year, grade, showtimes, receive, director, actor, story, photo}) => {

    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    }
    const closeModal = () => {
        setIsModal(false);
    }

    return (
        <div className="MovieItem">
            <p><img src={photo}></img></p>
            <p className="m_name">{title}</p>
            <div className="m_txt">
                <p className="m_time">{showtimes}</p>
                <p className="m_rw">{receive}</p>
            </div>
            <div className="over">
                <button onClick={showModal}>상세보기</button>
            </div>
            <p className="m_num">{grade}</p>
            <div className={isModal ? 'modal show' : 'modal'}>
                <MovieModal id={id} title={title} year={year} grade={grade} showtimes={showtimes} receive={receive} director={director} actor={actor} story={story} photo={photo} closeModal={closeModal} />
            </div>
        </div>
    )
}

export default MovieItem;