import React from "react";
import { Layout } from "components";
import { Footer, Posts } from "./components";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const Feed: React.FC<Props> = ({ history }) => {
  return (
    <Layout>
      <Posts />
      <Footer />
    </Layout>
  );
};

export default Feed;
