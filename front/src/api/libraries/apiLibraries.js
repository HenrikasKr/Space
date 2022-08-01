//  All erros need to put in front
// Libraries
import axiosClient from "../apiNews";
import swal from "sweetalert";

// GET all news
export async function getAllNews() {
  const res = await axiosClient.get("/");
  return res;
}

// GET news by id

export async function getAllUNewsById(id) {
    const res = await axiosClient.get(`/${id}`);
    return res;
  }

// Add news
export async function addNews(data) {
  const res = await axiosClient.post(`/addnews`, JSON.stringify(data));
  return res;
}


// update news by id
export async function updateUserById(data, id) {
  const res = await axiosClient
    .patch(`/updatenews/${id}`, JSON.stringify(data));
  return res;
}

// delete news by Id
export async function deleteNewsById(id) {
  const res = await axiosClient
    .delete(`/deletenews/${id}`);
  return res;
}

//login
export async function login(data) {
  const res = await axiosClient
    .post('/signin', JSON.stringify(data));
    return res;
}

export async function userlogin(data) {
  const res = await axiosClient.post('/signinuser', JSON.stringify(data));
  return res;
}


export async function usersignup(data) {
  const res = await axiosClient.post('/signupuser', JSON.stringify(data))
  .then((result) => {
    swal({
      text: "Registration successful",
      icon: "success",
      button: "OK",
      timer: 5000,
    })
  })
  .catch((error) => {
    swal({
      text: "User already exists",
      icon: "error",
      button: "OK",
      timer: 1500,
    });
  });
  return res
}

export async function userlogout(data) {
  const res = await axiosClient.post('/signoutuser', JSON.stringify(data));
  return res
}

export async function getUsername(username) {
  const res = await axiosClient.post(`/username?username=${username}`);
  return res.data.data.users;
}

export async function getUserbyName(username) {
  const res = await axiosClient.post('/getuser', JSON.stringify(username));
  return res;
}

// Add news
export async function addChat(data) {
  const res = await axiosClient.post(`/newchat`, JSON.stringify(data));
  return res;
}

// GET all news
export async function getAllChat() {
  const res = await axiosClient.post("/allchat");
  return res;
}

export async function getUserById(id) {
  const res = await axiosClient.post(`/users/${id}`);
  return res;
}