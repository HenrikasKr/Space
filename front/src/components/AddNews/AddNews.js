import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAllNews, addNews, deleteNewsById } from '../../api/libraries/apiLibraries';
import './AddNews.css'
import swal from 'sweetalert'


function AddNews(){

    const navigate = useNavigate();


  const {
    register,
    handleSubmit,
  } = useForm();

  function logOut() {
    swal({
        title: "Are you sure you want to log out?",
        icon: 'warning',
        buttons: ['Cancel','Confirm']
    }).then((ifConfirm) => {
        if(ifConfirm) {
            localStorage.clear();
            navigate("/");
            swal({
                title: "Logged out successfully!",
                icon: 'success',
                button: 'Ok'
            })
        }
    })
  }

  if(localStorage.tokenAdmin === undefined) {
    navigate("/");
    swal({
        title: "Access is denied",
        icon: "error"
    })
  }


  function onSubmit(data) {
    addNews({
        title: data.title,
        content: data.content,
        image: data.image,
        article: data.article,
    })
    getNews();
    getNews();
  }

  const [news, setNews] = useState ([]);

    function getNews() {
        getAllNews().then((res) => {
            setNews(res.data.data.news);
        })
    }

    function deleteNews(id) {
        swal({
            title: "Are you sure you want to delete this post?",
            icon: 'warning',
            buttons: ["Cancel" , "Confirm"]
        }).then((ifConfirm) => {
            if(ifConfirm) {
                deleteNewsById(id);
                getNews();
            }
        })
    }

    useEffect(() => {
        getNews();
    }, [news])


    var newsMap = news.map((item) => {
        const id = item._id
        const title = item.title;
        const content = item.content;
        const image = item.image;
        const article = item.article;
        return (
            <div className="mx-5">
                <button onClick={() => deleteNews(id)}>Delete</button>
                <p> <b>Title:</b> {title}</p>
                <p> <b>Content:</b> {content}</p>
                <p> <b>Image:</b> {image}</p>
                <p> <b>Article:</b> {article}</p>
                <hr />
            </div>
        )
    })

    return (
        <div className="addnews-page">
            <button id="logout" onClick={() => logOut()}>Log out</button>
            <div className='addnews-box'>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                    className="addnews-title mt-2"
                    type="text"
                    name="title"
                    placeholder="Title"
                    {...register("title")}/>
                    </div>
                    
                    <div>
                    <input
                    className="addnews-content mt-2"
                    type="text"
                    name="content"
                    placeholder="Content"
                    {...register("content")}/> 
                    </div>
                    
                    <div>
                    <input
                    className="addnews-image mt-2"
                    type="text"
                    name="image"
                    placeholder="Image"
                    {...register("image")}/>  
                    </div>
                    
                    <div>
                    <input
                    className="addnews-article mt-2"
                    type="text"
                    name="article"
                    placeholder="Article"
                    {...register("article")}/>  
                    </div>
                    <div>
                        <button className="addnews-form-btn mt-2" type="submit">
                            Post
                        </button>
                    </div>
                </form>
            </div>
            <div className="cards">
                {newsMap}
            </div>
        </div>
      );
}

export default AddNews;