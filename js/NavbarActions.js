//const Avatar = document.getElementById('Avatar');

//Avatar.onclick = function (event) {
//    location.href = "/Profile.html";
//}

//function RefreshAvatar() {
//    const token = localStorage.getItem("token");
//    axios.get(`${window.API_BASE_URL}/api/Account/profile`, {
//        headers: {
//            'accept': '*/*',
//            'Authorization': `Bearer ${token}`
//        }
//    })
//        .then(resp => {
//            const { data } = resp;
//            const { id, email, firstName, secondName, phone, photo } = data;
//            Avatar.src = `${window.API_BASE_URL}/images/${photo}`;
//        })
//        .catch(err => {
//            console.log("Error", err);
//        });
//}

//RefreshAvatar();