import Image from "next/image";

const MemberCom = ({ objPos, imgUrl, memName, memPost, useColor }) => {
    return (
        <div>
            <div className={`block rounded-lg shadow-lg hover:shadow-gray-500 hover:scale-105 cursor-pointer bg-white duration-150 ease-in-out`}>
                <div className="overflow-hidden rounded-t-lg h-28" style={{ backgroundColor: useColor }}></div>
                <div className="w-24 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white">
                    <Image src={`/members_photos/${imgUrl}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', objectPosition: objPos }} alt='' width={500} height={500} />
                </div>
                <div className="p-6">
                    <h4 className="text-2xl font-bold mb-4">{memName}</h4>
                    <hr />
                    <p className="mt-4 font-semibold">
                        {memPost}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MemberCom;