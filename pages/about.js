import Image from "next/image";
import MemberCom from '../components/MemberCom';
import Head from "next/head";

const about = () => {

    const ratio = 500;

    const memberList = [
        {
            objPos: "25% 25%",
            imgUrl: "sensei_anurag_sengupta.jpg",
            memName: "Sensei Anurag Sengupta",
            memPost: "Vice President",
            useColor: "#d1d0a3"
        }, {
            objPos: "25% 25%",
            imgUrl: "shihan_subir_bagchi.jpg",
            memName: "Shihan Subir Bagchi",
            memPost: "Chairman of the Referee Commision",
            useColor: "#ebf8b8"
        }, {
            objPos: "60% 25%",
            imgUrl: "sensei_rohan_ganguly.jpg",
            memName: "Sensei Rohan Ganguly",
            memPost: "Secretary General",
            useColor: "#a78a7f"
        }, {
            objPos: "25% 25%",
            imgUrl: "ms_patottri_mukherjee.jpg",
            memName: "Sm. Patottri Mukherjee",
            memPost: "Secretary of Treasury",
            useColor: "#9d789b"
        }, {
            objPos: "50% -5%",
            imgUrl: "shri_saptak_sarkar.jpg",
            memName: "Shri Saptak Sarkar",
            memPost: "Secretary of Administration",
            useColor: "#0a75a7"
        }, {
            objPos: "50%",
            imgUrl: "dipika_biswas.jpg",
            memName: "Sensei Dipika Biswas",
            memPost: "Secretary of Events",
            useColor: "#645CBB"
        }, {
            objPos: "50% 25%",
            imgUrl: "sensei_aritri_dey.jpg",
            memName: "Sensei Aritri Dey",
            memPost: "Secretary of Cooperation",
            useColor: "#00d9c0"
        }, {
            objPos: "25% 25%",
            imgUrl: "sensei_amaendra_das.jpg",
            memName: "Shri Amarendra Das",
            memPost: "Secretary of Social Projects",
            useColor: "#466365"
        }, {
            objPos: "25% 25%",
            imgUrl: "sensei_preet_kaur.jpg",
            memName: "Sensei Preet Kaur",
            memPost: "Secretary of Communication",
            useColor: "#ffe787"
        }, {
            objPos: "25% 25%",
            imgUrl: "sensei_susneha_saha.jpg",
            memName: "Sensei Susneha Saha",
            memPost: "Secretary of Social Innovation",
            useColor: "#aaa694"
        }, {
            objPos: "25% 25%",
            imgUrl: "sensei_mainak_biswas.jpg",
            memName: "Sensei Mainak Biswas",
            memPost: "Chief of Interns",
            useColor: "#38302e"
        }, {
            objPos: "25% 25%",
            imgUrl: "sm_anusha_gayen.jpg",
            memName: "Sm. Anusha Gayen",
            memPost: "Secretary of Public Relations",
            useColor: "#9d789b"
        }, {
            objPos: "50% -5%",
            imgUrl: "abhinava_mondal.jpg",
            memName: "Shri Abhinava Mondal",
            memPost: "Intern Official",
            useColor: "#B9F3FC"
        }, {
            objPos: "25% 0%",
            imgUrl: "shri_avinandan_saha.jpg",
            memName: "Shri Avinandan Saha",
            memPost: "Intern Official",
            useColor: "#69a2b0"
        }, {
            objPos: "25% 25%",
            imgUrl: "shri_rupam_das.jpg",
            memName: "Shri Rupam Das",
            memPost: "Content Creation",
            useColor: "#a79ab2"
        },
    ];

    return (
        <>
            <Head>
                <title>WMAC INDIA | About</title>
                <link rel="shortcut icon" href="/logo-wmac.png" type="image/x-icon" />
            </Head>
            <div className="my-18 text-gray-800 text-center lg:text-left background-radial-gradient">
                {/* <!-- Hero --> */}
                <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
                    backgroundPosition: '10%',
                    backgroundImage: 'url("/header_images/india_img.jpg")',
                    height: '500px'
                }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
                        <div className="flex justify-center items-center h-full">
                            <div className="underline underline-offset-8 text-center text-white px-6 md:px-12">
                                <h1
                                    className="mb-4 text-4xl font-black tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                                    About <span className="text-blue-600 dark:text-blue-500">Us</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                {/* <!-- About Section --> */}

                {/* <!-- Patreons and Advisors --> */}
                <section
                    className="lg:mx-44 m-5 md:m-10 text-gray-700 bg-[#ecf7ff] p-4 md:p-8 lg:p-16 rounded-xl shadow-2xl shadow-[#96bfda]">
                    <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto mb-12">
                        <h3 className="lg:text-6xl text-4xl lg:font-extrabold font-bold tracking-wide mb-6 text-gray-800">
                            Patrons and Advisors
                        </h3>
                    </div>
                    <br />
                    {/* <!-- Prof Chiranjib Bhattacharya --> */}
                    <div className="grid md:grid-cols-1 gap-3 lg:gap-12 text-center mt-12">
                        <div className="mb-12 md:mb-0">
                            <div className="flex justify-center mb-6">
                                <Image src="/members_photos/prof_chiranjib_bhattacharya.jpg"
                                    className="rounded-full shadow-lg lg:w-[20rem] w-64" alt='' width={ratio} height={ratio} />
                            </div>
                            <h5 className="text-xl font-bold">Prof. (Dr.) Chiranjib Bhattacharya</h5>
                            <div className="my-2">
                                <p className="font-medium text-base">
                                    President - West Bengal Council for Higher Secondary Education
                                </p>
                                <p className="font-medium text-base">Pro-Vice Chancellor of Jadavpur University</p>
                            </div>
                            <h6 className="font-semibold text-2xl text-blue-600 mb-4">Patron of WMAC-INDIA</h6>
                        </div>
                    </div>
                    {/* <!-- Prof Chiranjib Bhattacharya --> */}
                </section>
                {/* <!-- Patreons and Advisors --> */}
                <div className="my-24">
                    <hr className="my-24 mx-auto w-56 h-2 rounded border-0 md:my-10 bg-gray-700" />
                </div>
                {/* <!-- Members Only --> */}
                <section className="lg:my-20 lg:mx-44 m-5 md:m-10 text-gray-700">
                    {/* <!-- Shihan Dai Koustav Sarkar --> */}
                    <div className="flex flex-row justify-center">
                        <div className="block rounded-lg shadow-md lg:hover:shadow-[#FFD700] cursor-pointer lg:w-[70%] md:w- bg-white duration-300">
                            <div className="overflow-hidden rounded-t-lg h-28" style={{ backgroundColor: '#3185fc' }}></div>
                            <div
                                className="lg:w-[20rem] w-64 -mt-12 overflow-hidden border-4 border-white rounded-full mx-auto bg-white">
                                <Image src="/members_photos/sensei_kaustav_sarkar.jpg"
                                    style={{ width: '300px', height: '300px', objectFit: 'cover', objectPosition: '25% 5%', transform: 'scale(2)' }} alt='' width={ratio} height={ratio} />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-4xl font-bold mb-4">Shihan Dai Koustav Sarkar</h4>
                                <p className="mt-4 font-semibold text-2xl">
                                    National Director, President
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="my-24">
                        <hr className="my-24 mx-auto w-56 h-2 rounded border-0 md:my-10 bg-gray-700" />
                    </div>
                    {/* <!-- Shihan Dai Kaustav Sarkar --> */}
                    <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto my-10 py-5">
                        <h3 className="lg:text-6xl md:text-5xl text-4xl font-extrabold tracking-wide mb-6 text-gray-800">Members</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        {memberList.map((e, i) =>
                            <MemberCom
                                imgUrl={e.imgUrl}
                                memName={e.memName}
                                memPost={e.memPost}
                                objPos={e.objPos}
                                useColor={e.useColor}
                                key={i} />
                        )}
                    </div>
                </section>
                {/* <!-- Members Only --> */}

                {/* <!-- About Section --> */}
            </div>
        </>
    );
}

export default about;