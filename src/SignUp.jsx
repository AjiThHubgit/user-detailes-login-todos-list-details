import { useState } from 'react';

function SignUp() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: ""
    });

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setUser(prevUser => ({...prevUser, [name]: value}));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        signUpUser();
    }

    const signUpUser = async() => {

        try {

            const response = await fetch('https://dummyjson.com/users/add',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                }
            );

            if (!response.ok) {
                throw new Error("Network Error....!");
            }

            const result = await response.json();
            console.log(result, "result");
            
        } catch (error) {
            console.error("Login Failed:", error.message);
        }
    }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '350px', borderRadius: '10px' }}>
        <h3 className="text-center mb-3">User SignUp</h3>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              value={user.firstName}
              onChange={handleOnChange}
              style={{ borderRadius: '5px' }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              value={user.lastName}
              onChange={handleOnChange}
              style={{ borderRadius: '5px' }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              name="age"
              value={user.age}
              onChange={handleOnChange}
              style={{ borderRadius: '5px' }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: '5px' }}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
