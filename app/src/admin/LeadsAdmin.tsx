import { useEffect, useState } from 'react';
import { Trash2, Loader2, Mail, Phone, Target, Clock } from 'lucide-react';
import { api, type Lead } from '../lib/api';

const STATUSES = ['new', 'contacted', 'converted', 'closed'] as const;

const statusStyle: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700 border-blue-200',
  contacted: 'bg-amber-100 text-amber-700 border-amber-200',
  converted: 'bg-green-100 text-green-700 border-green-200',
  closed: 'bg-slate-100 text-slate-600 border-slate-200',
};

function fmtDate(s: string) {
  // stored as 'YYYY-MM-DD HH:MM:SS' (UTC)
  const d = new Date(s.replace(' ', 'T') + 'Z');
  return isNaN(d.getTime()) ? s : d.toLocaleString();
}

export default function LeadsAdmin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  const load = () => {
    setLoading(true);
    api.leads
      .list()
      .then(setLeads)
      .finally(() => setLoading(false));
  };
  useEffect(load, []);

  const setStatus = async (id: number, status: string) => {
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status } : l)));
    await api.leads.update(id, { status });
  };
  const del = async (id: number) => {
    if (!confirm('Delete this lead?')) return;
    await api.leads.remove(id);
    setLeads((ls) => ls.filter((l) => l.id !== id));
  };

  const counts = STATUSES.reduce<Record<string, number>>(
    (acc, s) => ({ ...acc, [s]: leads.filter((l) => l.status === s).length }),
    {}
  );
  const shown = filter === 'all' ? leads : leads.filter((l) => l.status === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Leads <span className="text-slate-400 font-normal">({leads.length})</span>
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {['all', ...STATUSES].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition ${
                filter === s ? 'bg-nm-red text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s}
              {s !== 'all' && ` (${counts[s] || 0})`}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : shown.length === 0 ? (
        <p className="text-sm text-slate-500">
          {leads.length === 0 ? 'No leads yet — submissions from the contact form appear here.' : 'No leads in this status.'}
        </p>
      ) : (
        <div className="space-y-4">
          {shown.map((lead) => (
            <div key={lead.id} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">{lead.name}</p>
                  <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                    <Clock size={12} /> {fmtDate(lead.created_at)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={lead.status}
                    onChange={(e) => setStatus(lead.id, e.target.value)}
                    className={`text-xs font-medium capitalize rounded-full border px-2.5 py-1 cursor-pointer focus:outline-none ${
                      statusStyle[lead.status] || statusStyle.new
                    }`}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => del(lead.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600"
                    aria-label="Delete lead"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-sm">
                {lead.email && (
                  <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 text-slate-600 hover:text-nm-red">
                    <Mail size={14} /> {lead.email}
                  </a>
                )}
                {lead.phone && (
                  <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 text-slate-600 hover:text-nm-red">
                    <Phone size={14} /> {lead.phone}
                  </a>
                )}
                {lead.goal && (
                  <span className="flex items-center gap-1.5 text-slate-600 capitalize">
                    <Target size={14} /> {lead.goal}
                  </span>
                )}
              </div>

              {lead.message && (
                <p className="mt-3 text-sm text-slate-600 bg-slate-50 rounded-lg p-3 whitespace-pre-wrap">
                  {lead.message}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
