import React from "react";
import ShareButton from "./ShareButton";

const BlogPost = ({ postId, title }) => {
  return (
    <div>
      <h1>{title}</h1>

      <ShareButton postId={postId} title={title} />
    </div>
  );
};

export default BlogPost;
