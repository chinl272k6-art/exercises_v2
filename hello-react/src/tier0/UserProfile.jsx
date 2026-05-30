import hiImage from "./Hi.jpg";
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>

            <img
                src={hiImage}
                alt="Ảnh đại diện của Nguyễn Linh Chi"
                width="200"
                height="200"
            />

            <table>
                <tbody>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Chi</td>
                    </tr>

                    <tr>
                        <td>Email:</td>
                        <td>chi@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;