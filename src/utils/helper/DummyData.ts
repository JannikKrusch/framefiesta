import { BlogPost, MotionPicture } from "..";

export function DummyBlogPosts(amount: number): BlogPost[] {
  const blogPosts: BlogPost[] = [];

  for (let i = 1; i <= amount; i++) {
    if (i <= 0) {
      return [];
    }
    console.warn("in loop");
    const blogPost = new BlogPost();
    const motionPicture = new MotionPicture();

    motionPicture.actors = ["actor 1", "actor 2", "actor 3", "actor 4"];
    motionPicture.comments = [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
      "ubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem",
      "et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
    ];
    motionPicture.director = `director ${i}`;
    motionPicture.genre = ["genre 1", "genre 2", "genre 3"];
    motionPicture.image =
      "https://www.imdb.com/title/tt0110912/mediaviewer/rm4065424384/?ref_=tt_ov_i";
    motionPicture.initialRelease = 1994;
    motionPicture.rating = 8.9;
    motionPicture.title = `Pulp Fiction ${i}`;

    blogPost.id = i;
    blogPost.motionPicture = motionPicture;

    blogPosts.push(blogPost);
  }
  return blogPosts;
}
