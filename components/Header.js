import React from 'react';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Header = () => {
    return (
        <div className=" sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
            <Button color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="h-20 w-20 border-0">
            <Icon name="menu" color="gray" size="3xl" />
            </Button>
            <Icon className="" name="description" size="5xl" color="blue" />
            <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>

            <div className="mx-5 md:mx-2 flex flex-grow items-center p-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>
        </div>
    );
};

export default Header;
