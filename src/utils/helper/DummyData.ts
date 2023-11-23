import { BlogPost, Film, MotionPicture, Series } from "..";
import { Comment } from "../models/Comment";

export function DummyBlogPosts(amount: number): BlogPost[] {
  const blogPosts: BlogPost[] = [];

  for (let i = 1; i <= amount; i++) {
    const blogPost = new BlogPost();
    const motionPicture = new Series();
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
      i % 2 == 0
        ? "https://wallpapercave.com/wp/wp3390444.jpg"
        : i % 3 == 0
        ? "https://i.pinimg.com/originals/3b/a7/22/3ba72273aebd42a5f8ba882cf85b1232.jpg"
        : "https://images3.alphacoders.com/133/1337297.jpeg";
    motionPicture.initialRelease = 1994;
    motionPicture.ageRating = 18;
    motionPicture.budget = Math.floor(
      Math.random() * (200000000 - 100000) + 100000
    );
    motionPicture.title = `Pulp Fiction hjfd fhdjf d dfjhfj djf abc xyz ${i}`;
    motionPicture.seasons = 1;
    motionPicture.episodes = 10;
    motionPicture.rating = 8.9;

    blogPost.id = i.toString();
    blogPost.relatedMotionPicture = motionPicture;
    blogPost.review =
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia," +
      "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum" +
      "numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium" +
      "optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis" +
      "obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam" +
      "nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit," +
      "tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit," +
      "quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos " +
      "sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam" +
      "recusandae alias error harum maxime adipisci amet laborum. Perspiciatis " +
      "minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit " +
      "quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur " +
      "fugiat, temporibus enim commodi iusto libero magni deleniti quod quam" +
      "consequuntur! Commodi minima excepturi repudiandae velit hic maxime" +
      "doloremque. Quaerat provident commodi consectetur veniam similique ad " +
      "earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo " +
      "fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore " +
      "suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium" +
      "modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam " +
      "totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam" +
      "quasi aliquam eligendi, placeat qui corporis!";
    blogPost.description =
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia," +
      "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum" +
      "numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium" +
      "optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis" +
      "obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam" +
      "nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit," +
      "tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit," +
      "quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos " +
      "sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam" +
      "recusandae alias error harum maxime adipisci amet laborum. Perspiciatis " +
      "minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit " +
      "quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur ";

    const min = 1;
    const max = blogPost.review.length;
    for (let i = 0; i < 20; i++) {
      const comment = new Comment();
      comment.date = new Date();
      comment.date.setDate(Math.floor(Math.random() * (30 - 1 + 1)) + 1);
      comment.date.setMonth(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
      comment.userName = i > 0 ? `Joe Mama${i}` : "Joe Mama";
      comment.text = blogPost.review.substring(
        Math.floor(Math.random() * (max - min + 1)) + min,
        Math.floor(Math.random() * (max - min + 1)) + min
      );
      comment.id = i.toString();

      blogPost.comments.push(comment);
    }

    blogPosts.push(blogPost);
  }
  return blogPosts;
}
