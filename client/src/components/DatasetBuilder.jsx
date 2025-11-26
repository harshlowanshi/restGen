import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";

const dataTypes = [
  "firstName",
  "lastName",
  "fullName",
  "email",
  "username",
  "userId",
  "phone",
  "company",
  "jobTitle",
  "address",
  "city",
  "state",
  "country",
  "age",
  "randomNumber",
  "randomBoolean",
  "randomUrl",
  "coordinates",
  "birthDate",
  "image",
];

const DataSetBuilder = ({
  columns,
  onAddColumn,
  onDeleteColumn,
  onUpdateColumn,
  apiName,
  onApiNameChange,
  rows,
  onRowsChange,
  onGenerate,
  loading,
}) => {
  const { restDatas, isLoading, isSuccess, isError } = useSelector(
    state => state.restData
  );

  return (
    <div className="space-y-4">
      {/* Build Your Dataset Card */}
      <div className="bg-slate-800 border border-teal-500/20 rounded-xl p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-teal-300">
          Build Your Dataset
        </h2>

        <div className="space-y-3 mb-6">
          {columns.map((col) => (
            <div
              key={col.id}
              className="bg-slate-700/50 border border-teal-500/20 rounded-lg p-4 flex items-end gap-3 hover:bg-slate-700/70 transition-all"
            >
              <div className="flex-1">
                <label className="block text-xs font-semibold text-teal-300 mb-1.5">
                  Column Title
                </label>
                <input
                  type="text"
                  value={col.name}
                  onChange={(e) =>
                    onUpdateColumn(col.id, e.target.value, col.dataType)
                  }
                  className="w-full px-3 py-2 bg-slate-600 border border-teal-500/30 rounded-md text-sm text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="Column name"
                />
              </div>

              <div className="flex-1">
                <label className="block text-xs font-semibold text-teal-300 mb-1.5">
                  Data Type
                </label>
                <select
                  value={col.dataType}
                  onChange={(e) =>
                    onUpdateColumn(col.id, col.name, e.target.value)
                  }
                  className="w-full px-3 py-2 bg-slate-600 border border-teal-500/30 rounded-md text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 transition-all"
                >
                  {dataTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => onDeleteColumn(col.id)}
                className="px-3 py-2 text-slate-300 hover:text-orange-400 border border-orange-500/30 rounded-md hover:bg-orange-500/10 transition-all"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Add Column Button */}
        <button
          onClick={onAddColumn}
          className="w-full border border-teal-500/50 hover:bg-teal-500/10 text-teal-300 font-medium py-2 px-4 rounded-lg transition-all hover:border-teal-400"
        >
          + Add Column
        </button>
      </div>

      {/* Configuration Card */}
      <div className="bg-slate-800 border border-teal-500/20 rounded-xl p-6 shadow-xl">
        <h3 className="text-lg font-bold mb-4 text-teal-300">Configuration</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              API Name
            </label>
            <input
              type="text"
              value={apiName}
              onChange={(e) => onApiNameChange(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-teal-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 transition-all"
              placeholder="Dataset name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              Number of Rows
            </label>
            <input
              type="number"
              value={rows}
              onChange={(e) =>
                onRowsChange(
                  Math.min(Math.max(parseInt(e.target.value) || 1, 1), 100)
                )
              }
              min="1"
              max="100"
              className="w-full px-4 py-2 bg-slate-700 border border-teal-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
          </div>

          <div>
          <p className="text-xs text-slate-400 mb-4">
  Preview URL :-{" "}
  {restDatas && restDatas._id ? (
    <a
      href={`https://restgen.onrender.com/api/restData/${restDatas._id}/${apiName}`}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono   text-teal-300 underline hover:text-teal-400  break-all"
    >
     https://restgen.onrender.com/api/restData/{restDatas._id}/{apiName}
    </a>
  ) : (
    <span className="  font-mono text-slate-500 cursor-text  break-all   ">
    https://restgen.onrender.com/api/restData/../{apiName}
    </span>
  )}
</p>
          </div>

          <button
            onClick={onGenerate}
            disabled={loading || columns.length === 0}
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? "Generating..." : "Generate API"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataSetBuilder;
