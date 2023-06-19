import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const events = () => {
    const ratio = 450;
    return (
        <>
            <Head>
                <title>WMAC INDIA | Events</title>
                <link rel="shortcut icon" href="/logo-wmac.png" type="image/x-icon" />
            </Head>
            <div className="my-18 text-gray-800 text-center lg:text-left background-radial-gradient">
                <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
                    backgroundPosition: '10%',
                    backgroundImage: 'url("/header_images/events.jpg")',
                    height: '500px'
                }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
                        <div className="flex justify-center items-center h-full">
                            <div className="underline underline-offset-8 text-center text-white px-6 md:px-12">
                                <h1
                                    className="mb-4 text-4xl font-black tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                                    Even<span className="text-blue-600 dark:text-blue-500">ts</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- THE ACCOLADE AWARDS 2023 --> */}
            <div className="md:my-20 flex flex-col items-center container mx-auto lg:p-0 p-4">

                <h3 className="text-5xl font-black text-gray-800 my-10 uppercase">
                    Completed EVENTS:
                </h3>

                {/* <!-- THE ACCOLADE AWARDS 2023 --> */}
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="flex flex-col rounded-lg bg-gradient-to-r to-[#c19536] from-[#e7d16e] md:flex-row shadow-2xl">
                        <Image className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src="/events/accolade_2023/banner/banner.jpg" alt="" width={ratio} height={ratio} />
                        <div className="flex flex-col justify-between p-6 text-[#323e4f]">
                            <h5 className="mb-2 text-xl font-bold tracking-wide">
                                THE 2023 ACCOLADE AWARDS
                            </h5>
                            <div>
                                <h5 className="font-semibold mr-2">Date: 24 April 2023</h5>
                                <h5 className="font-semibold my-2">Venue: Open Air Theatre – Jadavpur University, Kolkata</h5>
                            </div>
                            <div className="inline-flex" role="group">
                                <Link href='/events/accolade_2023/pdf/The 2023 Accolades.pdf' target="blank"
                                    className="rounded-l inline-block px-6 py-2.5 bg-[#760000] text-white font-medium text-xs leading-tight uppercase hover:opacity-70 focus:outline-none focus:ring-0 active:bg-[#760000] transition duration-150 ease-in-out">
                                    More Details
                                </Link>
                                <button disabled
                                    className="rounded-r inline-block px-6 py-2.5 disabled:opacity-50 bg-[#760000] text-white font-medium text-xs leading-tight uppercase hover:opacity-70 focus:outline-none focus:ring-0 active:bg-[#760000] transition duration-150 ease-in-out">
                                    Register Here
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- THE ACCOLADE AWARDS 2023 --> */}
        </ >
    );
}

export default events;