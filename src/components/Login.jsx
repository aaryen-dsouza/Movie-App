export default function Login() {
  return (
    <form>
      <h1>Login</h1>
      <label htmlFor='email'>Email</label>
      <input type='text' required />
      <label htmlFor='password'>Password</label>
      <input type='password' required />
    </form>
  );
}
