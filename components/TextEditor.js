import React, {useState} from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

// importing editor in here
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
    ssr: false,
})



const TextEditor = () => {

    const [editorState, setEditorState] = useState('')
    return (
        <div className="bg-[#f8f9FA] min-h-screen pb-16">
            <Editor toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto" editorClassName="mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-10" />
        </div>
    );
};

export default TextEditor;
