const Avatar = document.getElementById('Avatar');

Avatar.onclick = function (event) {
    location.href = "/Profile.html";
}

function RefreshAvatar() {
    const token = localStorage.getItem("token");
    axios.get('https://goose.itstep.click/api/Account/profile', {
        headers: {
            'accept': '*/*',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(resp => {
            const { data } = resp;
            const { id, email, firstName, secondName, phone, photo } = data;
            Avatar.src = `https://goose.itstep.click/images/${photo}`;
        })
        .catch(err => {
            console.log("Error", err);
        });
}

RefreshAvatar();

const ContextMenu = document.getElementById("ProfileContextMenu");

function showModalMenu(e) {
    e.preventDefault();


/*    alert("hello!");*/
    ContextMenu.style.display = "block";
    //var x = e.clientX;
    //var y = e.clientY;
    //ContextMenu.style.left = x + "px";
    //ContextMenu.style.top = y + "px";
}

window.onclick = function (event) {
    if (event.target != ContextMenu) {
        ContextMenu.style.display = "none";
    }
}