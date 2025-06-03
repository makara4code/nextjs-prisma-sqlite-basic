import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Blog Management System</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A simple CRUD application built with Next.js 15, Prisma, and
            shadcn/ui
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                View Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Browse and manage all your blog posts
              </p>
              <Button asChild>
                <Link href="/posts">View All Posts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create Post
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Write and publish a new blog post
              </p>
              <Button asChild>
                <Link href="/posts/new">Create New Post</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Create</h3>
              <p className="text-muted-foreground">Add new blog posts</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Read</h3>
              <p className="text-muted-foreground">View all posts</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Update</h3>
              <p className="text-muted-foreground">Edit existing posts</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Delete</h3>
              <p className="text-muted-foreground">Remove posts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
