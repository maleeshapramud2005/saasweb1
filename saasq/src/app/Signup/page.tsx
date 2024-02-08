import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg mb-5">
                <div className="flex justify-center  ">
                    {/* Replace 'your-logo.png' with the path to your logo */}
                    <Image src="/resources/23036889560.png" width={50} height={50} alt="Logo" className="h-36" />
                </div>
                <p className="max-w-md text-center mb-4">MentorMind Studio</p>
                <p className="text-3xl">Get Started!</p>
                <p className="mb-8">use the form below to create your account</p>
                <form>
                    <div className="mb-6 relative">
                        <label htmlFor="email " className="absolute left-4 -top-2 bg-white px-2 text-gray-700  ">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full text-sm px-5 py-4 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="absolute left-4 -top-2 bg-white px-2 text-gray-700 ">Password</label>
                        <input type="password" id="password" name="password" className="w-full text-sm px-5 py-4 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="conformpassword" className="absolute left-4 -top-2 bg-white px-2 text-gray-700 ">Conform Password</label>
                        <input type="conformpassword" id="conformpassword" name="conformpassword" className="w-full text-sm px-5 py-4 border rounded-full focus:outline-none focus:border-blue-500" placeholder="Enter again your password" required />
                    </div>
                    <div className="mb-6 py-2">
                        <button type="submit" className="w-full bg-blue-800 text-white py-3 px-4 rounded-full float-right hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
                    </div>
                </form>

                <p className="text-2xl max-w-md text-center ">or</p>
                <div className="max-w-md w-full flex flex-row justify-between mb-10">
                    <div className="w-1/3 ml-12"> <Image className="h-12" src="/resources/google.png" width={50} height={50} alt="" /></div>
                    <div className="w-1/4 "> <Image className="h-12" src="/resources/facebook.png" width={50} height={50} alt="" /></div>
                </div>
                <div className="max-w-md py-2">
                    <label className="w-12 ">Have an account ?</label>
                    <label htmlFor="" className="ml-12 text-blue-500 hover:text-blue-700">
                        <Link href="/signin">Sign In</Link>
                    </label>
                </div>
            </div>
        </div>
    );
}