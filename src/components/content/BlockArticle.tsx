import { BlocksRenderer} from "@strapi/blocks-react-renderer";

export default function BlockArticle({post}:any) {
  if (!post) return null;

 const block = post?.blocks?.[0]

  //console.log(post.blocks[0])

  return (
    <>
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: block.body }} />
        </div>
      
    </>
  );
}


/* <BlocksRenderer content={post.blocks} /> */