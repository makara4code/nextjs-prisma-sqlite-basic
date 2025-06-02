import CreateNewPostButton from "@/components/create-new-post-button";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const posts = await prisma.post.findMany();

  const handleCreateNewPost = async () => {
    "use server";

    await prisma.post.create({
      data: {
        title: "New Post",
        content: "This is new post",
        published: false,
      },
    });

    revalidatePath("/");
  };

  return (
    <div>
      {JSON.stringify(posts)}
      <CreateNewPostButton handleCreateNewPost={handleCreateNewPost} />
    </div>
  );
}
