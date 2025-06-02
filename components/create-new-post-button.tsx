"use client";

type CreateNewPostButtonProps = {
  handleCreateNewPost: () => void;
};

export default function CreateNewPostButton({
  handleCreateNewPost,
}: CreateNewPostButtonProps) {
  return <button onClick={handleCreateNewPost}>Create New Post</button>;
}
