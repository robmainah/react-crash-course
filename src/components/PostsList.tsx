import { Fragment, useState, ChangeEvent, useEffect } from "react";
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

  const addNewPost = async (data: PostInterface) => {
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setPosts((existingPosts) => [data, ...existingPosts]);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("http://localhost:8080/posts");
    const { posts } = await response.json();
    setPosts(posts);
  };

  return (
    <Fragment>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addNewPost} />
        </Modal>
      )}

      {posts.length === 0 && (
        <h2 style={{ textAlign: "center", color: "white" }}>No posts</h2>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post author={post.author} text={post.body} key={index} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default PostsList;
