import { notFound } from "next/navigation";
import { getPost } from "@/lib/actions/post.actions";
import PostForm from "@/components/post/post-form";

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PostForm post={post} mode="edit" />
    </div>
  );
}
