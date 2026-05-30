## Bài 5.1 — Click Events
 1. Đổi màu ngẫu nhiên
const randomColor = () => {
    const colors = ["red", "blue", "green", "orange", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
};

function handleClick() {
    setColor(randomColor());
}
<div style={{ backgroundColor: color }}>
🔢 2. Đếm click từng nút
const [btn1, setBtn1] = useState(0);
const [btn2, setBtn2] = useState(0);
<button onClick={() => setBtn1(btn1 + 1)}>Btn 1 ({btn1})</button>
<button onClick={() => setBtn2(btn2 + 1)}>Btn 2 ({btn2})</button>
❤️ 3. Like toggle
const [liked, setLiked] = useState(false);
<button onClick={() => setLiked(!liked)}>
    {liked ? "❤️" : "🤍"}
</button>

## Bài 5.2 — Input Events
📧 Validate email
const isValid = text.includes("@");
<p>{isValid ? "Email hợp lệ" : "Email sai"}</p>
📝 Đếm từ
const wordCount = text.trim().split(" ").filter(Boolean).length;
<p>Số từ: {wordCount}</p>
👁️ Password ẩn/hiện
const [show, setShow] = useState(false);
<input type={show ? "text" : "password"} />

<button onClick={() => setShow(!show)}>
    {show ? "Ẩn" : "Hiện"}
</button>

##  Bài 5.3 — Keyboard
 Di chuyển box bằng phím
const [x, setX] = useState(0);
const [y, setY] = useState(0);
function handleKeyDown(e) {
    if (e.key === "ArrowRight") setX(x + 10);
    if (e.key === "ArrowLeft") setX(x - 10);
    if (e.key === "ArrowDown") setY(y + 10);
    if (e.key === "ArrowUp") setY(y - 10);
}
<div style={{ transform: `translate(${x}px, ${y}px)` }}>
💡 Ctrl + D đổi màu nền
useEffect(() => {
    function handle(e) {
        if (e.ctrlKey && e.key === "d") {
            setDark(!dark);
        }
    }

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
}, [dark]);
## Bài 5.4 — Form Events
📧 Validate email
if (!formData.email.includes("@")) {
    alert("Email không hợp lệ");
    return;
}
🔐 Xác nhận mật khẩu
const [confirm, setConfirm] = useState("");
if (formData.password !== confirm) {
    alert("Mật khẩu không khớp");
    return;
}
⚡ Lỗi realtime
const emailError =
    formData.email && !formData.email.includes("@");
{emailError && <p style={{ color: "red" }}>Email sai</p>}