import React from "react";
import BlogPost from "./BlogPost";

const blogPosts = [
  {
    id: "123",
    title: "ShareButton",
    content: "ShareButton is a core react-custom-share ",
  },
  {
    id: "124",
    title: "Web Share API ",
    content:
      "You have probably shared content on your device with either your contacts or to some other applications. This could be through copy/paste, using the share feature in web",
  },
];

const SinglePostPage = () => {
  return (
    <div>
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          postId={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default SinglePostPage;
