import { Link } from "react-router-dom";
import googleIcon from "../assets/icons/icons8-google-100.png";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    console.log(email, password);
  };
  return (
    <div onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div
              onClick={handleGoogleLogin}
              className="mx-auto w-full border rounded-sm hover:bg-lime-300"
            >
              <img className="mx-auto w-10" src={googleIcon} alt="googleIcon" />
            </div>
            <h1>
              Dont have an account{""}
              <Link
                className="underline text-yellow-700 hover:text-green-500 ml-4"
                to="/register"
              >
                Register
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}
