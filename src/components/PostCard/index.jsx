import "./styles.css";

export const PostCard = (props) => {
  console.log(props);
  return (
    <div className="post">
      <img src={props.cover} alt="props.title"></img>
      <div className="post-content">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  );
};
