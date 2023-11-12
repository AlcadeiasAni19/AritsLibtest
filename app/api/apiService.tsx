import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = 'https://identity.merlinapp.co.uk/api';
const SERVER_TOKEN = 'M3y2faQeFj6bGXDRHsNeAA=='

export const getEmployeeList = async () => {
  try {
    const employee = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_MASK_URL}/employee/list/1`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Insomnia/2023.5.6',
        'server-token': `${SERVER_TOKEN}`,
      },
    });

    if (!employee.ok) {
      throw new Error('Failed to fetch');
    }
    return await employee.json();
  } catch (error) {
    console.error('Error fetching employee list:', error);
    throw error; 
  }
};

export const Login = async(username: string, password:string) => {
    try {
        const user = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_MASK_URL}/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        if (!user.ok) {
            throw new Error('Failed to login');
          }
          console.log(NextResponse.json(user)); // response needs to include an Access-Control-Allow-Origin response header
          return NextResponse.json(user, {status: 200})
        } catch (error) {
          console.error('Error logging in:', error, {status:400});
          throw error; 
        }
}

// Have to define all other functions 
