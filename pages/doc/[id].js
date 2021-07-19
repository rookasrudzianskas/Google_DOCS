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
    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection('userDocs').doc(session.user.email).collection('docs').doc(id));
    const router = useRouter();

    if(!session) return <Login />;

    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">
                    <Icon name="description" size="5xl" color="blue" />
                </span>
            </header>
        </div>
    );
};

export default Doc;
