import Head from "next/head";
import Link from "next/link";

const joinUs = () => {
    return (
        <>
            <Head>
                <title>WMAC INDIA | Join Us</title>
                <link rel="shortcut icon" href="/logo-wmac.png" type="image/x-icon" />
            </Head>
            {/* <!-- The image --> */}
            <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
                backgroundPosition: '10%',
                backgroundImage: 'url("/header_images/join_us.jpg")',
                height: '500px'
            }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
                    <div className="flex justify-center items-center h-full">
                        <div className="underline underline-offset-8 text-center text-white px-6 md:px-12">
                            <h1
                                className="mb-4 text-4xl font-black tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                                Join <span className="text-blue-600 dark:text-blue-500">Us</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- The image --> */}
            <div className="container mx-auto">
                <ul className="lg:mt-10 sm:mt-5">
                    {/* <!-- Application Renewal Apply --> */}
                    <li className="mx-4 mt-8 mb-12 p-6 hover:drop-shadow-2xl rounded-xl bg-gray-100 text-gray-700 duration-500 ease-in-out">
                        <h2 className="font-bold lg:text-3xl text-2xl mb-5">AFFILATION / RENEWAL FORM (ARF) :</h2>
                        <p>
                            Track work across the enterprise, all sports institutions can easily apply for a WMAC INDIA
                            Membership. The WMAC INDIA
                            offers support for building your organisation and hosting events. The affiliation process can be
                            initiated by sending
                            the application form to <span className="text-blue-600">administration@wmacindia.co.in</span>
                        </p>
                        <br />
                        <p className="text-lg italic">
                            A WMAC INDIA representative will then reach out to you for further steps.
                        </p>
                        <hr className="my-6 border-gray-300" />
                        <p>
                            Click below to download the Application / Renewal Form (MAF) and send the filled ARF to <span
                                className="text-blue-600">administration@wmacindia.co.in</span>
                        </p>
                        <Link href='/pdfs/application-renewal_form.pdf' target="blank"
                            className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs 
                            leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Affiliation / Renewal Form (ARF)
                            Application
                        </Link>
                    </li>
                    {/* <!-- Application Renewal Apply --> */}
                    {/* <!-- Membership Apply --> */}
                    <li className="mx-4 mt-8 mb-12 p-6 hover:drop-shadow-2xl rounded-xl bg-gray-100 text-gray-700 duration-500 ease-in-out">
                        <h2 className="font-bold lg:text-3xl text-2xl mb-5">MEMBERSHIP :</h2>
                        <p>
                            Track work across the enterprise
                            All sports institutions and individuals can easily apply for a WMAC INDIA Membership. The WMAC INDIA
                            offers support for
                            building your organisation and hosting events. The application process can be initiated by
                            sending the application form to <span className="text-blue-600">administration@wmacindia.co.in</span>
                        </p>
                        <br />
                        <p className="text-lg italic">A WMAC INDIA representative will
                            then reach out to you for further
                            steps.</p>
                        <hr className="my-6 border-gray-300" />
                        <p>
                            Click below to download the Membership Application Form
                            (MAF) and send the filled MAF to <span className="text-blue-600"> administration@wmacindia.co.in</span>
                        </p>
                        <Link href='/pdfs/membership_application_form.pdf' target="blank"
                            className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs 
                            leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Membership
                            Application
                        </Link>
                    </li>
                    {/* <!-- Membership Apply --> */}
                    {/* <!-- Internship Apply --> */}
                    <li className="mx-4 mt-8 mb-12 p-6 hover:drop-shadow-2xl rounded-xl bg-gray-100 text-gray-700 duration-500 ease-in-out">
                        <h2 className="font-bold lg:text-3xl text-2xl mb-5">INTERNSHIP :</h2>
                        <p>
                            All individuals can easily apply for the one year
                            long WMAC INDIA Internship Certificate Programme. The WMAC INDIA offers
                            tasks and training for young aspirants, helping them pursue the activities of your choice as an
                            intern in the WMAC INDIA with
                            an office like environment
                            <span className="text-blue-600"> administration@wmacindia.co.in</span>.
                        </p>
                        <br />
                        <p>
                            The application process can be initiated by sending the
                            application form to <span className="text-blue-600">administration@wmacindia.co.in</span>
                        </p>
                        <br />
                        <p className="text-lg italic">A WMAC INDIA representative will then reach out to you for further steps.</p>
                        <hr className="my-6 border-gray-300" />
                        <p>
                            Click below to download the Internship Application Form
                            (IAF) and send the filled IAF to
                            <span className="text-blue-600"> administration@wmacindia.co.in</span>
                        </p>
                        <Link href='/pdfs/internship_application_form.pdf' target="blank"
                            className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs 
                            leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Internship
                            Application
                        </Link>
                    </li>
                    {/* <!-- Internship Apply --> */}
                </ul>
            </div>
        </ >
    );
}

export default joinUs;