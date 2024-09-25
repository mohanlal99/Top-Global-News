import { CategoryType } from "@/types";

export const deleteNewsById = async ({
  _id,
  category,
}: {
  _id: string;
  category: CategoryType;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/delete-news`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
          category,
        }),
      },
    );

    if (!response.ok) {
      const { error } = await response.json();

      return error;
    }

    const res = await response.json();

    return res;
  } catch (error) {
    return { error: (error as Error).message };
  }
};
