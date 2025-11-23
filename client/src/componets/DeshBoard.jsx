
  import { useState } from 'react';
  import ApiPreview from './apiPreview';
  import DataSetBuilder from './DatasetBuilder';
  import { useDispatch, useSelector } from 'react-redux';
  import { addRestData } from '../features/restData/restDataSlice';
import { useNavigate } from 'react-router-dom';

  const generateRandomNumber = () => Math.floor(Math.random() * 10000)
const generateRandomBoolean = () => Math.random() > 0.5
const generateRandomUrl = () => {
  const domains = ["example.com", "test.io", "demo.dev", "sample.org"]
  const domain = domains[Math.floor(Math.random() * domains.length)]
  return `https://${domain}/item-${Math.floor(Math.random() * 1000)}`
}


  const DeshBoard =({ onLogout })=> {
    const dispatch = useDispatch()
    const navigate = useNavigate()
      const {user,isLoading ,isSuccess ,isError , message }=useSelector(state=>state.auth)


    const [columns, setColumns] = useState([
      { id: '1', name: 'firstName', dataType: 'firstName' },
      { id: '2', name: 'email', dataType: 'email' },
    ]);
    const [apiName, setApiName] = useState('data');
    const [rows, setRows] = useState(50);
    const [data, setData] = useState([]);
    const [restData, setRestData] = useState({
      dataObj:[]
    });
    const {dataObj}=restData

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
    setLoading(true)
if(!user){
  navigate("/login")
}else{
      try {
      const fields = columns
        .map((col) => col.dataType)
        .filter((type) => !["randomNumber", "randomBoolean", "randomUrl", "coordinates"].includes(type))
        .join(",")

      const response = await fetch(
        fields
          ? `https://dummyjson.com/users?limit=${rows}&select=${fields}`
          : `https://dummyjson.com/users?limit=${rows}`,
      )
      const result = await response.json()

      const formattedData = result.users.map((user) => {
        const row = {}
        columns.forEach((col) => {
          if (col.dataType === "fullName") {
            row[col.name] = `${user.firstName || ""} ${user.lastName || ""}`.trim()
          } else if (col.dataType === "randomNumber") {
            row[col.name] = generateRandomNumber()
          } else if (col.dataType === "randomBoolean") {
            row[col.name] = generateRandomBoolean()
          } else if (col.dataType === "randomUrl") {
            row[col.name] = generateRandomUrl()
          } else if (col.dataType === "coordinates") {
            row[col.name] = `${user.address?.coordinates?.lat || 0}, ${user.address?.coordinates?.lng || 0}`
          } else if (col.dataType === "phone") {
            row[col.name] = user.phone || ""
          } else if (col.dataType === "userId") {
            row[col.name] = user.id || ""
          } else if (col.dataType === "company") {
            row[col.name] = user.company?.name || ""
          } else if (col.dataType === "jobTitle") {
            row[col.name] = user.company?.title || ""
          } else if (col.dataType === "address") {
            row[col.name] = `${user.address?.address || ""}, ${user.address?.city || ""}`
          } else if (col.dataType === "state") {
            row[col.name] = user.address?.state || ""
          } else if (col.dataType === "country") {
            row[col.name] = user.address?.country || ""
          } else if (col.dataType === "birthDate") {
            row[col.name] = user.birthDate || ""
          } else if (col.dataType === "image") {
            row[col.name] = user.image || ""
          } else {
            row[col.name] = user[col.dataType] || ""
          }
        })
        return row
      })

      setData(formattedData)
        setRestData({
    ...restData,
    dataObj: formattedData
  }); 
  dispatch(addRestData({ dataObj: formattedData }))
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
}
  }

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
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default DeshBoard