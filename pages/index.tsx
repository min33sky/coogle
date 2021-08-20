import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Head>
        <title>Coogle</title>
        <meta name="description" content="Cooooooooooogle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex justify-between w-full p-5 text-sm text-gray-700 justify">
        {/* Left */}
        <div className="flex items-center space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <p className="link">Cmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-200" />
          {/* Avartar */}
          <Avatar url="https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg" />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center flex-grow mt-44">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          height={100}
          width={300}
          alt="logo"
        />
        <div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-200 rounded-full lg:max-w-2xl sm:max-w-xl hover:shadow-lg focus-within:shadow-lg">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col justify-center w-1/2 mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
