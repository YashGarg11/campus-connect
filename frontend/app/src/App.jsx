import { useEffect, useState } from 'react';
import AdminDashboard from './components/admin/dashboard';
import StudentDashboard from './components/student/dashboard';
import axios from './config/axios';

const config = {
  api: 'https://your-api-url.com'
};

const App = () => {

  const [dashboard, setdashboard] = useState('StudentDashboard');



  useEffect(() => {
    const fetchDetails = async () => {

      try {
        const response = await axios.get(`${config.api}/login`);
        const data = response.data.role;
        if (data == 'admin') {
          return setdashboard('AdminDashboard');

        }
        else {
          setdashboard('StudentDashboard');
        }

      }
      catch (error) {
        console.error("error fetching login details:", error);
        setdashboard('StudentDashboard');
      }
    }
    fetchDetails();
  }, [])


  const render = () => {
    if (dashboard === 'StudentDashboard') {
      return <StudentDashboard />;
    } else if (dashboard === 'AdminDashboard') {
      return <AdminDashboard />;
    } else {
      return <h2>Page Not Found</h2>;
    }
  }



  return (

    <>
      <div className='bg-white '>

        {render()}
      </div>

    </>

  );


}
export default App;