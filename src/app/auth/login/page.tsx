import { LoginForm } from "@/features/auth-page/login";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
