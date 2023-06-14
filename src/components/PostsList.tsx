import { Fragment, useState, ChangeEvent, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import PostInterface from "../types/PostInterface";
import { useLoaderData } from "react-router-dom";

// interface PostsListInterface {
//   isPosting: Boolean;
//   onStopPosting: () => void;
// }

const PostsList = () => {
  // const [posts, setPosts] = useState<PostInterface[]>([]);

  // const addNewPost = async (data: PostInterface) => {
  //   setPosts((existingPosts) => [data, ...existingPosts]);
  // };

  const posts: PostInterface[] = useLoaderData() as PostInterface[];

  return (
    <Fragment>
      {posts.length === 0 && (
        <h2 style={{ textAlign: "center", color: "white" }}>No posts</h2>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default PostsList;
