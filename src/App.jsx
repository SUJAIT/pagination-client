import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import Card from './Component/AlldataCard/Card';

function App() {
  const {totalResult} = useLoaderData()
  const [datas,setDatas] = useState([]);
  const [currentPage,setCurrentPage] = useState(0);
  const [itemsPerPage,setItemsPerPage] = useState(10)
  
  
  const totalPages = Math.ceil(totalResult / itemsPerPage);


  const pageNumbers = [...Array(totalPages).keys()]

console.log(pageNumbers)
  const options = [8,10,20]
function handleSelectChange(event){
  setItemsPerPage(parseInt(event.target.value));
  setCurrentPage(0)
}



//
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/alldata?page=${currentPage}&limit=${itemsPerPage}`);

            const data = await response.json();
            setDatas(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage]);

//



  // useEffect(()=>{
  //   fetch('http://localhost:5000/alldata')
  //   .then(res => res.json())
  //   .then(data => setDatas(data))
  // },[])

  return (
    <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
    {
datas.map(data => <Card key={data._id} data={data}> </Card>)
    }
   </div>
   <p>CurrentPage:{itemsPerPage} & Page Data: {currentPage}</p>
   <div className='pagination flex flex-row justify-center gap-2'>
    {
      pageNumbers.map(number => 
      <div>
        <div className="join ">
  <button  key={number} className="join-item btn"
  onClick={() => setCurrentPage(number)}
  >{number}</button>
</div>
      </div>)
    }
    <select value={itemsPerPage} onChange={handleSelectChange}>
      {
        options.map(option =>(
          <option key={option} value={option}>
            {option}
          </option>
        ))
      }
    </select>

   </div>

    </div>

  )
}

export default App
