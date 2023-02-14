import React from 'react';
import { useNavigate} from 'react-router-dom';

function Pagination({ count }) {
    // const [pageBtn, setpageBtn] = useSearchParams()
    const navigate = useNavigate();
    let countBtns = count / 2;
    let btn = [];

    for (let i = 1; i < countBtns +1; i++) {
        btn.push(i)
    }

    function paginationBtn(item) {
        navigate(`/main?page=${item}`);
    }

    return (
        <div className='pagination'>
            {btn.map((item, index) => (
                <button  key={index} onClick={paginationBtn.bind(undefined, item)}>{item}</button>
            ))
            }
        </div>
    )
}

export default Pagination;