let encode = document.getElementById("encode");
let decode = document.getElementById("decode");
let encode_h1 = document.getElementById("encode_value");
let decode_h1 = document.getElementById("decode_value");
let copy_btn = document.getElementById("copy");
let copy_btn2 = document.getElementById("copy2");
let copied = document.getElementById("copied");

function enCoding() {
    let encode_value = encode.value;
    let encode_process = btoa(encode_value);
    let encode_final_value = encode_h1.innerText = encode_process;
    if (encode_final_value === "") {
        encode_h1.innerText = "Encode";
    }
    copy(encode_final_value);
}
encode.addEventListener("input", enCoding);

function deCoding() {
    let decode_value = decode.value;
    let decode_process = atob(decode_value);
    let decode_final_value = decode_h1.innerText = decode_process;
    if (decode_final_value === "") {
        decode_h1.innerText = "Decode";
    }
    copy(decode_final_value);
}
decode.addEventListener("input", deCoding);

function copy(encode_final_value, decode_final_value) {
    navigator.clipboard.writeText(encode_final_value, decode_final_value);
}

function notification() {
    copied.innerText = "Copied";
    copied.style.transform = "translateX(20px)";
    copied.style.transitionDuration = "0.5s";
    setTimeout(removeNotification, 2000)
}

copy_btn.addEventListener("click", function () {
    notification();
});
copy_btn2.addEventListener("click", function () {
    notification();
});



function removeNotification() {
    copied.style.transform = "translateX(180px)";
    copied.style.transitionDuration = "0.5s";
}

