import Head from "next/head";
import Image from "next/image";

const gallery = () => {
    const ratio = 450;

    let i = 0;
    const numList = [];
    while (i < 24) {
        numList.push(i + 1);
        i++;
    };

    return (
        <>
            <Head>
                <title>WMAC INDIA | Showcase</title>
                <link rel="shortcut icon" href="/logo-wmac.png" type="image/x-icon" />
            </Head>
            <section className="text-gray-600 body-font lg:px-0 md:px-0 px-2">
                <div
                    className="container lg:pb-8 lg:my-24 mx-auto lg:shadow-2xl focus:shadow-blue-50 hover:shadow-blue-50 lg:bg-white rounded-xl lg:rounded-none">
                    <div className="flex w-full lg:mb-20 flex-col">
                        <div className="p-8">
                            <h1 className="block mb-5 font-black tracking-wide leading-snug text-black text-5xl">
                                Our Gall<span className="text-blue-400">ery</span></h1>
                            <p className="font-medium text-lg">
                                Some moments of glory for our WMAC India Members
                            </p>
                        </div>
                    </div>
                    < div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-8 px-2" >
                        {
                            numList.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <div className="flex relative h-[400px]" >
                                            <Image alt="gallery" priority={e == 2 ? true : false}
                                                className="absolute inset-0 w-full h-full object-cover object-center shadow-xl hover:shadow-gray-600 hover:rounded-2xl lg:hover:scale-110 duration-300 ease-in-out"
                                                src={`/gallery_photos/${e}.${e != 20 ? 'jpeg' : 'jpg'}`} width={ratio} height={ratio} />
                                            {/* <div
                                            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 duration-300 ease-in-out overflow-scroll">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                            <p className="leading-relaxed">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt, quidem itaque
                                                ratione tempore laudantium eum impedit sunt velit quia at maxime sed facere qui
                                                voluptatibus commodi delectus laborum? Beatae repudiandae voluptatum possimus odit eum
                                                quibusdam, necessitatibus aspernatur commodi ab suscipit veniam magni debitis alias
                                                officiis modi sunt perferendis veritatis laudantium impedit a sit! Natus vitae nobis
                                                saepe vero debitis quo voluptatum quam accusamus quod commodi, sequi perspiciatis
                                                repellat ex iure esse suscipit quasi? Numquam!
                                            </p>
                                        </div> */}
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div >
                </div >
            </section >
        </>
    );
}

export default gallery;