export default function Login() {
  return (
    <form className='w-1/3 flex flex-col bg-amoled mx-auto mt-32 p-6'>
      <h1 className='text-4xl text-white text-center mb-4'>Login</h1>
      <label htmlFor='email'>Email</label>
      <input type='text' required />
      <label htmlFor='password'>Password</label>
      <input type='password' required />
    </form>
  );
}
