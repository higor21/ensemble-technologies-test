export type PostProps = {
  message: string;
};

export type PostResProps = {
  seq: number;
  date: string;
  user: string;
} & PostProps;
