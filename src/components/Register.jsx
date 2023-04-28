import "../index.css";

export default function Register() {
  return (
    <form>
      <h1 className='bg-white'>Register</h1>
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
