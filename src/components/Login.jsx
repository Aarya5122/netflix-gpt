import { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(false);

	function handleChangeSignIn(e) {
		e.preventDefault();
		setIsSignIn(!isSignIn);
	}

	return (
		<div className="bg-center bg-login bg-left-top">
			<div
				id="1"
				className="bg-black/[0.5] z-0 fixed min-h-screen w-screen"
			></div>

			<div id="2" className="z-10 relative">
				<Header />

				<div className="w-1/3 mx-auto text-white mt-8 mb-32 bg-black/[0.8] rounded">
					<form className="pt-12 pb-32">
						<p className="text-3xl text-white font-bold ml-20 mb-8">
							{isSignIn ? "Sign In" : "Sign Up"}
						</p>

						{!isSignIn ? (
							<input
								className="block w-2/3 py-2 mx-auto mb-4 px-2 py-[12px] text-sm bg-zinc-900/[0.8] border-2 border-zinc-600 rounded"
								type="text"
								name="name"
								placeholder="Fullname"
							/>
						) : (
							""
						)}

						<input
							className="block w-2/3 py-2 mx-auto mb-4 px-2 py-[12px] text-sm bg-zinc-900/[0.8] border-2 border-zinc-600 rounded"
							type="text"
							name="username"
							placeholder="Email or mobile number"
						/>
						<input
							className="block w-2/3 py-2 mx-auto mb-4 px-2 py-[12px] text-sm bg-zinc-900/[0.8] border-2 border-zinc-600 rounded"
							type="password"
							name="password"
							placeholder="Password"
						/>
						<button
							type="submit"
							className="block px-4 py-2 bg-[#e50914] text-white w-2/3 mx-auto mb-4 rounded hover:bg-[#e50914]/[0.7] transition-colors duration-500 ease-in-out"
						>
							{isSignIn ? "Sign In" : "Sign Up"}
						</button>
						{isSignIn ? (
							<>
								<p className="text-center text-white mb-4 text-slate-300">
									OR
								</p>
								<button
									type="submit"
									className="block px-4 py-2 bg-white/[0.3] text-white w-2/3 mx-auto mb-4 rounded hover:bg-white/[0.2] transition-colors duration-500 ease-in-out"
								>
									Use a sign-in code
								</button>
								<p className="text-center text-white mb-4 cursor-pointer">
									Forgot password?
								</p>
								<label htmlFor="rememberme" className="ml-20">
									<input
										className="mr-2 mb-4 hover:bg-red-500"
										type="checkbox"
										name="rememberme"
										id="rememberme"
									/>
									Remember me
								</label>
							</>
						) : (
							""
						)}
						<p className="ml-20 mb-4 text-sm font-semibold">
							<span className="text-slate-300 ">
								{isSignIn
									? "New to Netflix?"
									: "Already on Netflix?"}
							</span>{" "}
							<span
								className="hover:underline cursor-pointer"
								onClick={handleChangeSignIn}
							>
								{isSignIn ? "Sign up now" : "Sign in now"}
							</span>
						</p>
						<p className="ml-20 mb-4 text-slate-300 text-xs w-2/3 leading-5">
							This page is protected by Google reCAPTCHA to ensure
							you're not a bot.{" "}
							<span className="text-blue-700 hover:underline cursor-pointer">
								Learn more.
							</span>
						</p>
					</form>
				</div>
				<div className="bg-black/[0.8] text-stone-300 py-12 text-sm">
					<p className="mx-auto mb-4 w-10/12">
						Questions? Call 000-800-919-1694
					</p>
					<div className="mx-center flex w-10/12 mx-auto gap-y-4 flex-wrap  mb-4 underline">
						<p className="mr-56 ">FAQ</p>
						<p className="mr-56 ">Help Center</p>
						<p className="mr-56 ">Terms of Use</p>
						<p className="mr-56 ">Privacay</p>
						<p className="mr-32 ">Cookie Preferences</p>
						<p>Corporate Information</p>
					</div>
					<p className="mx-auto mb-4 w-10/12">English</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
