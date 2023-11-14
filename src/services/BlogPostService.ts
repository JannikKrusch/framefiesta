import { BlogEndPoints, BlogPost, Controllers } from "../utils";
import { DataService } from "./DataService";

export class BlogPostService extends DataService {
  constructor(controller: Controllers) {
    super(controller);
  }

  public async getBlogPostsAsync(): Promise<BlogPost[] | null> {
    const url = BlogEndPoints.GetBlogPosts;

    return await this.callEndpointGenericAsync<BlogPost[]>(url);
  }
}
