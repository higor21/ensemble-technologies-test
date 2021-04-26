import React, { useEffect, useRef } from "react";
import { Layout } from "components";
import { Footer, Posts } from "./components";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "store/feed/middlewares";
import { DEFAULT_LIMIT, setLoading } from "store/feed/slice";
import { RootState } from "store";

interface Props extends RouteComponentProps {}

const Feed: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.feed);
  const intervalIdRef = useRef<number | undefined>(undefined);

  const reloadPosts = () => {
    const startSeq = count - DEFAULT_LIMIT;
    dispatch(getPosts(startSeq < 0 ? 0 : startSeq));
  };

  useEffect(() => {
    dispatch(setLoading(true));

    intervalIdRef.current = window.setInterval(() => {
      reloadPosts();
      console.log("asdf");
    }, 5000);

    return () => {
      window.clearInterval(intervalIdRef.current);
    };
  }, []);

  return (
    <Layout>
      <Posts />
      <Footer />
    </Layout>
  );
};

export default Feed;
