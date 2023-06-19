import Head from "next/head";
import MemberCarousel from "../components/MemberCarousel";

export default function Home() {
  const ratio = 400;

  return (
    <>
      <Head>
        <title>WMAC INDIA</title>
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
              <div className="text-center text-white px-6 py-6 md:py-0 md:px-12">
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-7">
                  WORLD MARTIAL ARTS COMMITTEE - INDIA
                </h2>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r to-green-700 via-white from-orange-500">
                    WMAC - INDIA</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hero --> */}
      </div>

      {/* <!-- Written Content --> */}
      <div className="px-4 container mx-auto">
        <div className="text-gray-700 flex flex-col items-center antialiased">
          <h1
            className="hidden lg:block text-4xl lg:mb-10 mt-10 mb-5 font-black tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            What We <span className="text-blue-900">Are...</span></h1>
          <div
            className="lg:p-16 mb-8 lg:shadow-2xl focus:shadow-blue-50 hover:shadow-blue-50 lg:bg-white rounded-xl lg:rounded-none">
            <h1
              className="lg:hidden mb-8 text-6xl mt-10 font-black tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
              What We <span className="text-blue-900">Are...</span></h1>
            <div className="text-justify">
              <p className="font-medium text-gray-700">
                World Martial Arts Committee – India is Official National Body of World Martial Arts Committee –
                WMAC (based at 25C
                Achgasse, Bregenz 6900, Austria). It&apos;s a legal non-profit Trust Organization registered under the
                Section 8 of the
                Indian Notaries Act of the Government of India.
                WMAC India is a Member Federation of the FIT India Movement - Ministry of Youth Affairs & Sports,
                Government of India.
                The Organization is also registered as an enterprise under the Ministry of MSME - Government of
                India.
              </p>
              <p className="font-medium text-gray-700 my-4">
                WMAC India is famously called the Defender of Faith for Martial Artists as we act as the Protector
                of Traditions for
                Martial Arts. Here, we promote Martial Arts for all by conducting training seminars, self-defence
                camps, tournaments and
                many other exiting projects that help steer the growth of Martial Arts as a Sport in the country.
              </p>
              <p className="font-medium text-gray-700 my-4">
                WMAC India is committed in the welfare of society apart from Martial Arts as well. We take up roles
                and activities like,
                human rights, women’s and children’s rights, environment safety, public health programmes and
                various other cultural and
                social projects. These projects are conducted both by our organization and also in collaboration
                with reputed
                Governmental and Non-Governmental organisations.
              </p>
              <p className="font-medium text-gray-700">
                We are the Ambassadors of both Sports & Social wellbeing for all every individual.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Written Content --> */}

        <hr className="my-4 mx-auto w-48 h-2 rounded border-0 md:my-10 bg-gray-700" />

        <div className="mt-11 mb-24 lg:container mx-auto lg:py-8">
          <MemberCarousel />
        </div>
      </div>
    </>
  )
}
