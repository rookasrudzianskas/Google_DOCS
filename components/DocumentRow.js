import React from 'react';
import {useRouter} from "next/dist/client/router";
import Icon from "@material-tailwind/react/Icon";

const DocumentRow = ({id, fileName, date }) => {
    return (
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer mr-10 ml-10 mb-5">
            <Icon name="article" size="3xl" color="blue" />
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
        </div>
    );
};

export default DocumentRow;
