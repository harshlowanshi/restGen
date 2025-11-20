
import { useState } from 'react';
import ApiPreview from './apiPreview';
import DataSetBuilder from './dataSetBuilder';


const DeshBoard =({ onLogout })=> {
   const [columns, setColumns] = useState([
    { id: '1', name: 'firstName', dataType: 'firstName' },
    { id: '2', name: 'email', dataType: 'email' },
  ]);
  const [apiName, setApiName] = useState('User Dataset');
  const [rows, setRows] = useState(50);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddColumn = () => {
    const newColumn = {
      id: Date.now().toString(),
      name: 'New Column',
      dataType: 'firstName',
    };
    setColumns([...columns, newColumn]);
  };

  const handleDeleteColumn = (id) => {
    setColumns(columns.filter((col) => col.id !== id));
  };

  const handleUpdateColumn = (id, name, dataType) => {
    setColumns(
      columns.map((col) =>
        col.id === id ? { ...col, name, dataType } : col
      )
    );
  };

  const handleGenerateAPI = async () => {
    setLoading(true);
    try {
      const fields = columns.map((col) => col.dataType).join(',');
      const response = await fetch(`https://dummyjson.com/users?limit=${rows}&select=${fields}`);
      const result = await response.json();
      
      const formattedData = result.users.map((user) => {
        const row = {};
        columns.forEach((col) => {
          if (col.dataType === 'fullName') {
            row[col.name] = `${user.firstName || ''} ${user.lastName || ''}`.trim();
          } else {
            row[col.name] = user[col.dataType] || '';
          }
        });
        return row;
      });
      
      setData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (format) => {
    if (format === 'json') {
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${apiName}.json`;
      a.click();
    } else {
      const headers = columns.map((col) => col.name);
      const rows = data.map((row) =>
        headers.map((header) => `"${row[header] || ''}"`).join(',')
      );
      const csv = [headers.join(','), ...rows].join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${apiName}.csv`;
      a.click();
    }
  };

  return (
   <div className="animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-8">
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <DataSetBuilder
              columns={columns}
              onAddColumn={handleAddColumn}
              onDeleteColumn={handleDeleteColumn}
              onUpdateColumn={handleUpdateColumn}
              apiName={apiName}
              onApiNameChange={setApiName}
              rows={rows}
              onRowsChange={setRows}
              onGenerate={handleGenerateAPI}
              loading={loading}
            />
          </div>

          {/* Right Column */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <ApiPreview
              data={data}
              columns={columns}
              dataCount={data.length}
              onDownload={handleDownload}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeshBoard