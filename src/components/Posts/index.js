import React from 'react';
import PropTypes from 'prop-types';
import Post from 'src/components/Post';

import './styles.scss';

function Posts(props) {
  let txt = "posts-list"
  if (props.zenMode === true) {
    txt = "posts-listZenMode"
  }
  return (<main className="posts">
    <h1 className="posts-title">Dev Of Thrones</h1>
    <div className={txt}>
      <Post postsData={props.postsData} zenMode={props.zenMode} />

    </div>
  </main>)
};
Posts.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  })).isRequired,
  zenMode: PropTypes.bool.isRequired,
}

export default Posts;
