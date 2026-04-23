import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = generatePageMetadata({
  title: "Writing",
  description: "Essays and notes.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-2">Writing</h1>
      <p className="text-[--muted] mb-10">Essays and notes.</p>
      {posts.length === 0 ? (
        <p className="text-[--muted]">No posts yet.</p>
      ) : (
        posts.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </div>
  );
}
