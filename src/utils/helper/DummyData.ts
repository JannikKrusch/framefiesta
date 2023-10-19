import { BlogPost, MotionPicture } from "..";

export function DummyBlogPosts(amount: number): BlogPost[] {
  const blogPosts: BlogPost[] = [];

  for (let i = 1; i <= amount; i++) {
    console.warn("in loop");
    const blogPost = new BlogPost();
    const motionPicture = new MotionPicture();

    motionPicture.actors = ["actor 1", "actor 2", "actor 3", "actor 4"];
    motionPicture.director = `director ${i}`;
    motionPicture.genres = [
      "Horror",
      "Comedy",
      "Science-Fiction",
      "Thriller",
      "Drama",
      "Romance",
    ];
    motionPicture.image =
      "https://de.web.img2.acsta.net/r_1280_720/newsv7/20/04/28/09/51/1944619.jpg";
    motionPicture.initialRelease = 1994;
    motionPicture.rating = 8.9;
    motionPicture.ageRating = 18;
    motionPicture.budget = 10000000;
    motionPicture.title = `Pulp Fiction ${i}`;

    blogPost.id = i;
    blogPost.relatedMotionPicture = motionPicture;
    blogPost.description =
      "Ullamco fugiat irure officia adipisicing dolore consectetur cupidatat reprehenderit adipisicing dolor et ex. Reprehenderit fugiat do aliquip pariatur. Nostrud esse anim exercitation in anim ex.";

    blogPosts.push(blogPost);
  }
  return blogPosts;
}
