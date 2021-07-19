import Head from 'next/head'
import Header from "../components/Header";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/Image";
import {getSession, useSession} from "next-auth/client";
import Login from "../components/Login";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import {useState} from "react";
import db from "../firebase";
import Firebase from "firebase";
import firebase from "firebase";
import {useCollectionOnce} from "react-firebase-hooks/firestore";
import DocumentRow from "../components/DocumentRow";

export default function Home() {

    const [session] = useSession();
    const [snapshot] = useCollectionOnce(db.collection('userDocs').doc(session.user.email).collection('docs').orderBy('timestamp', 'desc'));
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState('');

    if(!session) return <Login />

    const createDocument = () => {
        if(!input) return;

        db.collection('userDocs').doc(session.user.email).collection('docs').add({
            fileName: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
        setShowModal(false);
    }

    const modal = (
        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
            <ModalBody>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="outline-none w-full" placeholder="Enter name of document..." onKeyDown={(e) => e.key === "Enter" && createDocument(e)} />
            </ModalBody>
            <ModalFooter >
                <Button color="blue" buttonType="link" onClick={(e) => setShowModal(false)} ripple="dark">Cancel</Button>
                <Button color="blue" onClick={createDocument} ripple="light">Create</Button>
            </ModalFooter>
        </Modal>
    )


  return (
    <div className="">
      <Head>
        <title>Rookas Docs App</title>
        <link rel="icon" href="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" />
      </Head>

        <Header />
        {modal}

        <section className="bg-[#F8F9FA] pb-10 px-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between py-6">
                    <h2 className="text-gray-700 text-lg">Start a new document</h2>
                    <Button color="gray" buttonType="outline" iconOnly={true} ripple="dark" className="border-0">
                        <Icon name="more_vert" size="3xl" />
                    </Button>
                </div>
                <div>
                    <div onClick={() => setShowModal(true)} className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                        <img loading="lazy" src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" />
                    </div>
                    <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
                </div>
            </div>
        </section>

        <section className="bg-white px-10 md:px-0">
            <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
                <div className="flex items-center justify-between pb-5">
                    <h2 className="font-medium flex-grow">My Documents</h2>
                    <p className="mr-12">Date created</p>
                    <Icon name="folder" size="3xl" color="gray" />
                </div>



            {snapshot?.docs.map(doc => (
                <DocumentRow id={doc.id} fileName={doc.data().fileName} date={doc.data().timestamp} key={doc.id} />
            ))}
            </div>
        </section>



      <footer className="flex flex-end items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://byrookas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Rookas
        </a>
      </footer>
    </div>
  )
}


export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}
