import React from "react";

interface BlockArticleProps {
  post?: string;
}

const BlockArticle: React.FC<BlockArticleProps> = ({ post }) => {
  if (!post) return null;

  //const block = post?.blocks[0];

  console.log(post)

  return (
    <div className="prose prose-base max-w-none mx-auto" dangerouslySetInnerHTML={{ __html: post.body }} />
  );
}

export default BlockArticle
