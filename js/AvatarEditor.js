const AvatarPreview = document.getElementById('AvatarPreview');
const uploadImage = document.getElementById('uploadImage');
const Rotate = document.getElementById('Rotate');
const CloseEditor = document.getElementById('Cancel');
const ConfirmEditor = document.getElementById('Confirm');

Rotate.onclick = function (e) {
    if (cropper) {
        cropper.rotate(60);
    }
}

uploadImage.onchange = (event) => {

    const { target } = event;
    const { files } = target;
    const file = files[0];
    if (file) {
        if (/^image\/\w+/.test(file.type)) {
            if (uploadedImageURL) {
                URL.revokeObjectURL(uploadedImageURL);
            }

            AvatarPreview.src = uploadedImageURL = URL.createObjectURL(file);

            if (cropper) {
                cropper.destroy();
            }

            cropper = new Cropper(AvatarPreview, {
                aspectRatio: 1,
                viewMode: 1
            });
        }
        else {
            window.alert('Please choose an image file.');
        }
    }
}

CloseEditor.onclick = function (event) {
    AvatarEditor.style.display = "none";
}

ConfirmEditor.onclick = function (e) {
    if (cropper) {
        var base64 = cropper.getCroppedCanvas().toDataURL();
        Avatar.src = base64;
    }
    AvatarEditor.style.display = "none";
}