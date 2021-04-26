import { Error, MessageCard } from "components";
import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Colors } from "shared/colors";
import { RootState } from "store";
import styled from "styled-components";

interface Props {}

const PostsWrapper = styled.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;

  & > div {
    min-height: 100%;
    padding-bottom: 7em !important;
    border-left: 1px dashed ${Colors.gray};
    border-right: 1px dashed ${Colors.gray};
  }
`;

const Posts: React.FC<Props> = () => {
  const { posts, loading } = useSelector((state: RootState) => state.feed);
  const { username } = useSelector((state: RootState) => state.auth);

  return (
    <PostsWrapper>
      <div
        className={`mx-auto p-4 ${
          (loading || !posts?.length) &&
          "d-flex justify-content-center align-items-center"
        }`}
      >
        {loading ? (
          <Spinner
            style={{ color: Colors.black, width: 50, height: 50 }}
            animation="border"
          />
        ) : (
          <>
            {posts?.length ? (
              posts?.map((post) => (
                <MessageCard
                  key={post.seq}
                  isFromLoggedUser={post.user == username}
                  style={{ margin: "1.5em 0" }}
                  {...post}
                />
              ))
            ) : (
              <Error message="There are no messages to show." />
            )}
          </>
        )}
      </div>
    </PostsWrapper>
  );
};

export default Posts;
