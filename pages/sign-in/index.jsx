import { useState } from "react";
import { auth, googleProvider, githubProvider } from "@/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("Invalid Credentials");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      setError("Error signing in with Google: " + err.message);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      router.push("/");
    } catch (err) {
      setError("Error signing in with GitHub: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 space-y-2">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign In with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Sign In with GitHub
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up">
            <span className="text-blue-500 hover:underline">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
