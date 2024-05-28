import { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/icons/icons8-google-100.png";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { createUser } = useAuth();
  const [passMatch, setPassMatch] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    const confirmPassword = data.confirmPassword.value;

    if (password !== confirmPassword) {
      setPassMatch(false);
    }
    if (password === confirmPassword) {
      createUser(email, password);
    }
  };

  return (
    <div onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="confirmPassword"
                className="input input-bordered"
                required
              />
            </div>
            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Password do not match!</p>
              </div>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
              <div className="mx-auto w-full border rounded-sm hover:bg-lime-300">
                <img
                  className="mx-auto w-10"
                  src={googleIcon}
                  alt="googleIcon"
                />
              </div>
              <h1>
                Already have an account?{""}
                <Link
                  className="underline text-yellow-700 hover:text-green-500 ml-4"
                  to="/login"
                >
                  login
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
