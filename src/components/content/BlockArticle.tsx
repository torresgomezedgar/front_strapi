import React, { useEffect, useState, } from "react";

import './content.css'

interface BlockArticleProps {
  post?: string;
  onBack: () => void;
}

const BlockArticle: React.FC<BlockArticleProps> = ({ post, onBack }) => {
  if (!post) return null;


  useEffect(()=>{
    //setTimeout(() => {
      window.scrollTo({ top: 50, behavior: "smooth" });
      
    //}, 50); // 100 ms suele ser suficiente
  },[]);

  const optimizarImagenes = (html: string) => {
    return html.replace(
      /<img src="(.*?)"/g,
      (match, url) =>
        `<img 
          src="${url}?w=600&auto=format&fit=crop" 
          loading="lazy" 
          decoding="async" 
          style="max-width:80%;height:auto;border-radius:1rem;box-shadow:0 4px 8px rgba(0,0,0,0.1);" 
        `
    );
  };

  //console.log(post)

  return (
    <>
    <div className="article-animate">
    <button 
          onClick={onBack}
          className="btn btn-sm mb-6"
        >
          ← Volver
        </button>
    <div className="prose prose-base mx-auto max-w-3xl
                    prose-img:mx-auto
                    prose-img:aspect-auto
                    prose-img:object-cover 
                    prose-h1:text-3xl sm:prose-h1:text-4xl
                    prose-h2:text-2xl sm:prose-h2:text-3xl
                    prose-p:text-base sm:prose-p:text-lg
                    prose-ul:text-base sm:prose-ul:text-lg
                    prose-p:text-justify
                    prose-pre:overflow-x-auto prose-pre:max-w-full
                    
                  "  

                    dangerouslySetInnerHTML={{ __html: optimizarImagenes(post.body)}} />
                    </div>
                    </>
  );
}

export default BlockArticle
