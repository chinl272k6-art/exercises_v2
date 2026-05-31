import { useState } from "react";

function DeleteItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Minh" },
    { id: 2, name: "An" },
    { id: 3, name: "Linh" }
  ]);

  function handleDelete(id) {
    setItems(
      items.filter((item) => item.id !== id)
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sinh viên</h2>

      {items.length === 0 ? (
        <p>Danh sách trống</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px"
            }}
          >
            <span>{item.name}</span>

            <button
              onClick={() => handleDelete(item.id)}
            >
              Xóa
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DeleteItem;