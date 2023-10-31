import { BlogPost, MotionPicture } from "..";
import { Comment } from "../models/Comment";

export function DummyBlogPosts(amount: number): BlogPost[] {
  const blogPosts: BlogPost[] = [];

  for (let i = 1; i <= amount; i++) {
    const blogPost = new BlogPost();
    const motionPicture = new MotionPicture();
    let actors = [];
    for (let actor = 1; actor < 5; actor++) {
      actors.push(`actor${i}${actor}`);
    }
    motionPicture.actors = actors;
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

    blogPost.id = i.toString();
    blogPost.relatedMotionPicture = motionPicture;
    blogPost.review =
      "Excepteur cupidatat duis cupidatat exercitation cupidatat Lorem adipisicing pariatur minim enim in. Eu occaecat elit aliquip labore excepteur ea eiusmod nisi deserunt duis in. Proident sit ut dolor cupidatat duis pariatur ex. Quis mollit ex qui labore voluptate amet anim culpa sunt ut laborum culpa culpa ea. Voluptate minim magna mollit amet ad est aute. Do aute et cupidatat do incididunt.d" +
      "Consequat fugiat et irure proident. Cupidatat voluptate officia ad voluptate consequat non reprehenderit aliquip veniam magna consequat ullamco. Commodo pariatur nostrud in fugiat exercitation ipsum consequat duis ea ex magna anim voluptate veniam. Commodo pariatur enim eiusmod in est id. Eu minim reprehenderit qui do officia minim sunt." +
      "In occaecat velit sint ea sint ex officia reprehenderit. Elit enim et officia esse excepteur reprehenderit ipsum sit. Ut adipisicing laboris nostrud voluptate mollit deserunt in irure ullamco labore et sunt aliqua labore. Culpa ipsum cupidatat et do mollit dolor ullamco et." +
      "Magna adipisicing duis cupidatat consequat. Aute commodo occaecat sint deserunt laborum et dolore laboris anim aliqua tempor dolore. Anim commodo magna pariatur minim in nostrud cillum cillum duis." +
      "Commodo pariatur velit anim pariatur labore laborum nostrud. Ad irure amet occaecat laboris ad laboris do et. Incididunt ullamco quis minim in esse laborum labore.";
    blogPost.description =
      "Ullamco fugiat irure officia adipisicing dolore consectetur cupidatat reprehenderit adipisicing dolor et ex. Reprehenderit fugiat do aliquip pariatur. Nostrud esse anim exercitation in anim ex.";

    const min = 1;
    const max = blogPost.review.length;
    for (let i = 0; i < 20; i++) {
      const comment = new Comment();
      comment.date = new Date();
      comment.date.setDate(Math.floor(Math.random() * (30 - 1 + 1)) + 1);
      comment.date.setMonth(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
      comment.userName = "Sussy Baka" + i;
      comment.text = blogPost.review.substring(
        Math.floor(Math.random() * (max - min + 1)) + min,
        Math.floor(Math.random() * (max - min + 1)) + min
      );

      blogPost.comments.push(comment);
    }

    blogPosts.push(blogPost);
  }
  return blogPosts;
}
