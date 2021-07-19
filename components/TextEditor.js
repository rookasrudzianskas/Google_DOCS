import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

// importing editor in here
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
    ssr: false,
})


const TextEditor = () => {
    return (
        <div>

            <h1>Text Editor</h1>
        </div>
    );
};

export default TextEditor;
