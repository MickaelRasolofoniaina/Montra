import { Redirect } from "expo-router";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return <Redirect href="home" />
};

export default Home;
