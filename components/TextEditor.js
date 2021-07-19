import React, {useState} from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import {EditorState} from "draft-js";
import db from "../firebase";
import {session} from "next-auth/client";
import {useRouter} from "next/dist/client/router";

// importing editor in here
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
    ssr: false,
})



const TextEditor = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const router = useRouter();
    const {id} = router.query;

    const onEditorStateChange = (editorState) => {
      setEditorState(editorState);

      db.collection('userDocs').doc(session.user.email).collection('docs').doc(id);
    };

    // console.log(editorState);

    return (
        <div className="bg-[#f8f9FA] min-h-screen pb-16">
            <Editor onEditorStateChange={onEditorStateChange} toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto" editorClassName="mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-10" />
        </div>
    );
};

export default TextEditor;
