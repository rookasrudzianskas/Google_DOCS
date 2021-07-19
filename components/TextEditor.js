import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

// importing editor in here
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
    ssr: false,
})


const TextEditor = () => {
    return (
        <div className="bg-[#f8f9FA] min-h-screen pb-16">
            <Editor toolbarClassName="flex sticky top-0 z-50" />
        </div>
    );
};

export default TextEditor;
