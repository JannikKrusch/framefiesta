import { DataService } from ".";
import { BlogEndPoints, BlogPost, Controllers } from "../utils";

export class BlogPostService extends DataService {
  constructor(controller: Controllers) {
    super(controller);
  }

  public async getBlogPostsAsync(): Promise<BlogPost[] | null> {
    const url = this.urlService.buildUrl(BlogEndPoints.GetBlogPosts);

    return await this.callEndpointGenericAsync<BlogPost[]>(url);
  }
}
