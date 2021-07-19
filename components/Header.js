import React from 'react';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Header = () => {
    return (
        <div className=" sticky top-0 z-50 flex items-center">
            <Button color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="h-20 w-20 border-0">
            <Icon name="menu" color="blue" size="3xl" />
            </Button>
            <Icon className="" name="description" size="5xl" color="blue" />
            <h1 className="hidden md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>
        </div>
    );
};

export default Header;
