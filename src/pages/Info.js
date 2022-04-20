import React from "react";

function Info({ userInfo, history }) {
  //이게 실행되면 match.params값 들어감
  const clickHandler = () => {
    history.push(`/login/:${userInfo}`);
  };
  return (
    <>
      <div>info page</div>
      <button onClick={clickHandler}>go to {userInfo} login page</button>
    </>
  );
}

export default Info;