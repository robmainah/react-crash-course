import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <MainHeader onCreatePost={() => setModalIsVisible(true)} />

      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={() => setModalIsVisible(false)}
        />
      </main>
    </>
  );
}

export default App;
