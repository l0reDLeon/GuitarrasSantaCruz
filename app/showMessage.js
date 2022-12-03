//TOASTIFY
export function showMessage(message, type="success"){
    Toastify({
        text: message,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === "success" ? "linear-gradient(to right, #40f2a2, #00c49a)" : "linear-gradient(to right, #ee6055, #d90429)"
        },
        onClick: function () {}, // Callback after click
      }).showToast();
}
