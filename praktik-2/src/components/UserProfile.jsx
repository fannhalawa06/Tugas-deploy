import React from "react";

const UserProfile = ({ user, isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <div className="alert">
        <p>Silahkan login terlebih dahulu</p>
      </div>
    );
  }

  return (
    <>
      <div className="profile-header">
        <h2>Profile Pengguna</h2>
        <img
          src={user.avatar || "/default-avatar.png"}
          alt="Avatar"
          className="avatar"
        />
      </div>

      <div className="profile-details">
        <p>
          <strong>Nama:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Bergabung Sejak:</strong>{" "}
          {new Date(user.joinDate).toLocaleDateString()}
        </p>
      </div>
    </>
  );
};

export default UserProfile;
