import { useSession, signIn } from "next-auth/react"
import Nav from "./Nav";


export default function Layout ({children}){
    const {data: session} = useSession()
  if (!session){
    return(
        <div>
            <div className="w-screen h-screen flex justify-center items-center">
                <div>
                    <button onClick={()=>signIn('google')} className="border border-purple-500 border-2 p-2 rounde-md">Login with Google</button>
                </div>
            </div>
        </div>
    )
  }
  return (
    <div className="bg-blue-300 min-h-screen flex">
      <Nav/>
      <div className="bg-white flex-grow py-2 px-2 mt-1 mr-1 rounded">{children}</div>
    </div>
  );
}