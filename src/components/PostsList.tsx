import { Fragment, useState, ChangeEvent } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import PostInterface from "../types/PostInterface";

interface PostsListInterface {
  isPosting: Boolean;
  onStopPosting: () => void;
}

const PostsList = ({ isPosting, onStopPosting }: PostsListInterface) => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const addNewPost = (data: PostInterface) => {
    setPosts((existingPosts) => [data, ...existingPosts]);
  };

  return (
    <Fragment>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addNewPost} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post author={post.author} text={post.body} key={post.body} />
        ))}
      </ul>
    </Fragment>
  );
};

export default PostsList;
