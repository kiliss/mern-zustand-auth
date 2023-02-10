import React from "react";
import { useAuthStore } from "../store/auth";
import { json, useNavigate } from "react-router-dom";


function ProfilePage() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  return (
    <div>
      ProfilePage
      <div>{JSON.stringify(profile)}</div>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
