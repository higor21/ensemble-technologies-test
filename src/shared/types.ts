export type FeedProps = {
  count: number;
  lastPostDate: string | null;
  lastPostSeq: number;
  posts: PostResProps[] | null;
}

export type PostProps = {
  message: string;
};

export type PostResProps = {
  seq: number;
  date: string;
  user: string;
} & PostProps;

export type LogInProps = {
  username: string;
  password: string;
}