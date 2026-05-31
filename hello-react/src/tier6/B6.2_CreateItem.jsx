import { useState } from "react";

function CreateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" }
  ]);

  const [newName, setNewName] = useState("");

  function handleAdd() {
    if (newName.trim() === "") {
      return;
    }

    const newItem = {
      id: Date.now(),
      name: newName
    };

    setItems([...items, newItem]);

    setNewName("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thêm môn học</h2>

      <input
        type="text"
        placeholder="Nhập tên môn học..."
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <button onClick={handleAdd}>
        Thêm
      </button>

      <h3>Danh sách môn học</h3>

      {items.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default CreateItem;