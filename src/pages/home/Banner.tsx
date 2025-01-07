import bannerImg1 from "@/assets/task banner.png"
import bannerImg2 from "@/assets/one-task-removebg-preview.png"


const Banner = () => {
    return (
        <div>
			{/* banner 1 */}

			<section>
	<div
	  className="relative "
	  style={{
		  backgroundImage: `url(${bannerImg1})`,
		  backgroundSize: "cover",
		  backgroundPosition: "center",
	  }}
  >
	  {/* Overlay for dark opacity */}
	  <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>


		<div className="relative container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">Provident blanditiis cum exercitationem</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-700 text-white ">Get started</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 text-white">Learn more</button>
			</div>
		</div>
	</div>

</section>


			{/* banner 2 */}
            <section className=" dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
				<span className="dark:text-violet-600">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={bannerImg2} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;