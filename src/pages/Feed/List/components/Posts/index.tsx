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
  max-height: 350px;
  overflow-y: scroll;
`;

const Posts: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: RootState) => state.feed);

  useEffect(() => {
    dispatch(getPosts(1, 10));
  }, []);

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
