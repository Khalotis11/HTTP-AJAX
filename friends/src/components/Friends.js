import React from "react";

export const Friends = props => {
  console.log(props);
  return (
    <div>
      {props.friends.map(friend => (
        <div friend={friend}>
          <div>Name:{friend.name}</div>
          <div>Age:{friend.age}</div>
          <div>Name:{friend.email}</div>
        </div>
      ))}
    </div>
  );
};
