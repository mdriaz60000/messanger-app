/* eslint-disable react/prop-types */

// className=" w-full max-w-screen-2xl 2xl:px-20 xl:px-16 lg:px-16 md:px-10 sm:px-4 px-2 mx-auto "
const Container = ({children}) => {
    return (
        <div className=" w-full max-w-screen-2xl 2xl:px-24 xl:px-16 lg:px-12 md:px-10 sm:px-4 px-2 mx-auto ">
           { children}
        </div>
    );
};

export default Container;