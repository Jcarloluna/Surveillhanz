import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import LogInCard from "../components/LogInCard.jsx";
import { useSession,signIn,signOut } from 'next-auth/react';
export default function Login(){

    return(
    <div>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Surveillhanz | Log In</title>
        <link rel="icon" href="logo/Surveillhanz.ico"/>
    </Head>
    <LogInCard></LogInCard>
    </div>

    )
      
}