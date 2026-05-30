function UserCard({ name, email, avatar }) {
    return (
        <div>
            <img
                src={avatar}
                alt={name}
                width="100"
            />

            <h3>{name}</h3>

            <p>{email}</p>
        </div>
    );
}

export default UserCard;