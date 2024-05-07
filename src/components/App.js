import { useState } from "react";
import video from "../data/video.js";
function App() {
  console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(false);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  return (
    <div className='App'>
      <iframe
        width='919'
        height='525'
        src={video.embedUrl}
        frameBorder='0'
        allowFullScreen
        title='Thinking in React'
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button onClick={() => setUpvotes(upvotes + 1)}>{upvotes} 👍</button>{" "}
      <button onClick={() => setDownvotes(downvotes + 1)}>
        {downvotes} 👎
      </button>{" "}
      <br />
      <br />
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr />
      <br />
      {showComments ? (
        video.comments.length > 1 ? (
          <h2>{video.comments.length} Comments</h2>
        ) : null
      ) : null}
      {showComments
        ? video.comments.map((comment) => {
            return (
              <div>
                <div key={comment.id}>
                  <h3>{comment.user}</h3>
                  <p>{comment.comment}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
