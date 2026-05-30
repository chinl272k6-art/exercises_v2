1. Tăng 5
setCount(count + 5);
📊 2. Số dương / âm / 0
<p>
    {count > 0
        ? "Số dương"
        : count < 0
        ? "Số âm"
        : "Bằng 0"}
</p>
🎨 3. Đổi màu theo count
<p
    style={{
        color:
            count > 0
                ? "green"
                : count < 0
                ? "red"
                : "black"
    }}
>
    {count}
</p>
⌨️ 4. Đếm ký tự (StringState)
<p>{name.length}/100</p>
📧 5. Email hợp lệ
<p>
    {email.includes("@")
        ? "Email hợp lệ"
        : "Email không hợp lệ"}
</p>
🔐 6. Ẩn/hiện mật khẩu
const [show, setShow] = useState(false);

<input type={show ? "text" : "password"} />

<button onClick={() => setShow(!show)}>
    {show ? "Ẩn" : "Hiện"}
</button>
💡 7. Toggle pattern (QUAN TRỌNG)
setIsOn(!isOn);

→ nghĩa là đảo trạng thái

🧾 8. Validate tuổi (MultipleStates)
if (age <= 0 || age >= 100) {
    alert("Tuổi không hợp lệ");
    return;
}
👋 9. Xin chào khi nhập xong
{name && <h3>Xin chào {name}!</h3>}