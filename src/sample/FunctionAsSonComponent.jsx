import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      {props.children('hello')}
    </div>
  );
};

const FunctionAsSonComponent = (props) => {
  return (
    <MyComponent>
      {(name) => {
        return (
          <div>{name}</div>
        );
      }}
    </MyComponent>
  );
};

export default FunctionAsSonComponent;
