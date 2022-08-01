import React, {useState, useEffect} from "react";
import './header.css';
import CarouselFade from "../Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BsChatText } from "react-icons/bs";
import { getAllChat, addChat, getUserById } from "../../api/libraries/apiLibraries";
import { useForm } from "react-hook-form";


function Header() {

    const [chat, setChat] = useState([]);
    const [username, setUsername] = useState([]);

    function getChat() {
        getAllChat().then((res) => {
            setChat(res.data.data.chat)
        })
    }

    const getUserId = getUserById;

    const {
        register,
        handleSubmit,
      } = useForm();

    useEffect(() => {
        getChat();
        getUserId(localStorage.userid).then(function(res){
            setUsername(res.data.data.users.username)
            });
    }, [chat])

    function onSubmit(data) {
        addChat({
            author: username,
            content: data.content,
        })

      }

    const navigate = useNavigate();
    
    const routeRegister = () =>{ 
        navigate(`/userregister`);
      }
      const routeLogin = () =>{ 
        navigate(`/userlogin`);
      }
      
    var chatMap = chat.slice(0).reverse().map((item) => {
        const author = item.author;
        const content = item.content
        return (
            <div className="chat-content">
                <p className="author-name">{author}</p>
                <p>{content}</p>
            </div>
        )
    })

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

    const [isShown, setIsShown] = useState(false);
      function clearForm() {
        document.getElementById("chatform").reset();
      }
    const handleClick = event => {
        setIsShown(current => !current);
      };
      
      if(localStorage.tokenUser == undefined) {
        return (
            <div>
                <button className="register-btn" onClick={routeRegister}>Register</button>
                <button className="login-btn" onClick={routeLogin}>Login</button>
                <header className="header">
                    <p>Latest space <br />related news.</p>
                    <CarouselFade/>
                </header>
            </div>
        )
      } else {
        return (
            <div>
                <button className="register-btn" onClick={logOut}>Logout</button>
                <button  className="chat-btn" onClick={handleClick}> <BsChatText /> </button>
                {isShown && (
                    <div>
                        <div className="chat-box" hidden={false} id="chat-btn-id">
                        <div className="chat">{chatMap}</div>
                    </div>
                        <form id="chatform" onSubmit={handleSubmit(onSubmit)} className="chat-input-line">
                            <input className="chat-input" type="text" name="content"
                            {...register("content")}
                            />
                            <button onClick={clearForm} className="chat-post-btn">POST</button>
                        </form>
                    </div>
                    
                )}
                <header className="header">
                    <p>Latest space <br />related news.</p>
                    <CarouselFade/>
                </header>
            </div>
        )
      }
}

export default Header;

