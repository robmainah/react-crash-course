import classes from "./Post.module.css";

interface PostInterface {
  author: string;
  text: string;
}
const Post = ({ author, text }: PostInterface) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{text}</p>
    </li>
  );
};

export default Post;
