import "./Signup.scss";
import axios from "axios";
import { useForm } from "react-hook-form";

const Signup = ({ setRedirect, setToggleModal, setModalText }) => {
  const successAlert = (token) => {
    // sessionStorage.setItem("token", token);
    setRedirect("/profile");
    setToggleModal(true);
    setModalText("Signup successful! Welcome!");
  };

  const failedAlert = () => {
    setToggleModal(true);
    setModalText("Passwords must match!");
  };

  const onSubmit = (data) => {
    console.log(data.avatar[0]);
    console.log(data.firstName);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("file", data.avatar[0]);
    formData.append("volunteer", data.volunteer);
    formData.append("about", data.about);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    console.log(Array.from(formData));
    const fd = Array.from(formData);
    axios
      .post(
        `http://localhost:8080/user/register`,
        {
          fd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        res.data.status === "ok" ? successAlert(res.data.data) : failedAlert();
      })
      .catch((err) => console.error(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(register);
  console.log(errors);

  return (
    <div className='signup'>
      <h2 className='signup__name'>Register here!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='signup__form'>
        <div className='signup__left'>
          <label htmlFor='firstName' className='signup__label'>
            First name
            <input
              {...register("firstName", { required: true })}
              id='firstName'
              className='signup__input'
            />
            {errors.firstName && (
              <p className='signup__error'>First name is required</p>
            )}
          </label>
          <label htmlFor='lastName' className='signup__label'>
            Last Name
            <input
              {...register("lastName", { required: true })}
              className='signup__input'
            />
            {errors.lastName && (
              <p className='signup__error'>Last name is required</p>
            )}
          </label>
          <label htmlFor='address' className='signup__label'>
            Address
            <input
              {...register("address", { required: true })}
              id='address'
              className='signup__input'
            />
            {errors.address && (
              <p className='signup__error'>Address is required</p>
            )}
          </label>
          <label htmlFor='city' className='signup__label'>
            City
            <input
              {...register("city", { required: true })}
              id='city'
              className='signup__input'
            />
            {errors.city && <p className='signup__error'>City is required</p>}
          </label>
          <label htmlFor='country' className='signup__label'>
            Country
            <input
              {...register("country", { required: true })}
              id='country'
              className='signup__input'
            />
            {errors.country && (
              <p className='signup__error'>Country is required</p>
            )}
          </label>

          <label htmlFor='about' className='signup__label'>
            About you...
            <input
              type='textarea'
              {...register("about", { required: true })}
              id='about'
              className='signup__input signup__input--about'
            />
            {errors.about && (
              <p className='signup__error'>About you is required</p>
            )}
          </label>
        </div>
        <div className='signup__right'>
          <label htmlFor='avatar' className='signup__label'>
            Avatar
            <input
              type='file'
              {...register("avatar")}
              id='avatar'
              className='signup__input'
            />
          </label>
          <label
            htmlFor='volunteer'
            className='signup__label signup__label--radio'
          >
            Avaliable to volunteer?
          </label>
          <div className='signup__radio'>
            <label>
              <input
                type='radio'
                value={true}
                {...register("volunteer", { required: true })}
                id='volunteer'
              />
              Yes
            </label>
            <label>
              <input
                type='radio'
                value={false}
                {...register("volunteer", { required: true })}
                id='volunteer'
              />
              No
              {errors.volunteer && (
                <p className='signup__error'>Availabilty is required</p>
              )}
            </label>
          </div>

          <label htmlFor='email' className='signup__label'>
            Email
            <input
              type='email'
              {...register("email", { required: true })}
              id='email'
              className='signup__input'
            />
            {errors.email && <p className='signup__error'>Email is required</p>}
          </label>
          <label htmlFor='password' className='signup__label'>
            Password
            <input
              type='password'
              {...register("password", { required: true })}
              id='password'
              className='signup__input'
            />
            {errors.password && (
              <p className='signup__error'>Password is required</p>
            )}
          </label>
          <label htmlFor='password' className='signup__label'>
            Confirm Password
            <input
              type='password'
              {...register("confirmPassword", { required: true })}
              id='confirmPassword'
              className='signup__input'
            />
            {errors.confirmPassword && (
              <p className='signup__error'>Confirm password is required</p>
            )}
          </label>

          <button type='submit' className='signup__submit'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
