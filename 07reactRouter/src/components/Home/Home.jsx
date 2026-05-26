import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      {/* Section 1 */}
      <div className="relative overflow-hidden">
        {/* Decorative glowing blobs */}
        <div className="absolute -left-16 -top-16 w-72 h-32 bg-orange-600/10 blur-3xl pointer-events-none"></div>
        <div className="absolute right-1/4 bottom-0 w-60 h-60 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>

        <div className="relative flex flex-col  z-10 max-w-7xl px-15 py-10 sm:py-24 mx-auto sm:px-12 lg:px-16 sm:flex-row items-center justify-center gap-12">
          {/* Left Column (Image) on desktop, rendered at bottom on mobile */}
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-start order-3 sm:order-1">
            <img
              className="w-72 sm:w-100 object-contain  hover:scale-[1.03] duration-500"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgCVY2KXGroufoLu4rtbzZ3G5gFfH1Wy28NfKYDJMnPF3tZ4Hl"
              alt="image1"
            />
          </div>

          {/* Right Column (Text Content) */}
          <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6 order-1 sm:order-2">
            <h2 className="text-4xl font-extrabold sm:text-5xl text-white tracking-tight leading-tight">
              Download Now
              <span className="block text-2xl sm:text-3xl font-medium text-orange-500 mt-2">Lorem Ipsum</span>
            </h2>

            <Link
              className="flex items-center justify-center w-fit font-semibold bg-orange-600 rounded-xl px-3 py-2 hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 hover:scale-105 transform active:scale-95"
              style={{ padding: '0.5rem 1rem' }}
              to="/"
            >
              Download now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
