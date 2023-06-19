import { Footer } from "flowbite-react";
import Link from "next/link";

const CustomFooter = () => {
    return (
        <Footer container={true} className="rounded-none">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="/"
                        src="/logo-wmac.png"
                        alt="WMAC INDIA Logo"
                        name="WMAC INDIA"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="/about" className="text-gray-400">
                            About
                        </Footer.Link>
                        <ul className="flex flex-wrap items-start mb-6 text-sm sm:mb-0 text-gray-400">
                            <li>
                                <div className="mr-4 md:mr-6 ">
                                    <p>Follow Us:</p>
                                    <div className="mt-4 flex flex-row justify-between px-3">
                                        <Link href="https://instagram.com/wmacindiaorg?igshid=YzdkMWQ2MWU=">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                className="w-4 h-4 fill-slate-300 hover:fill-[#E1306C]">
                                                <path
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                            </svg>
                                        </Link>
                                        <Link href="https://www.facebook.com/officialwmacindia?mibextid=ZbWKwL">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                                className="w-3 h-3 fill-slate-300 hover:fill-[#4267B2]">
                                                <path
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-col text-left">
                                    <p className="text-md font-semibold">WMAC India</p>
                                    <p>277 Nayabad, Panchasayar</p>
                                    <p>Kolkata 700094, India</p>
                                </div>
                            </li>
                        </ul >
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <div className="flex items-center justify-center">
                    <Footer.Copyright
                        href="/"
                        by="WMAC INDIA."
                        year={2022}
                    />
                    <span className="ml-2 text-gray-400">All Rights Reserved</span>
                </div>
            </div>
        </Footer>
    );
}

export default CustomFooter;