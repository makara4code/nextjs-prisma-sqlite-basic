import PostForm from "@/components/post/post-form";

export default function NewPostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PostForm mode="create" />
    </div>
  );
}
