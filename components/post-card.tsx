import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="border-b border-[--border] py-6 first:border-t">
        <div className="flex items-baseline justify-between gap-4 mb-1">
          <h2 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h2>
          <span className="text-xs text-[--muted] shrink-0">{post.readingTime}</span>
        </div>
        {post.excerpt && <p className="text-sm text-[--muted] mb-2">{post.excerpt}</p>}
        <time className="text-xs text-[--muted]">{post.date}</time>
      </article>
    </Link>
  );
}
