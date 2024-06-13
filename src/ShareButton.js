import React from "react";

const ShareButton = ({ postId, title }) => {
  const handleClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          //   url: `https://yourwebsite.com/blog/${postId}`,
          url: `http://localhost:3000/${postId}`,
        });
        console.log("Successfully shared");
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return <button onClick={handleClick}>Share</button>;
};

export default ShareButton;
