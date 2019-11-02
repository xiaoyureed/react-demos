import React from 'react';

const Item = props => {
  const { author, content } = props.comment;
  const handleClick = url => {
    window.open(url);
  };
  return (
    <div style={{
      position: 'relative',
      height: '80px',
      paddingLeft: '80px',
    }}>
      <span style={{
        position: 'absolute',
        top: '0',
        left: '10px',
        width: '60px',
        height: '60px',
        backgroundColor: '#eee'
      }} />
      <p style={{
        cursor: 'pointer',
        color: 'blue',
      }} onClick={() => handleClick(author.url)}>{author.name}</p>
      <p>{content}</p>
    </div>
  );
};

const CommentList = props => {
  return (
    <div>
      {props.comments.map((comment, key) => <Item key={key} comment={comment} />)}
    </div>
  );
}

const CommentInput = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('prevent default');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea style={{
          display: 'block',
          width: '100%',
          border: '1px solid #ccc',
        }} />
        <button>提交</button>
      </form>
    </div>
  );
};

const data = [{
  author: {
    name: 'xiao',
    url: 'https://www.baidu.com',
  },
  content: 'hello',
}, {
  author: {
    name: 'yu',
    url: 'https://www.taobao.com'
  },
  content: 'test',
}];

const CommentBoard = () => {
  return (
    <div>
      <h2>comments ({data.length})</h2>
      <CommentList comments={data} />
      <CommentInput />
    </div>
  );
};

export default CommentBoard;
