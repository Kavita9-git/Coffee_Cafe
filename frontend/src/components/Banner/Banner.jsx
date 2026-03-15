import React from 'react'
import BannerImg from '../../assets/website/coffee-white.png'
import BgTexture from '../../assets/website/coffee-texture.jpg'
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: "100%",
    width: "100%",
};

const Banner = () => {
    return (
        <>
            <div style={bgImage}>
                <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                        {/* Image Section */}
                        <div>
                            <img src={BannerImg} alt="" className="max-w-[430px] w-full mx-auto spin
                drop-shadow-xl"

                            />
                        </div>
                        {/* Text content Section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
                            <h1 className="text-3xl sm:text-4xl font-bold font-cursive">Premium Blen Coffee</h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-5">


                                Whether you prefer a bold, robust flavor or a lighter, more delicate taste, our blend offers a harmonious balance that satisfies every coffee lover's palate.
                            </p>

                            <div className="grid grid-cols-1  gap-6">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <GrSecure
                                            className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                                        <span>Premirm Coffee</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <IoFastFood
                                            className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                                        <span>Hot Coffee</span>
                                    </div>
                                      <div className="flex items-center gap-3">
                                        <GiFoodTruck
                                            className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                                        <span>Cold Coffee</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner