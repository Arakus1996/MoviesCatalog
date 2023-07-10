import { useDispatch, useSelector } from 'react-redux';
import style from './Paginator.module.css'
import { setCurrentPage } from '../../../../store/reducers';

const Paginator = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.movie.currentPage)
    const totalPages = useSelector(state => state.movie.totalPages)
    const pages = []
    const limit = 3

    for (let i = 2; i <= totalPages; i++) {
        pages.push(i)
    }

    return (<>
        {totalPages > 0 && <div className={style.paginator}>
            {currentPage > 1 && <span onClick={() => dispatch(setCurrentPage(currentPage - 1))}>{"<"}</span>}
            <span
                className={currentPage == 1 ? style.currentPageBtn : style.pageBtn}
                onClick={()=>dispatch(setCurrentPage(1))}>
                {1}
            </span>
            {currentPage > (limit+2) && <span onClick={() => dispatch(setCurrentPage(currentPage-limit-1))}>{"..."}</span>}

            {pages.filter(portion => portion >= currentPage-limit && portion <= currentPage+limit)
                .map((page, index) => <span
                    className={currentPage == page ? style.currentPageBtn : style.pageBtn}
                    key={index}
                    onClick={() => dispatch(setCurrentPage(page))}>
                    {page}
                </span>)}

            {currentPage < (totalPages-limit-2) && <span onClick={() => dispatch(setCurrentPage(currentPage+limit+1))}>{"..."}</span>}
            <span
                className={currentPage == totalPages ? style.currentPageBtn : style.pageBtn}
                onClick={() => dispatch(setCurrentPage(totalPages))}>
                {totalPages}
            </span>
            {currentPage < totalPages && <span onClick={() => dispatch(setCurrentPage(currentPage + 1))}>{">"}</span>}
        </div>}
        </>
    );
}

export default Paginator;