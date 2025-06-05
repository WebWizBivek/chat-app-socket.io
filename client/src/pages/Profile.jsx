import React from "react";

export default function Profile() {
  const user = {
    name: "Bivek Singha",
    email: "bivek@example.com",
    phone: "+91 98765 43210",
    avatar: "https://i.pravatar.cc/150?img=10", // Change to user's actual avatar
  };

  return (
    <div className="min-h-screen bg-[#111b21] text-white flex justify-center items-center p-4">
      <div className="bg-[#202c33] p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-28 h-28 mx-auto rounded-full border-4 border-[#2a3942]"
        />
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        <p className="text-sm text-gray-400">{user.email}</p>
        <p className="text-sm text-gray-400">{user.phone}</p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-[#2a3942] px-4 py-2 rounded-lg hover:bg-[#3a4a52] transition">
            Edit Profile
          </button>
          <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
