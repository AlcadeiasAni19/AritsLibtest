// import {NextRequest, NextResponse} from "next/server";
// import prisma from "../../../../prisma/client";

// export async function GET(request: NextRequest,{ params }: { params: { id: string } }) { 
//     try {
//         const persons = await prisma.person.findUnique({
//             where: {id: parseInt(params.id)}
//         }) 
//         if (!persons) {
//             return NextResponse.json({ message: "User not found!" },{status:400});
//         }
//         return NextResponse.json(persons, {status:200});
//     } catch (error) {
//         return NextResponse.json({ message: "Something went wrong!" },{status:400});
//     }       
// }

// export async function PATCH(request: NextRequest, {params}: {params: {id:string}}) {
//     try {
//         const body = await request.json ();
//         const persons = await prisma.person.findUnique({
//             where: {id: parseInt(params.id)}
//         })

//         if (!persons) {
//             return NextResponse.json({message: "User not found!" },{status:400});
//         }

//         const updatedperson = await prisma.person.update({
//             where: {id: persons.id},
//             data: {
//                 hobby: body.hobby,
//                 attribute: body.attribute
//             }
//         })

//         return NextResponse.json(updatedperson, {status: 200});
//     } catch (error) {
//         return NextResponse.json({ message: "Something went wrong!" },{status:400});
//     }
// }