"use client";
import { Button } from "@nextui-org/button";
import { Image, Input, Select, SelectItem } from "@nextui-org/react";
import { Upload } from "lucide-react";
import React, { ChangeEvent, useState } from "react";

import { categories, NewsData } from "./newsActions";
import { saveImageAWS, saveNewsData } from "./newsFormHandlers";
import RichTextEditor from "./RichTextEditor"; // Import the RichTextEditor

import { CategoryType } from "@/types";

const initialNewsData = {
  title: "",
  content: "",
  category: "" as CategoryType,
  keywords: "",
  imageUrl: "",
};

const SaveNewsPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imgLoading, setImgLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [newsData, setNewsData] = useState<NewsData>(initialNewsData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (
        !newsData.imageUrl ||
        !newsData.title ||
        !newsData.category ||
        !newsData.keywords ||
        !newsData.content
      ) {
        setMessage("Please fill in all required information.");

        return;
      }
      const res = await saveNewsData(newsData);

      setMessage(res?.message);
    } catch (error) {
      setMessage(`Something went wrong. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewsData({ ...newsData, [name]: value });
  };

  const handleContentChange = (value: string) => {
    setNewsData({ ...newsData, content: value });
  };

  const handleCategoryChange = (keys: {
    anchorKey?: string;
    currentKey?: string;
  }) => {
    const selectedKey = keys.currentKey as CategoryType;

    setNewsData({ ...newsData, category: selectedKey });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      if (selectedImage) {
        setImgLoading(true);
        const res = await saveImageAWS(selectedImage);

        if (res?.error) {
          setMessage(res?.error);

          return;
        }
        setNewsData({ ...newsData, imageUrl: res?.response?.Location });
        setMessage(res?.message || "Image Upload Success");
      } else {
        setMessage("No image selected");
      }
    } catch (error) {
      setMessage(`Something went wrong: ${error}`);
    } finally {
      setImgLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center w-full max-w-3xl mx-auto p-2">
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <Input
            required
            label="News title"
            maxLength={200}
            name="title"
            placeholder="Enter News Title"
            value={newsData.title}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-3 mt-3">
          <Input
            required
            label="Keywords"
            name="keywords"
            placeholder="Enter News Keywords , news, India news, global news, etc."
            value={newsData.keywords}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="py-4 flex gap-3 justify-center items-center">
            <Input
              aria-label="Select an image"
              type="file"
              onChange={handleFileChange}
            />
            <Button
              className="flex items-center justify-center gap-2"
              color="secondary"
              isDisabled={!selectedImage || imgLoading}
              isLoading={imgLoading}
              variant="shadow"
              onPress={handleUpload}
            >
              Upload
              <Upload />
            </Button>
          </div>
          {newsData.imageUrl && (
            <div className="px-2">
              <Image src={newsData.imageUrl} width={300} />
            </div>
          )}
        </div>

        {/* Replace Textarea with RichTextEditor */}
        <RichTextEditor
          initialContent={newsData.content}
          onChange={handleContentChange}
        />

        <div className="pb-4 mt-4">
          <Select
            className="max-w-xs"
            label="Select Category"
            placeholder="Choose a category"
            selectedKeys={new Set([newsData.category])}
            onSelectionChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <SelectItem key={category.key} value={category.key}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        {message && (
          <div
            className={`text-center ${loading ? "text-warning" : "text-success"} font-bold`}
          >
            {message}
          </div>
        )}

        <Button isDisabled={loading} isLoading={loading} type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default SaveNewsPage;
