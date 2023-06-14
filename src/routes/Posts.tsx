import { useState } from "react";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      {/* <MainHeader onCreatePost={() => setModalIsVisible(true)} /> */}

      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const { posts } = await response.json();
  return posts;
};
