import "../index.css";

export default function Register() {
  return (
    <form className='w-1/2 flex flex-col bg-amoled mx-auto p-6'>
      <h1 className='text-4xl text-white text-center mb-4'>Register</h1>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='John'
        required
        autoComplete='on'
      />
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        placeholder='xyz@domain.in'
        required
        autoComplete='on'
      />
      <label htmlFor='password'>Password</label>
      <input type='password' required autoComplete='new-password' />
    </form>
  );
}
