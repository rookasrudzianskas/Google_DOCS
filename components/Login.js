import React from 'react';
import Head from "next/head";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/Image";
import {signIn} from "next-auth/client";


const Login = () => {
    return (
        <div className="">
            <Head>
                <title>Rookas Docs App Login</title>
                <link rel="icon" href="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" />
            </Head>

            <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" height="300" width="500" alt=""/>
        </div>
    );
};

export default Login;
