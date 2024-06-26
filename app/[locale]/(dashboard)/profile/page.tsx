import AvatarUploadPage from "../../../../components/profile/AvatarUploadPage";
import { getSession } from "@auth0/nextjs-auth0";
import { getUserImage } from "../../../api/api";
import ProfileInfoWithEmail from "../../../../components/profile/profileInfoWithEmail";
import ProfileInfo from "../../../../components/profile/profileInfo";
import { Metadata } from "next";
import { GetSessionUser } from "@/typings";

export const metadata: Metadata = {
  title: { absolute: "Profile Details" },
  description: "See All information about User",
};

export default async function Profile() {
  const userImage = await getUserImage();
  const session = await getSession();
  const user = session?.user as GetSessionUser | undefined;
  const lastFiveCharacters = user?.sub?.slice(-5) || "";

  if (user) {
    return (
      <main className="mb-16 mt-8 relative">
        <div className="flex items-center justify-center py-5">
          <h1 className="inline-block border-b-2 pb-2 text-blue-500 font-bold dark:text-white text-3xl">
            Profile
          </h1>
        </div>
        <div className="bg-white flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-7 justify-center items-center h-full dark:bg-black">
          <div className="flex flex-col gap-3 justify-center items-center">
            <AvatarUploadPage userImage={userImage} />
          </div>
          <div className="flex border justify-center lg:border-none lg:shadow-none lg:h-64 lg:items-center border-blue-500 p-2 sm:p-4 xs:p-2 rounded-lg xs:gap-3 shadow-md bg-white dark:bg-[#121212]">
            {user.email_verified ? (
              <ProfileInfoWithEmail
                user={user}
                lastFiveCharacters={lastFiveCharacters}
              />
            ) : (
              <ProfileInfo
                user={user}
                lastFiveCharacters={lastFiveCharacters}
              />
            )}
          </div>
        </div>
      </main>
    );
  }

  return <h1 className="text-3xl">No Profile Info</h1>;
}
