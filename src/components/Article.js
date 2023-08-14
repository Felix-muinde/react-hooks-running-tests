import React from "react";

function Article(props) {
  return (
    <div>
        {props.text} {/* Render the text from props */}
    </div>
  );
}

export default Article;
