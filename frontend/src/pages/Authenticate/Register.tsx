/* eslint-disable @typescript-eslint/no-explicit-any */
import { userRegister } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleRegister = async (e: any) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        try {
            await userRegister(username, email, password);
            console.log('Registration successful');
            navigate('/');
        } catch (error: any) {
            console.error(error.message);
        }
    };
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="max-w-lg w-full bg-zinc-900 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-zinc-100 mb-6 text-center">
                    Register
                </h2>

                <form className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">
                            Username
                        </label>
                        <input
                            type="name"
                            className="w-full px-4 py-2 border text-white placeholder:text-zinc-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="Username"
                        />
                    </div>
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

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-200">
                    Don't have an account?{'  '}
                    <a
                        href="/login"
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                        {'  '}Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
