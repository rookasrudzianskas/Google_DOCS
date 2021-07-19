import React from 'react';
import {useRouter} from "next/dist/client/router";
import db from "../../firebase";
import {useDocumentOnce} from "react-firebase-hooks/firestore";
import {getSession, signOut, useSession} from "next-auth/client";
import Login from "../../components/Login";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Doc = () => {

    const [session] = useSession();

    if(!session) return <Login />;

    return (
        <div>
            <h1>Text Editor</h1>
        </div>
    );
};

export default Doc;
