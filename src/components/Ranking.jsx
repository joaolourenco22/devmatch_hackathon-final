import React from 'react';

export default function Ranking({ candidates = [], selectedIds = [], onToggleSelect, activeId, onActiveChange }) {
  return (
    <div className="ui-panel p-0 overflow-hidden">
      <div className="max-h-[420px] overflow-y-auto">
      <table className="min-w-full w-full table-auto text-sm">
        <thead className="sticky top-0 z-10 bg-violet-50/90 backdrop-blur supports-[backdrop-filter]:bg-violet-50/80 border-b border-violet-100">
          <tr className="text-left text-violet-800 text-xs uppercase tracking-wide">
            <th className="p-2">Comparar</th>
            <th className="p-2">Nome</th>
            <th className="p-2">Cargo</th>
            <th className="p-2 text-right">Hard</th>
            <th className="p-2 text-right">Soft</th>
            <th className="p-2 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => {
            const checked = selectedIds.includes(c._id);
            const active = activeId === c._id;
            return (
              <tr key={c._id} className={`${active ? 'bg-violet-50/60' : 'hover:bg-gray-50'} border-t`}>
                <td className="p-2">
                  <input
                    aria-label={`Selecionar ${c.name} para comparação`}
                    type="checkbox" className="accent-violet-600"
                    checked={checked}
                    onChange={() => onToggleSelect(c._id)}
                  />
                </td>
                <td className="p-2">
                  <button
                    onClick={() => onActiveChange(c._id)}
                    className={`underline-offset-2 hover:underline ${activeId === c._id ? 'font-semibold text-violet-700' : ''}`}
                  >
                    {c.name}
                  </button>
                </td>
                <td className="p-2"><span className="ui-chip text-xs">{c.role}</span></td>
                <td className="p-2 text-right tabular-nums">{Math.round(c.hard_score)}</td>
                <td className="p-2 text-right tabular-nums">{c.soft_score ? Math.round(c.soft_score) : '—'}</td>
                <td className="p-2 text-right tabular-nums">{c.total_score ? Math.round(c.total_score) : '—'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}



