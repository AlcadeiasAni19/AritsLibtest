"use client";
import Button from "@components/library/Button";
import FormItemResponseProps from "@components/library/form/FormItemResponseProps";
import TextField from "@components/library/form/TextField";
import { Login } from "app/api/apiService";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const LoginForm = () => {
  const [FormData,setFormData] = useState<{Username: string, Password:string}>({Username:"",Password:""})

  const HandleClick = async () => {
    try {
      const loginResponse = await Login(FormData.Username, FormData.Password);
      console.log('Login successful:', loginResponse);
      
    } catch (error) {
      console.error('Login failed:', error);
      
    }
  };

  const HandleChange = (data: FormItemResponseProps,e:ChangeEvent<HTMLInputElement>)=> {
    setFormData({...FormData, [e.target.name]: data.data as string}) 
  }

  return (
    <div className="w-full max-w-md mt-96">
      <div
        className="bg-white shadow-md rounded px-32 pt-24 pb-32 mb-160"
      >
        <div className="mb-16">
          <TextField
            className="shadow appearance-none border rounded w-full py-8 px-12 mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Username"
            label="Username"
            labelClassName="block text-gray-700 text-sm font-bold mb-8"
            placeholder="Username"
            value={FormData.Username}
            onChange={(data,e)=>HandleChange(data,e)}
          />
          <TextField
            className="shadow appearance-none border rounded w-full py-8 px-12 mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Password"
            label="Password"
            labelClassName="block text-gray-700 text-sm font-bold mb-8"
            type="password"
            placeholder="********"
            value={FormData.Password}
            onChange={HandleChange}
          />
          {!FormData.Password && <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>}
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="hover:bg-blue-700 text-white font-bold py-8 px-16 rounded focus:outline-none focus:shadow-outline"
            iconName="heart"
            btnText="Sign In"
            variant="info"
            type="submit"
            clicked={HandleClick}
          />
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs">Abc</p>
    </div>
  );
};
export default LoginForm;
