import React, {useEffect, useState} from 'react';
import { getAllNews } from '../../api/libraries/apiLibraries';
import './news.css'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
    const [news, setNews] = useState ([]);

    function getNews() {
        getAllNews().then((res) => {
            setNews(res.data.data.news);
        })
    }

    useEffect(() => {
        getNews();
    }, [])

    var newsMap = news.map((item) => {
        const key = item._id
        const title = item.title;
        const content = item.content;
        const image = item.image;
        const article = item.article;
        return (
            <div className=''>
                <div className='newsCard'>
                    <div className='col-3'>
                        <img src={image} alt="" />
                    </div>
                    <div className='content-card col-9'>
                        <h5>{title}</h5>
                        <p>{content}</p>
                        <a target="_blank" href={article}>Read the article...</a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='container'>
            {newsMap}
        </div>
    )
}

export default News;