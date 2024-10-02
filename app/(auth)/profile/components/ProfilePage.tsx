"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { LoaderPinwheel } from "lucide-react";

import { fetchUserDetails } from "@/lib/action/UserAction";

type ProfileUserType = {
  username: string;
  admin: boolean;
  email: string;
  role: string;
};

const ProfilePage: React.FC = () => {
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
      router.push("/sign-in");

      return;
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
      <div className="min-h-screen flex items-center justify-center w-full ">
        <LoaderPinwheel />
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto p-6 ">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        User Profile
      </h1>
      <Card className="shadow-xl rounded-lg ">
        <CardBody className="p-6">
          <div className="flex items-center sm:flex-row flex-col space-x-6 mb-6">
            <Image
              isBlurred
              isZoomed
              alt="User Avatar"
              className="w-24 h-24 border-2 border-blue-500"
              radius="full"
              src="https://i.pinimg.com/736x/34/b7/b2/34b7b24a81b35eb6c3f6421e8a20ba9a.jpg"
            />
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold ">{user?.username}</h2>
              <p className="text-sm text-gray-600">Email: {user?.email}</p>
              <p className="text-sm text-gray-600">Role: {user?.role}</p>
              {user?.admin && (
                <p className="text-sm text-gray-600">
                  Admin: {user?.admin ? "Yes" : "No"}
                </p>
              )}
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex justify-end p-4 ">
          <Button color="danger" onClick={handleLogout}>
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfilePage;
