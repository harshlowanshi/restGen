

const ApiPreview =({
  data,
  columns,
  dataCount,
  onDownload,
}) => {
  return (
     <div className="bg-slate-800 border border-teal-500/20 rounded-xl p-6 flex flex-col h-full shadow-xl"
  style={{ maxHeight: '720px' }}>
      <h2 className="text-xl font-bold mb-6 text-teal-300">
        API Preview
      </h2>

      {data.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <p className="text-slate-300 text-sm mb-2">No data generated yet</p>
            <p className="text-slate-400 text-xs">
              Configure your dataset and click "Generate API" to see preview
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="flex-1 overflow-auto mb-4 border border-teal-500/20 rounded-lg">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-700 border-b border-teal-500/20">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.id}
                      className="px-4 py-3 text-left font-semibold text-teal-300"
                    >
                      {col.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-teal-500/10 hover:bg-slate-700/30 transition-colors"
                  >
                    {columns.map((col) => (
                      <td
                        key={col.id}
                        className="px-4 py-3 text-slate-300 text-xs"
                      >
                        {String(row[col.name] || '-')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-teal-500/20">
            <p className="text-sm text-slate-300">
              Showing <span className="font-semibold text-teal-300">{dataCount}</span> results
            </p>

            <div className="flex items-center gap-2">
              <button className="px-3 py-2 text-slate-200 border border-teal-500/30 rounded-lg hover:bg-teal-500/10 transition-all text-sm font-medium hover:text-teal-300">
                Refresh
              </button>

              <button
                onClick={() => onDownload('json')}
                className="px-3 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-medium rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg"
              >
                Download JSON
              </button>

              <button
                onClick={() => onDownload('csv')}
                className="px-3 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-medium rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg"
              >
                Download CSV
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ApiPreview
