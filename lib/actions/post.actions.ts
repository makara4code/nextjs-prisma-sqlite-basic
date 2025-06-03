"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { CreatePostData, UpdatePostData } from "../types/post";

// Create a new post
export async function createPost(data: CreatePostData) {
  try {
    const post = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        published: data.published || false,
      },
    });

    revalidatePath("/posts");
    return { success: true, post };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, error: "Failed to create post" };
  }
}

// Get all posts
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

// Get a single post by ID
export async function getPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Failed to fetch post");
  }
}

// Update a post
export async function updatePost(id: string, data: UpdatePostData) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data,
    });

    revalidatePath("/posts");
    revalidatePath(`/posts/${id}`);
    return { success: true, post };
  } catch (error) {
    console.error("Error updating post:", error);
    return { success: false, error: "Failed to update post" };
  }
}

// Delete a post
export async function deletePost(id: string) {
  try {
    await prisma.post.delete({
      where: { id },
    });

    revalidatePath("/posts");
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, error: "Failed to delete post" };
  }
}

// Toggle post published status
export async function togglePublished(id: string, published: boolean) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data: { published },
    });

    revalidatePath("/posts");
    return { success: true, post };
  } catch (error) {
    console.error("Error toggling post status:", error);
    return { success: false, error: "Failed to update post status" };
  }
}
