import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_KEY
    }`;
    fetch(URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const img_url = imageData.data.display_url;

        createUser(data.email, data.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(user);
            updateUserProfile(name, img_url)
              .then(() => {
                const saveUser = { name: data.name, email: data.email, password: data.password, role: "customer"}
                fetch("https://burger-week-server.vercel.app/users", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Signed Up",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate(from, { replace: true });
                    }
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      });
  };

  return (
    <>
      <div className="hero min-h-screen pt-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-900 text-white">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Image</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  placeholder="Your Image"
                  name="image"
                  className="file-input file-input-bordered w-full"
                  accept="image/*"
                />
                {errors?.image?.type === "required" && (
                  <span className="text-red-600">Image is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be at least 6 digit long.
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password can not be more than 20 digit.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have 1 uppercase, 1lowercase & 1 number
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="m-4">
              Already have an account? <Link to="/login"><span className="text-blue-500">Please login</span></Link>
            </p>
            <SocialLogin/>
          </div>
        </div>
      </div>
      <ScrollRestoration/>
    </>
  );
};

export default SignUp;
