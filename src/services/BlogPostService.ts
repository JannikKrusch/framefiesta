import { DataService } from ".";
import { BlogEndPoints, BlogPost, Controllers } from "../utils";

export class BlogPostService extends DataService {
  constructor(controller: Controllers) {
    super(controller);
  }

  public async getBlogPostsAsync(): Promise<BlogPost[] | null> {
    const url = this.urlService.buildUrl(BlogEndPoints.GetBlogPosts);

    let blogPosts = await this.callEndpointGenericAsync<BlogPost[]>(url);

    if (blogPosts != null) {
      const tempBlogPosts = [...blogPosts];
      tempBlogPosts.forEach((blogPost) => {
        blogPost.comments.forEach((comment) => {
          comment.date = new Date(comment.date);
        });
      });
      blogPosts = tempBlogPosts;
    }

    return blogPosts;
  }
}
