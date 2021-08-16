import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Post (props){
  let txt = "post"
  if (props.zenMode === true){
    txt = "post-listZenMode" 
  }  
  const allPosts = props.postsData.map((element)=> {
   return ( 
   <article className={txt} key={element.id}>
    <h2 className="post-title">{element.title}</h2>
    <div className="post-category">{element.category}</div>
    <p className="post-excerpt">{element.excerpt}</p>
  </article>
       )});
  

  
  return(
    <>
  {allPosts}
  </>
  )
};
Post.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     category: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     excerpt: PropTypes.string.isRequired,
   })).isRequired,
   zenMode: PropTypes.bool.isRequired,
 }

export default Post;
