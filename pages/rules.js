import Head from "next/head";
import Link from "next/link";

const rules = () => {
    return (
        <>
            <Head>
                <title>WMAC INDIA | Rules</title>
                <link rel="shortcut icon" href="/logo-wmac.png" type="image/x-icon" />
            </Head>
            <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
                backgroundPosition: '10%',
                backgroundImage: 'url("/header_images/rules.jpg")',
                height: '500px'
            }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
                    <div className="flex justify-center items-center h-full">
                        <div className="underline underline-of text-white px-6 md:px-12">
                            <h1
                                className="mb-4 text-4xl font-black tracking-wider leading-none text-white md:text-5xl lg:text-6xl">
                                Rul<span className="text-blue-600 dark:text-blue-500">es</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 container mx-auto flex flex-col">
                <div className="mx-auto px-4">
                    <div className="flex flex-col items-center mb-4">
                        <h1
                            className="lg:mb-2 sm:mb-0 lg:leading-none leading-snug text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                            BE AWARE OF THE RULES
                        </h1>
                        <h1
                            className="mb-4 lg:leading-none leading-snug text-2xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-bl">
                            WMAC INDIA
                            RULEBOOK</h1>
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg font-semibold text-gray-700">
                            Download the rule books for all WMAC INDIA competition
                            disciplines:
                        </h2>
                        <ol className="ml-4 space-y-1 max-w-md list-decimal list-inside text-blue-500 font-medium">
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/1-WMAC-Rules-Version-EN-4.4-General-Rules.pdf"
                                    className="hover:underline">
                                    General Rules
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/2-25.04.WMAC-Rules-Version-EN-4.5-Forms.pdf"
                                    className="hover:underline">
                                    Forms
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/3-WMAC-Rules-Version-EN-4.4-Kickbox-TB-OB.pdf"
                                    className="hover:underline">
                                    Kickboxing, Thaiboxing and Oriental Boxing
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/4-WMAC-Rules-Version-EN-4.4-Grappling.pdf"
                                    className="hover:underline">
                                    Grappling
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/5-WMAC-Rules-Version-EN-4.4-Self-Defence-1.pdf"
                                    className="hover:underline">
                                    Self Defense
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/6-WMAC-Rules-Version-EN-4.4-Breaking.pdf"
                                    className="hover:underline">
                                    Breaking
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/7-WMAC-Rules-Version-EN-4.4-Rumble-u-NoContact.pdf"
                                    className="hover:underline">
                                    Rumble and No Contact
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/8-WMAC-Rules-Version-EN-4.4-Kumite.pdf"
                                    className="hover:underline">
                                    Kumite
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WJJF-Kodokan-Regelwerk-23.01.18-englisch.pdf"
                                    className="hover:underline">
                                    WJJF - Kodokan Rules
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="my-[8vh] flex flex-col lg:flex-row lg:items-start items-center text-center">
                    {/* <!-- Guidelines --> */}
                    <div className="flex flex-col mb-12">
                        <div className="flex flex-col items-center px-8 lg:w-[50vw] w-full">
                            <h5 className="text-gray-900 lg:text-2xl text-xl leading-tight leading-wide mb-2 font-extrabold">
                                WMAC-INDIA Guidelines</h5>
                            <p className="text-gray-700 mb-4">
                                Guidelines for organisation, event hosting, examinations and title directives.
                            </p>
                            <div className="flex justify-center text-center">
                                <div className="bg-white rounded-lg border border-gray-200 text-gray-900 p-8">
                                    <div className="flex flex-col">
                                        <p className="font-bold my-2">WMAC INDIA Guidelines</p>
                                        <p className="my-2">Complete structure and guidelines of the organisation</p>
                                        <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WMAC-Guidelines.pdf"
                                            className="font-semibold text-blue-600">Download</Link>
                                        <div className="px-6 py-2 border-b border-gray-200"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-bold my-2">Title Directives</p>
                                        <p className="my-2">Professional and amateur title directives.</p>
                                        <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WMAC-Professional-Amateur-Title-Directives.pdf"
                                            className="font-semibold text-blue-600">Download</Link>
                                        <div className="px-6 py-2 border-b border-gray-200"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-bold my-2">General Event Directive</p>
                                        <p className="my-2">Information and rules for hosting WMAC events.</p>
                                        <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WMAC-General-Event-Directives.pdf"
                                            className="font-semibold text-blue-600">Download</Link>
                                        <div className="px-6 py-2 border-b border-gray-200"></div>

                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-bold my-2">Exam Directives</p>
                                        <p className="my-2">General exam directives of the WMAC.</p>
                                        <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WMAC-General-Exam-Directives-of-the-WMAC.pdf"
                                            className="font-semibold text-blue-600">Download</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Guidelines --> */}
                    {/* <!-- DAN Stds --> */}
                    <div className="flex flex-col items-center px-8">
                        <h5 className="text-gray-900 text-2xl leading-wide mb-2 font-extrabold">DAN Standards</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Requirements and fees from 1th to 3rd DAN
                        </p>
                        <div className="flex justify-center">
                            <div className="flex justify-center">
                                <div className="flex justify-center text-center">
                                    <div
                                        className="bg-white rounded-lg border border-gray-200 text-gray-900 p-16 grid grid-cols-2 gap-8">
                                        <div className="flex flex-col">
                                            <p className="font-bold my-2">1.DAN</p>
                                            <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WMAC-Prufungsvorgaben-1.DAN-EN.pdf"
                                                className="font-semibold text-blue-600">Download</Link>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold my-2">2.DAN</p>
                                            <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WMAC-Prufungsvorgaben-2.DAN-EN.pdf"
                                                className="font-semibold text-blue-600">Download</Link>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold my-2">3.DAN</p>
                                            <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WMAC-Prufungsvorgaben-3.DAN-EN.pdf"
                                                className="font-semibold text-blue-600">Download</Link>

                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold my-2">Fees</p>
                                            <Link target="blank" href="https://wmac-world.com/wp-content/uploads/2022/03/WMAC-Examination-Fees-EN.pdf"
                                                className="font-semibold text-blue-600">Download</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- DAN Stds --> */}
                    </div>
                    {/* <!-- DAN Stds --> */}
                </div>
            </div>
        </>
    );
}

export default rules;