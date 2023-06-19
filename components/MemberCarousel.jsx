import Image from "next/image";
import { Carousel } from "flowbite-react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const MemberCarousel = () => {
    const ratio = 1000;

    const someTopMembersList = [
        {
            memName: "Shri Harald Folladori",
            role: "WMAC World President",
            imgUrl: "harald_folladori.jpg"
        },
        {
            memName: "Shri Siddharth Lama",
            role: "WMAC-ASIA President",
            imgUrl: "siddharth_lama.jpg"
        }, {
            memName: "Shihan Dai Koustav Sarkar",
            role: "WMAC-INDIA President",
            imgUrl: "sensei_kaustav_sarkar.jpg"
        }
    ];

    return (
        <div className="bg-white rounded-lg">
            <Carousel
                slideInterval={5000}
                rightControl={<ArrowRightIcon sx={{ color: 'black', fontSize: 50 }} />}
                leftControl={<ArrowLeftIcon sx={{ color: 'black', fontSize: 50 }} />}
            >
                {someTopMembersList.map((e, i) => {
                    return (
                        <div className="relative h-full my-32" key={i}>
                            <Image className="rounded-full shadow-lg mb-6 mx-auto lg:h-72 lg:w-72 md:h-52 md:w-52 w-36 h-36"
                                src={`/members_photos/${e.imgUrl}`} alt={e.memName} width={ratio} height={ratio} quality={80}
                                style={{ objectFit: 'cover', objectPosition: '25% 25%' }} />
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-8/12 px-3 text-center">
                                    <h5 className="text-lg font-bold mb-3">{e.memName}</h5>
                                    <p className="font-medium text-gray-700 mb-4">{e.role}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default MemberCarousel;