import { PostCard } from "../PostCard";
import "./styles.css";

export const Post = ({ posts }) => (
  <div className="posts">
    {posts.map((item) => (
      <PostCard
        key={item.id}
        id={item.id}
        title={item.title}
        body={item.body}
        cover={item.cover}
      />
    ))}
  </div>
);
