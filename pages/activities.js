import TestCom from "@/components/TestCom";
import Head from "next/head";
import Image from "next/image";

const activities = () => {

    const ratio = 450;

    const activityDetails = [
        {
            projName: "Project Indianisation",
            desc: "Modern Science as they solve the mysteries of science, give proof of the accuracy of the Indian Vedic Science and Way of Life.Project Indianisation is an initiative of our organisation to bridge Modern and Vedic Science and Culture to make a greater and more smooth way of life.",
            imgSrc: "indianisation.jpg",
            bgColor: "bg-[#d15638]",
            txtColor: "text-[#f7edcb]"

        }, {
            projName: "Project Shakti",
            desc: "Women are the backbone of every society. An educated and trained women force means an investment to the future of the nation.Project Shakti focuses on skill development, self defense and educational policies for Women Empowerment for the greater good of the society.",
            imgSrc: "shakti.jpg",
            bgColor: "bg-white",
            txtColor: "text-[#2b2b7a]"
        }, {
            projName: "Project Calamity",
            desc: " An initiative aiming to prepare all generations of human race against the adversities of Mother Nature.Project Calamity aims to equip our fellow citizens to take precautionary measures during adversities like Earthquakes, Tsunamis, Floods, Draughts, etc.",
            imgSrc: "calamity.jpg",
            bgColor: "bg-[#338959]",
            txtColor: "text-white"
        },
    ];

    return (
        <>
            <Head>
                <title>WMAC INDIA | Activities</title>
                <link rel="shortcut icon" href="/logo-wmac.png" type="image/x-icon" />
            </Head>
            {/* <!-- The image --> */}
            <div className="my-18 text-gray-800 text-center lg:text-left background-radial-gradient">
                {/* <!-- Hero --> */}
                <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
                    backgroundPosition: '10%',
                    backgroundImage: 'url("/header_images/activities.jpg")',
                    height: '500px'
                }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
                        <div className="flex justify-center items-center h-full">
                            <div className="underline underline-offset-8 text-center text-white px-6 md:px-12">
                                <h1
                                    className="mb-4 text-4xl font-black tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                                    Activiti<span className="text-blue-600 dark:text-blue-500">es</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- The image --> */}
            </div>
            {/* <!-- The image --> */}

            {/* <!-- Activities --> */}
            <div className="flex flex-col items-center my-10 lg:p-0 p-4 container mx-auto">
                <h3 className="text-5xl font-bold mb-6 text-gray-800">
                    Our Activities:
                </h3>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-4 lg:w-full mt-10">
                    {activityDetails.map((e, i) => <TestCom key={i} element={e} />)}
                </div>
            </div>
            {/* <!-- Activities --> */}
        </>
    );
}

export default activities;