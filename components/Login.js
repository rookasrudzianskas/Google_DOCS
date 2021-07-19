import React from 'react';
import Head from "next/head";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/Image";
import {signIn} from "next-auth/client";
import Button from "@material-tailwind/react/Button";


const Login = () => {

    const signIn = () => {

    }
    return (
        <div className="">
            <Head>
                <title>Rookas Docs App Login</title>
                <link rel="icon" href="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" />
            </Head>

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" height="300" width="500" alt=""/>
                <Button className="w-44 mt-10" color="blue" buttonType="filled" ripples="light" onClick={signIn}>Sign In To Docs</Button>
            </div>
        </div>
    );
};

export default Login;
