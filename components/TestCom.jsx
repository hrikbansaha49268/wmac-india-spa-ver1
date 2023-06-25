import Image from "next/image";

const TestCom = ({ element }) => {
    return (
        <div className="relative mx-auto group m-8 flex overflow-y-hidden">
            <Image
                className="h-full duration-300 ease-in-out object-cover rounded-lg"
                src={`/activities/projects/images/${element.imgSrc}`}
                alt="" width={750} height={1260}
            />
            <div className={`absolute translate-y-full h-full mt-60 group-hover:mt-0 group-hover:translate-y-0 top-0 p-6 duration-500 ease-in-out rounded-lg ${element.bgColor}`}>
                <h5 className={`mb-8 mt-2 lg:text-5xl text-3xl font-bold leading-snug tracking-wide ${element.txtColor}`}>
                    {element.projName}
                </h5>
                <p className={`mb-4 text-base ${element.txtColor}`}>
                    {element.desc}
                </p>
            </div>
        </div>
    );
}

export default TestCom;