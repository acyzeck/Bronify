/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../lib/axios';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await userLogin(email, password);
            console.log('Login successful');
            navigate('/');
        } catch (error: any) {
            console.error(error.message);
        }
    };
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="max-w-lg w-full bg-zinc-900 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-6 text-center">
                    Sign In
                </h2>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border text-white placeholder:text-zinc-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border text-white placeholder:text-zinc-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="pb-5"></div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-200">
                    Don't have an account?{'  '}
                    <a
                        href="/register"
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                        {'  '}Register
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
