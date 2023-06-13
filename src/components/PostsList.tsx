import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="Robert" text="Learning React" />
      <Post author="Karis" text="Django guru" />
    </ul>
  );
};

export default PostsList;
