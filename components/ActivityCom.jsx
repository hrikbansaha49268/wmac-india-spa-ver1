import Image from "next/image";

const ratio = 750;

const TestCom = ({ element }) => {
    return (
        <div className="relative mx-auto group m-8 flex overflow-y-hidden">
            <Image
                className="h-full group-hover:brightness-50 duration-300 ease-in-out object-cover rounded-lg"
                src={`/activities/projects/images/${element.imgSrc}`}
                alt={element.projName} width={ratio} height={ratio}
            />
            <div className={`absolute h-full translate-y-full mt-60 group-hover:mt-0 lg:group-hover:translate-y-[40%] group-hover:translate-y-0 top-0 p-6 duration-300 ease-in-out rounded-lg ${element.bgColor}`}>
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