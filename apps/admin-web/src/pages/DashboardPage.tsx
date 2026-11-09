const stats = [
  { label: 'Attendance completion', value: '94.8%' },
  { label: 'Present staff', value: '184' },
  { label: 'Late alerts', value: '7' },
  { label: 'Live tracking', value: '12 active' }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-700">EduTrack AI</p>
            <h1 className="text-3xl font-bold text-slate-900">School Admin Dashboard</h1>
          </div>
          <button className="rounded-xl bg-blue-600 px-4 py-2 text-white shadow-md">Export report</button>
        </header>

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Attendance overview</h2>
            <div className="space-y-4">
              {[
                ['Present', '142'],
                ['Late', '18'],
                ['Absent', '9'],
                ['Flagged', '5']
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <span className="text-slate-700">{label}</span>
                  <span className="font-bold text-slate-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Live staff map</h2>
            <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 text-slate-600">
              Interactive map placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
