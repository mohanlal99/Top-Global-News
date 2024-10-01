"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { fetchUserDetails } from "@/lib/action/UserAction";

type ProfileUserType = {
  username: string;
  admin: boolean;
  email: string;
  role: string;
};

const NavbarProfile: React.FC = () => {
  const profileUser: ProfileUserType = {
    username: "",
    admin: false,
    email: "",
    role: "",
  };

  const router = useRouter();
  const [user, setUser] = useState<ProfileUserType>(profileUser);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    const token = Cookies.get("authToken");

    if (!token) {
      return null;
    }
    const res = await fetchUserDetails({ token });

    if (res.success) {
      setUser(res.user);
    } else {
      router.push("/sign-in");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    router.push("/sign-in");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="">
        <Dropdown>
          <DropdownTrigger className="cursor-pointer p-2">
            <Avatar
              alt="User Avatar"
              size="sm"
              src="https://cdn-icons-png.flaticon.com/512/8188/8188394.png"
            />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="signin" onClick={() => router.push("/sign-in")}>
              Sign-In
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <Avatar alt="User Avatar" size="sm" />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User Actions"
        onAction={(key) => key === "profile" && router.push("/profile")}
      >
        <DropdownItem key="info">
          <div className="flex flex-col">
            <span className="font-bold">{user?.username}</span>
            <span className="text-xs text-gray-600">{user?.email}</span>
            <span className="text-xs text-gray-600">Role: {user?.role}</span>
          </div>
        </DropdownItem>
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="settings">Settings</DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          onClick={handleLogout}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarProfile;
