import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";

const CustomNavbar = () => {
    const ratio = 45;
    const router = useRouter();

    const activeClass = "text-blue-700";
    const nonActiveClass = "text-gray-400 hover:text-white";

    const navItems = [
        {
            path: '/',
            pathName: 'Home'
        },
        {
            path: '/about',
            pathName: 'About'
        }, {
            path: '/gallery',
            pathName: 'Gallery'
        },
        {
            path: '/activities',
            pathName: 'Activities'
        }, {
            path: '/events',
            pathName: 'Events'
        },
        {
            path: '/rules',
            pathName: 'Rules'
        }, {
            path: '/joinUs',
            pathName: 'Join Us'
        },
        {
            path: '/contact',
            pathName: 'Contact Us'
        }
    ];

    return (
        <Navbar>
            <Navbar.Brand href="/" className="my-2">
                <Image
                    src="/logo-wmac.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                    width={ratio} height={ratio}
                    style={{ width: 'auto', height: 'auto' }}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                    WMAC INDIA
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="my-2 text-white">
                {
                    navItems.map((e, i) =>
                        <Navbar.Link key={i} href={e.path}>
                            <span className={router.pathname == e.path ? activeClass : nonActiveClass}>{e.pathName}</span>
                        </Navbar.Link>
                    )
                }
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;