const MovieModal = ({id, title, year, grade, showtimes, receive, director, actor, story, photo, closeModal}) => {

    const handleClose = () => {
        closeModal(id);
    }

    return(
        <div className="MovieModal">
            <div className="mo_img">
                <p><img src={photo}/></p>
            </div>
            <div className="mo_txt">
                <p className="mo_name">{title}</p>
                <div className="mo_box1">
                    <p className="mb_01">{grade}</p>
                    <p className="mb_02">평균 {receive}</p>
                    <p className="mb_03">{year}</p>
                    <p className="mb_04">{showtimes}</p>
                </div>
                <div className="mo_box2">
                    <p className="mb_05">감독 : {director}</p>
                    <p className="mb_06">출연배우 : {actor}</p>
                </div>
                <p className="mb_story">{story}</p>
                <button onClick={handleClose}>닫기</button>
            </div>
        </div>
    )
}

export default MovieModal;