import React from 'react';
import {useRouter} from "next/dist/client/router";
import Icon from "@material-tailwind/react/Icon";

const DocumentRow = ({id, fileName, date }) => {
    return (
        <div>
            <Icon name="article" size="3xl" color="blue" />
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
        </div>
    );
};

export default DocumentRow;
