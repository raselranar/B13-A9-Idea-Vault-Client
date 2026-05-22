import LoginPage from "./LoginPage";

// add meta data for login page
export const metadata = {
  title: "Login - Access Your IdeaVault Account",
  description:
    "Log in to your IdeaVault account to share and explore innovative startup ideas. Access your personalized dashboard, manage your ideas, and connect with a community of like-minded entrepreneurs.",
};
const page = () => {
  return <LoginPage />;
};
export default page;
