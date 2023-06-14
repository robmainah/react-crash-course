import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import PostInterface from "../types/PostInterface";

interface Post {
  post: PostInterface;
}

const Post = ({ post }: Post) => {
  return (
    <li className={classes.post}>
      <Link to={post.id}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </Link>
    </li>
  );
};

export default Post;
