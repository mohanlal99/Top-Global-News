import AdminDashBoard from "./components/AdminDashBoard";

import ProfilePage from "@/app/(auth)/profile/components/ProfilePage";
import Loader from "@/components/Loader";
import { fetchAllNews } from "@/lib/fetchNews";

export default async function Admin() {
  const news = await fetchAllNews();

  if (!news || Object.keys(news).length === 0) return <Loader />;

  return (
    <>
      <ProfilePage />
      <AdminDashBoard news={news} />
    </>
  );
}
