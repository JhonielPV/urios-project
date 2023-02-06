const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container bg-[#f2f2f2]">
      <div className="w-96 p-6 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold">Login</h1>

        <form onSubmit={handleSubmit} className="mt-5">
          <div className="input-group mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="login-input"
              placeholder="magtibay@gmail.com"
              required
            />
            <pre></pre>
          </div>
          <div className="input-group mb-3">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              autoComplete="off"
              placeholder="*******"
              required
            />
          </div>
          <button type="submit" className="login-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
