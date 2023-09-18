import Layout from "../layout/Layout";

export default function Login() {
  return (
    <Layout>
      <div className='min-h-screen flex items-center justify-center'>
        <from className='login-form-wrap w-full max-w-xl border m-auto py-14 px-10 rounded-3xl'>
          <h2 className='text-4xl font-semibold text-gray-950'>Login</h2>
          <span className='text-2xl font-normal text-gray-950 block mb-11'>to get started</span>

          <input type="email" name="" placeholder="Enter your email." id="" className=' border border-[#EAEAEA] w-full rounded-[10px] py-4 px-[26px] text-[#333333] text-base placeholder:text-[#B0A9A9] focus:border-[#333]  ' />

        </from>
      </div>
    </Layout>
  )
}
