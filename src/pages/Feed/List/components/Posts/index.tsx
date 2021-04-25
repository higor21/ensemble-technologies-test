import { MessageCard } from "components";
import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Colors } from "shared/colors";
import { RootState } from "store";
import styled from "styled-components";

interface Props {}

const PostsWrapper = styled.div`
  max-height: 350px;
  overflow-y: scroll;
`;

const Posts: React.FC<Props> = () => {
  const { posts, loading } = useSelector((state: RootState) => state.feed);

  /* useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input]) */

  return (
    <PostsWrapper>
      <div className="mx-auto py-5">
        {loading ? (
          <Spinner
            style={{ color: Colors.black, width: 50, height: 50 }}
            animation="border"
          />
        ) : (
          <>
            {posts?.map((post) => (
              <MessageCard key={post.seq} {...post} />
            ))}{" "}
          </>
        )}
      </div>
    </PostsWrapper>
  );
};

export default Posts;
