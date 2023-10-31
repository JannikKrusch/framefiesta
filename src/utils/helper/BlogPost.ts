import { BlogPost } from "../models/BlogPost";

export function convertSelectedIdToBlogPost(
  selectedID: string,
  blogPosts: BlogPost[]
): BlogPost | undefined {
  const post = blogPosts.find((blogPost) => blogPost.id === selectedID);
  return post;
}
