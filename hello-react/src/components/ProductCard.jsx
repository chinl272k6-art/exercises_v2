function ProductCard({ name, price, image }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "10px",
                margin: "10px"
            }}
        >
            <img
                src={image}
                alt={name}
                width="200"
            />

            <h3>{name}</h3>

            <p>{price}đ</p>

            <button>
                Thêm vào giỏ
            </button>
        </div>
    );
}

export default ProductCard;