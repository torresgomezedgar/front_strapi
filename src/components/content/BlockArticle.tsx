import React from "react";

interface BlockArticleProps {
  post?: string;
}

const BlockArticle: React.FC<BlockArticleProps> = ({ post }) => {
  if (!post) return null;

  const optimizarImagenes = (html: string) => {
    return html.replace(
      /<img src="(.*?)"/g,
      (match, url) =>
        `<img 
          src="${url}?w=600&auto=format&fit=crop" 
          loading="lazy" 
          decoding="async" 
          style="max-width:100%;height:auto;border-radius:1rem;box-shadow:0 4px 8px rgba(0,0,0,0.1);" 
        `
    );
  };

  //console.log(post)

  return (
    <div className="prose prose-base mx-auto max-w-3xl
                    prose-img:rounded-2xl prose-img:shadow-md
                    prose-img:w-1/2 prose-img:mx-auto
                    prose-img:aspect-[4/3] prose-img:object-cover" 
                    dangerouslySetInnerHTML={{ __html: optimizarImagenes(post.body)}} />
  );
}

export default BlockArticle
