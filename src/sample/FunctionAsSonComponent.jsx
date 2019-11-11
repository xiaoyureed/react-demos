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
          <div>
            <p>function 作为 son component</p>
            {name}
          </div>
        );
      }}
    </MyComponent>
  );
};

export default FunctionAsSonComponent;
