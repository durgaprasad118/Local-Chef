import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-3">
                <a href="#" className="flex items-center space-x-3">
                    <Image
                        src="https://dcassetcdn.com/design_img/2048987/3432/3432_10880944_2048987_205a15eb_thumbnail.png"
                        height={72}
                        width={72}
                        alt="Flowbite Logo"
                        className="h-16 object-contain"
                    />

                    <button className="bg-blue-500 hover:bg-blue-600 dark:bg-white dark:text-black text-white flex justify-center rounded-lg px-6 py-2 font-bold text-2xl">
                       Local Chef 
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
