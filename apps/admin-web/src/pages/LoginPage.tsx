import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@edutrack.ai');
  const [password, setPassword] = useState('password123');

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.3em] text-blue-300">EduTrack AI</div>
          <h1 className="mt-2 text-3xl font-bold">School ERP Portal</h1>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0 focus:border-blue-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none ring-0 focus:border-blue-500"
            />
          </label>

          <button className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500">
            Login
          </button>
        </div>

        <div className="mt-6 text-xs text-slate-400">
          Secure access for school admin, principal, and teaching staff.
        </div>
      </div>
    </div>
  );
}
