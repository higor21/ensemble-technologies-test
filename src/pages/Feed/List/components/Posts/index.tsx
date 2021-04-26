import { MessageCard } from "components";
import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "shared/colors";
import { RootState } from "store";
import { getPosts } from "store/feed/middlewares";
import styled from "styled-components";

interface Props {}

const PostsWrapper = styled.div`
  max-height: calc(100vh - 60px);
  overflow-y: scroll;

  & > div {
    border-left: 1px dashed ${Colors.gray};
    border-right: 1px dashed ${Colors.gray};
  }
`;

const Posts: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: RootState) => state.feed);
  const { username } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getPosts(1, 10));
  }, []);

  return (
    <PostsWrapper>
      <div className="mx-auto p-4">
        {loading ? (
          <Spinner
            style={{ color: Colors.black, width: 50, height: 50 }}
            animation="border"
          />
        ) : (
          <>
            {posts?.map((post) => (
              <MessageCard
                key={post.seq}
                isFromLoggedUser={post.user == username}
                style={{ margin: "1.5em 0" }}
                {...post}
              />
            ))}{" "}
          </>
        )}
      </div>
    </PostsWrapper>
  );
};

export default Posts;
