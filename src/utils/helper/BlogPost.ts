import { BlogPost } from "../models/BlogPost";
import { Comment } from "../models/Comment";

export function convertSelectedIdToBlogPost(
  selectedID: string,
  blogPosts: BlogPost[]
): BlogPost | undefined {
  const post = blogPosts.find((blogPost) => blogPost.id === selectedID);
  return post;
}
