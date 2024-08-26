import { useState } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
    src: string;
    alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    console.log("Profile Image")

    return (
        <>
            <div
                className="cursor-pointer overflow-hidden rounded-full transition-transform duration-200 ease-in-out hover:scale-110"
                onClick={openModal}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={100}
                    height={100}
                    className="rounded-full h-full object-cover"
                />
            </div>

            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative max-w-full max-h-full overflow-hidden rounded-lg">
                        <Image
                            src={src}
                            alt={alt}
                            width={500}
                            height={500}
                            className="rounded-full h-full object-cover sm:max-w-[90%] sm:max-h-[90%]" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileImage;
