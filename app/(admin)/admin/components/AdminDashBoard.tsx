"use client";
import React, { useState } from "react";
import { Card, Image } from "@nextui-org/react";
import { Trash2 } from "lucide-react";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { deleteNewsById } from "./AdminApi";

import { CategoryType, NewsSchemaType } from "@/types";

const AdminDashBoard: React.FC<{
  news: { [key in CategoryType]: NewsSchemaType[] };
}> = ({ news }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{
    _id: string;
    category: CategoryType;
  } | null>(null);
  const [message, setMessage] = useState("");

  if (!news) return <div>Loading...</div>;

  const handleConfirmDelete = (_id: string, category: CategoryType) => {
    setDeleteTarget({ _id, category });
    onOpen(); // Open the confirmation modal
  };

  const handleNewsDelete = async () => {
    if (!deleteTarget) return;
    setLoading(true);
    setMessage("");
    try {
      const response = await deleteNewsById(deleteTarget);

      if (response?.error) {
        setMessage("Error: Unable to delete news.");
      } else {
        setMessage("News deleted successfully.");
      }
    } catch (error) {
      setMessage(
        "An error occurred during deletion." + (error as Error).message,
      );
    } finally {
      setLoading(false);
      onClose(); // Close the modal after the process
      setDeleteTarget(null); // Reset delete target
    }
  };

  return (
    <div className="container mx-auto p-6 ">
      {message && <div className="alert alert-info">{message}</div>}{" "}
      {/* Message display */}
      {news &&
        Object.entries(news).map(([category, newsItem]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold  mb-4 capitalize">
              {category} News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {newsItem.map((item) => (
                <Card
                  key={item._id}
                  className="flex items-center gap-3 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex gap-2 items-center justify-between w-full">
                    <Image
                      removeWrapper
                      alt={item.slug}
                      className="h-10 w-10 rounded-full object-cover"
                      radius="full"
                      src={item.imageUrl}
                    />
                    <div className="flex gap-2 items-center">
                      <Button
                        isIconOnly
                        color="danger"
                        type="button"
                        onClick={() =>
                          handleConfirmDelete(item._id, item.category)
                        } // Open confirmation modal
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                </Card>
              ))}
            </div>
          </div>
        ))}
      {/* Confirmation Modal */}
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Confirm Deletion
            </ModalHeader>
            <ModalBody>
              <p>Are you sure you want to delete this news item?</p>
              {loading && <p>Deleting, please wait...</p>}{" "}
              {/* Show loading state */}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                disabled={loading}
                variant="light"
                onPress={onClose}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                disabled={loading}
                onPress={handleNewsDelete}
              >
                {loading ? "Deleting..." : "Delete"} {/* Loading state */}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AdminDashBoard;
