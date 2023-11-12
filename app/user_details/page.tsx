"use client";

import { useEffect, useState } from "react";
import { getEmployeeList } from "app/api/apiService";

interface EmployeeProps {
  companyId: null,
  companyName: string,
  designation: string,
  email: string,
  employeeId: number,
  firstName: string,
  image: string|null,
  isActive: number,
  lastName: string,
  projectId: number,
  projectName: string,
  roleId: number,
  roleName: string,
  userId: number
}

const UserDetailsPage = () => {

  const [employee,setEmployee] = useState<EmployeeProps>({companyId:null, companyName:"", designation:"",
email:"", employeeId:0, firstName:"",image:null, isActive:0,lastName:"", projectId:0, projectName:"", roleId:0,roleName:"",userId:0 });
const [employeelist,setEmployeeList] = useState<EmployeeProps[]>([]);
  
useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeList = await getEmployeeList();
        console.log(employeeList.results);
        setEmployeeList(employeeList.results);
        // Process or use the fetched data as needed in your component
      } catch (error) {
        // Handle errors or display an error message
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      {employeelist.length>0 ? (
        employeelist.map((employee:any)=>{
          const {employeeId, firstName, lastName} = employee;
          return (
            <div key={employeeId}>
              <p><span>{firstName}  </span><span>{lastName}</span></p>
            </div>
          )
        })
      ): (
        <p>Loading...</p>
      )}
    </div>
  )
}
export default UserDetailsPage