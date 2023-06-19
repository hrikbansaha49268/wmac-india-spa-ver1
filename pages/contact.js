import Link from "next/link";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Head from "next/head";

const Contact = () => {
    const emailIdList = ['administration@wmacindia.co.in', 'events@wmacindia.co.in', 'director@wmacindia.co.in'];

    const contactList = [
        {
            role: 'INTERNSHIP & MEMBERSHIP',
            designation: 'Administration',
            theName: 'Shri Saptak Sarkar',
            emailIdSeq: 0
        }, {
            role: 'EVENTS',
            designation: 'Events',
            theName: 'Sensei Dipika Biswas',
            emailIdSeq: 1
        }, {
            role: 'PROJECTS',
            designation: 'Social Projects',
            theName: 'Shri Amarendra Das',
            emailIdSeq: 1
        }, {
            role: 'COMMUNICATION',
            designation: 'Communications',
            theName: 'Sensei Preet Kaur',
            emailIdSeq: 0
        },
    ];

    return (
        <>
            <Head>
                <title>WMAC INDIA | Contact</title>
                <link rel="shortcut icon" href="/logo-wmac.png" type="image/x-icon" />
            </Head>
            <div className="relative overflow-hidden bg-no-repeat bg-cover"
                style={{
                    backgroundPosition: '10%',
                    backgroundImage: 'url("/header_images/contact_us.jpg")',
                    height: '350px'
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                    <div className="flex justify-center items-center h-full">
                        <div className="underline underline-offset-8 text-center text-white px-6 md:px-12">
                            <h1
                                className="mb-4 text-4xl font-black tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                                Contact <span className="text-blue-600 dark:text-blue-500">Us</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:justify-center container mx-auto" >
                <div className="flex justify-center items-center">
                    <div className="mx-auto my-4 px-4">
                        <div className="py-12">
                            <div className="flex flex-col text-black">
                                <h1 className="text-5xl font-extrabold">Contact Address</h1>
                                <small className="mt-5 text-2xl font-semibold text-black">World Martial Arts Committee -
                                    India</small>
                                <h1><small className="text-2xl font-semibold text-gray-500">
                                    277, Nayabad, Panchasayar, Kolkata 700094</small></h1>
                            </div>
                            <br />
                            <div className="text-black flex flex-col my-4">
                                {/* Koustav Sarkar */}
                                <div className="my-16 w-full mx-auto">
                                    <div className="rounded-lg shadow-lg bg-white text-center">
                                        <div className="font-bold py-3 px-6 border-b border-gray-300 text-2xl">
                                            HEAD OF ORGANISATION
                                        </div>
                                        <div className="p-6">
                                            <h5 className="text-blue-600 text-xl font-bold mb-2">Shihan Dai Koustav Sarkar</h5>
                                            <div className="font-bold">
                                                <p className="text-gray-700 text-base">
                                                    President
                                                </p>
                                                <p className="text-gray-700 text-base mb-2">
                                                    National Director
                                                </p>
                                            </div>
                                        </div>
                                        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                                            <p>{emailIdList[2]}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Koustav Sarkar */}
                                <h1
                                    className="mb-4 text-4xl font-extrabold tracking-wide leading-none text-gray-900 md:text-5xl lg:text-6xl">
                                    Contact <span className="mt-2 text-blue-600">Specifics:</span></h1>
                                <br />
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-4">
                                    {contactList.map((e, i) => {
                                        return (
                                            <div className="w-full mx-auto" key={i}>
                                                <div className="rounded-lg shadow-lg bg-gray-50 text-center">
                                                    <div className="font-bold py-3 px-6 border-b border-gray-300 text-lg">
                                                        {e.role}
                                                    </div>
                                                    <div className="p-2">
                                                        <h5 className="text-blue-600 text-xl font-bold mb-2">{e.theName}</h5>
                                                        <p className="text-gray-700 text-base mb-2">
                                                            {e.designation}
                                                        </p>
                                                    </div>
                                                    <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                                                        <p>{emailIdList[e.emailIdSeq]}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="w-full flex lg:flex-row flex-col justify-between mt-8">
                                    <div className="flex flex-col my-4">
                                        <h2 className="text-2xl my-2">Contact Us</h2>
                                        <a href={`mailto:${emailIdList[0]}`} className="text-gray-600 w-full">
                                            Email us at: {emailIdList[0]}</a>
                                        <br className="lg:hidden md:hidden" />
                                        <a href="http://wmacindia.co.in/" className="text-gray-600 w-full">Our website:
                                            www.wmacindia.co.in
                                        </a>
                                        <div className="lg:flex flex-row mt-2">
                                            <p>Call Us at:</p>
                                            <p className="lg:ml-2">+91 848 196 2354</p>
                                        </div>
                                        <Link href='https://wa.me/message/EQV4XL3II5WFE1?src=qr'>
                                            <button type="button"
                                                className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800 mt-4 w-full">
                                                Chat with WMAC India on WhatsApp <WhatsAppIcon />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Contact;