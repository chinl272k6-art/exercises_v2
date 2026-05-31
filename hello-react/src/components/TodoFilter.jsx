function TodoFilter({
  filter,
  setFilter
}) {
  const filters = [
    {
      key: "all",
      label: "Tất cả"
    },
    {
      key: "active",
      label: "Chưa xong"
    },
    {
      key: "completed",
      label: "Hoàn thành"
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "15px"
      }}
    >
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() =>
            setFilter(f.key)
          }
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;