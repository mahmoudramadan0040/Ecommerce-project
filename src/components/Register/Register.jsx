import style from './Register.module.css';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/user.services';

function Register() {
  const navigate = useNavigate();
  const [formsValues, setFormsValues] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    image: null,
  });
  const [registerError, setRegisterError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputFirstName = useRef(null);
  const inputLastName = useRef(null);
  const inputImage = useRef(null);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    first_name: null,
    last_name: null,
    image: null,
  });
  const [errorRun, setErrorsRun] = useState(false);

  const handleSubmit = (event) => {
    setRegisterError(false);
    event.preventDefault();

    if (
      errors.email ||
      errors.password ||
      errors.first_name ||
      errors.last_name ||
      errors.image
    ) {
      setErrorsRun(true);
    } else {
      const formData = {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        first_name: inputFirstName.current.value,
        last_name: inputLastName.current.value,
        image: inputImage.current.files[0],
      };

      register(formData)
        .then((result) => {
          console.log(result);
          if (result.status === 'success') {
            setTimeout(() => {
              navigate('/home');
            }, 2000);
          } else {
            setRegisterError(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setRegisterError(true);
        });

      setErrorsRun(false);
    }
  };

  const operationHandler = (e) => {
    setErrorsRun(false);

    if (e.target.name === 'email') {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (regex.test(e.target.value)) {
        setErrors({ ...errors, email: null });
        setFormsValues({ ...formsValues, [e.target.name]: e.target.value });
      } else {
        setErrors({
          ...errors,
          email: 'Invalid email address! Example format: mahmoud@example.com',
        });
      }
    }

    if (e.target.name === 'first_name') {
      if (e.target.value) {
        setErrors({ ...errors, first_name: null });
        setFormsValues({ ...formsValues, [e.target.name]: e.target.value });
      } else {
        setErrors({ ...errors, first_name: 'Invalid first name' });
      }
    }

    if (e.target.name === 'last_name') {
      if (e.target.value) {
        setErrors({ ...errors, last_name: null });
        setFormsValues({ ...formsValues, [e.target.name]: e.target.value });
      } else {
        setErrors({ ...errors, last_name: 'Invalid last name' });
      }
    }

    if (e.target.name === 'password') {
      if (e.target.value.length >= 4) {
        setFormsValues({ ...formsValues, [e.target.name]: e.target.value });
        setErrors({ ...errors, password: null });
      } else {
        setErrors({
          ...errors,
          password: 'Password must be at least 4 characters!',
        });
      }
    }

    if (e.target.name === 'image') {
      const file = e.target.files[0];
      if (file) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const allowedSize = 5 * 1024 * 1024; // 5MB

        if (allowedTypes.includes(file.type) && file.size <= allowedSize) {
          setFormsValues({ ...formsValues, image: file });
          setErrors({ ...errors, image: null });
        } else {
          setFormsValues({ ...formsValues, image: null });
          setErrors({
            ...errors,
            image:
              'Invalid image format or size. Please upload a JPEG, PNG, or GIF image up to 5MB.',
          });
        }
      }
    }

    const isFormValid =
      inputPassword.current.value.length &&
      inputEmail.current.value.length &&
      inputFirstName.current.value.length &&
      inputLastName.current.value.length &&
      inputImage.current.value;

    setDisabled(!isFormValid);
  };

  return (
    <div className={`${style.register_form} container`}>
      <div className="row justify-content-center mt-5">
        <h1 className="text-center mt-5 mb-4">Register</h1>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className={`form-control ${
                  errors.email ? 'is-invalid' : ''
                }`}
                placeholder="Enter email"
                ref={inputEmail}
                onChange={operationHandler}
              />
              {errors.email && errorRun && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
                placeholder="Enter password"
                ref={inputPassword}
                onChange={operationHandler}
              />
              {errors.password && errorRun && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                className={`form-control ${
                  errors.first_name ? 'is-invalid' : ''
                }`}
                placeholder="Enter first name"
                ref={inputFirstName}
                onChange={operationHandler}
              />
              {errors.first_name && errorRun && (
                <div className="invalid-feedback">{errors.first_name}</div>
              )}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                className={`form-control ${
                  errors.last_name ? 'is-invalid' : ''
                }`}
                placeholder="Enter last name"
                ref={inputLastName}
                onChange={operationHandler}
              />
              {errors.last_name && errorRun && (
                <div className="invalid-feedback">{errors.last_name}</div>
              )}
            </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className={`form-control-file ${
                  errors.image ? 'is-invalid' : ''
                }`}
                ref={inputImage}
                onChange={operationHandler}
              />
              {errors.image && errorRun && (
                <div className="invalid-feedback">{errors.image}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={disabled}
            >
              Register
            </button>
            {registerError && (
              <div className="alert alert-danger mt-3" role="alert">
                An error occurred during registration. Please try again later.
              </div>
            )}
            <div className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
