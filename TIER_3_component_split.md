## Bài 3.1 — Trả lời câu hỏi
Tại sao phải chia Component?

Vì:

Code ngắn gọn hơn.
Dễ tìm lỗi.
Dễ tái sử dụng.
Dễ làm việc nhóm.

Ví dụ:

❌ Không chia

App.jsx
500 dòng

✅ Có chia

App.jsx
Header.jsx
Footer.jsx
ProductCard.jsx

Mỗi file chỉ 20-30 dòng.

## Bài 3.3
Props là gì?

Props là dữ liệu truyền từ component cha xuống component con.

Component cha
<Greeting
    name="Chi"
    age={20}
/>
Component con
function Greeting({ name, age }) {
    return (
        <>
            <h2>{name}</h2>
            <p>{age}</p>
        </>
    );
}
Luồng hoạt động
App.jsx
    ↓
Truyền props
    ↓
Greeting.jsx
    ↓
Hiển thị dữ liệu