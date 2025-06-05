import React, { useState } from "react";
import {
  Camera,
  Edit3,
  Settings,
  MessageCircle,
  Users,
  Bell,
  Lock,
  Palette,
  Moon,
  Sun,
  ChevronRight,
  Save,
  X,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Chen",
    username: "@alexchen",
    bio: "Coffee enthusiast ☕ | Digital nomad 🌍 | Always up for a good conversation",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    status: "online",
    joinDate: "March 2023",
  });

  const [tempData, setTempData] = useState(profileData);

  const handleEditToggle = () => {
    if (isEditing) {
      setTempData(profileData);
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const menuItems = [
    { icon: MessageCircle, label: "Chat Settings", color: "text-blue-500" },
    { icon: Bell, label: "Notifications", color: "text-green-500" },
    { icon: Lock, label: "Privacy & Security", color: "text-red-500" },
    { icon: Palette, label: "Appearance", color: "text-purple-500" },
    { icon: Users, label: "Blocked Users", color: "text-orange-500" },
    { icon: Settings, label: "General Settings", color: "text-gray-500" },
  ];

  const stats = [
    {
      label: "Messages",
      value: "12.4K",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      label: "Chats",
      value: "156",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      label: "Groups",
      value: "23",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>
        <div className="relative px-6 py-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <img
                  src={profileData.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-400 to-green-600 w-6 h-6 rounded-full border-3 border-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <button className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Camera className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={tempData.name}
                      onChange={(e) =>
                        setTempData({ ...tempData, name: e.target.value })
                      }
                      className={`text-2xl font-bold bg-transparent border-b-2 border-indigo-500 focus:outline-none ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    />
                    <input
                      type="text"
                      value={tempData.username}
                      onChange={(e) =>
                        setTempData({ ...tempData, username: e.target.value })
                      }
                      className={`text-lg opacity-70 bg-transparent border-b border-gray-300 focus:outline-none ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    />
                    <textarea
                      value={tempData.bio}
                      onChange={(e) =>
                        setTempData({ ...tempData, bio: e.target.value })
                      }
                      className={`w-full bg-transparent border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                      rows="2"
                    />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {profileData.name}
                    </h1>
                    <p
                      className={`text-lg ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      } mb-2`}
                    >
                      {profileData.username}
                    </p>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-700"
                      } max-w-md`}
                    >
                      {profileData.bio}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {isEditing ? (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleEditToggle}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} rounded-2xl p-4 text-white transform hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Settings & Preferences</h2>
          <div className="grid gap-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group hover:shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                    : "bg-white hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-lg ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Account Info */}
          <div
            className={`mt-8 p-6 rounded-xl ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            } border`}
          >
            <h3 className="text-lg font-semibold mb-4">Account Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                >
                  Member since
                </span>
                <span className="font-medium">{profileData.joinDate}</span>
              </div>
              <div className="flex justify-between">
                <span
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                >
                  Status
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium capitalize">
                    {profileData.status}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
