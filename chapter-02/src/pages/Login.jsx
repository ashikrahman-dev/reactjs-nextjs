import Layout from "../layout/Layout";

export default function Login() {
  return (
      <Layout>
        <div className='min-h-screen flex items-center justify-center'>
          <from className='login-form-wrap w-full max-w-xl border m-auto py-10 px-10 rounded-3xl'>
            <h2 className='text-4xl font-semibold text-gray-950'>Login</h2>
            <span className='text-2xl font-normal text-gray-950 block mb-8'>to get started</span>

            <input type="email" name="" placeholder="Enter your email." id="" className=' border border-[#EAEAEA] w-full rounded-[10px] py-4 px-[26px] text-[#333333] text-base placeholder:text-[#B0A9A9] focus:border-[#333] focus:outline-none focus:shadow-[0_10px_40px_0_rgba(174,174,174,0.20)] mb-5 ' />

            <input type="password" name="" placeholder="Password" id="" className=' border border-[#EAEAEA] w-full rounded-[10px] py-4 px-[26px] text-[#333333] text-base placeholder:text-[#B0A9A9] focus:border-[#333] focus:outline-none focus:shadow-[0_10px_40px_0_rgba(174,174,174,0.20)] mb-5 ' />

            <button className=' rounded-[10px] text-base text-white bg-[#0016DF] w-full h-[58px] hover:bg-[#3947c6] transition-all duration-200'>
              Continue
            </button>

          </from>
        </div>
      </Layout>
  )
}
