import Image from "next/image";
import Link from "next/link";
import mobileLoginImage from "../../public/assets/mobile-login.png";
import Icon from "../../public/assets/Icon.png";
import happyImage from "../../public/assets/happy-image.png";
import presentingImage from "../../public/assets/presenting.png";
import withBoxImage from "../../public/assets/with-box.png";
import FacebookIcon from "../../public/assets/Social/facebook.png";
import TwitterIcon from "../../public/assets/Social/twitter.png";
import LinkedinIcon from "../../public/assets/Social/linkedin.png";
import InstagramIcon from "../../public/assets/Social/Instagram.png";
import YoutubeIcon from "../../public/assets/Social/youtube.png";

export default function Home() {
  return (
    <div className="bg-white">
      <div className=" bg-[url('/assets/bg.png')] bg-no-repeat bg-contain h-screen bg-right">
        <header className="xl:px-60 lg:px-24 md:px-4 pt-3">
          <nav className="container mx-auto  flex justify-between items-center">
            <div>
              <Link href="#" className="mx-2 text-main-300">
                Home
              </Link>
              <Link href="/posts" className="mx-2 text-main-300">
                Posts
              </Link>
              <Link href="/users" className="mx-2 text-main-300">
                Users
              </Link>
            </div>
            <h3 className="text-[1.75rem] text-main-400 font-bold">Landing</h3>
            <button className="bg-main-900 w-40 h-[26px] text-white text-xs font-medium rounded">
              Buy Now
            </button>
          </nav>
        </header>
        <main className="h-full">
          <section className="container h-full  self-center xl:px-60 lg:px-24 md:px-4 flex py-4">
            <div className="pr-8 h-fit self-center max-w-[570px]">
              <h1 className="text-4xl xl:text-5xl font-bold mb-4  text-main-900 leading-[66px]">
                Introduce Your Product Quickly & Effectively
              </h1>
              <p className="mb-6 text-lg text-main-300">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                <br />
                <br />
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div className="mt-10">
                <button className="bg-main-900 text-lg w-48 font-medium text-white px-6 py-2 rounded mr-4">
                  Purchase UI Kit
                </button>
                <button className="border-2 border-main-900 font-medium w-48 text-main-900 px-6 py-2 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <main>
        <section className=" flex items-center flex-row xl:px-60 lg:px-24 md:px-4 py-4 ">
          <div className="w-1/2 mr-auto">
            <h2 className="text-4xl text-main-900 font-bold mb-8">
              Light, Fast & Powerful
            </h2>
            <p className="mb-6 text-base text-main-300 max-w-[540px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              <br />
              <br />
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className="flex mt-12">
              <div className="w-1/3">
                <Image src={Icon} alt="Feature icon" className="w-9 h-9" />
                <h3 className="text-base text-main-900 my-4 font-semibold mb-2 ">
                  Title Goes Here
                </h3>
                <p className=" text-gray-300 text-xs">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="w-1/3 ms-5">
                <Image src={Icon} alt="Feature icon" className="w-9 h-9" />
                <h3 className="text-base text-main-900 my-4 font-semibold mb-2 ">
                  Title Goes Here
                </h3>
                <p className=" text-gray-300 text-xs">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="1/2">
            <Image
              src={mobileLoginImage}
              alt="Mobile login"
              className="w-[540px] h-[525px]"
            />
          </div>
        </section>
        <section className=" flex items-center justify-between flex-row xl:px-60 lg:px-24 md:px-4 py-4 ">
          <div>
            <Image
              src={happyImage}
              alt="Mobile login"
              className="w-[480px] h-[525px] object-contain"
            />
          </div>
          <div className=" flex flex-col justify-center">
            <h2 className="text-4xl text-main-900 font-bold mb-8">
              Light, Fast & Powerful
            </h2>
            <p className="mb-6 text-base text-main-300 max-w-[540px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              <br />
              <br />
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </section>
        <section className=" flex items-center justify-between flex-row xl:px-60 lg:px-24 md:px-4 py-4 ">
          <div>
            <Image
              src={withBoxImage}
              alt="wit Box Image"
              className="w-[440px] h-[525px] object-contain"
            />
          </div>
          <div className=" flex flex-col justify-center">
            <h2 className="text-4xl text-main-900 font-bold mb-8">
              Light, Fast & Powerful
            </h2>
            <p className="mb-6 text-base text-main-300 max-w-[540px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              <br />
              <br />
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </section>
        <section className=" flex items-center justify-between flex-row xl:px-60 lg:px-24 md:px-4 py-4 ">
          <div>
            <Image
              src={presentingImage}
              alt="presenting Image"
              className="w-[540px] h-[525px] object-contain"
            />
          </div>
          <div className=" flex flex-col justify-center">
            <h2 className="text-4xl text-main-900 font-bold mb-8">
              Light, Fast & Powerful
            </h2>
            <p className="mb-6 text-base text-main-300 max-w-[540px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              <br />
              <br />
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </section>
        <section className="w-full bg-[url('/assets/sec-bg.svg')] flex items-center bg-cover h-[650px]">
          <div className=" mx-auto flex flex-col text-center max-w-[600px] text-wrap">
            <h3 className="text-main-900 text-4xl font-medium">
              A Price To Suit Everyone
            </h3>
            <p className=" text-base text-main-200 mt-3 mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>

            <h3 className="text-main-900 text-5xl font-medium">$40</h3>
            <p className="text-main-400 text-base mt-3">UI Design Kit</p>

            <p className="text-gray-300 mt-12 mb-2">See, One Price, Simple.</p>
            <button className="bg-main-900 text-lg w-48 font-medium text-white px-6 py-2 rounded mx-auto">
              Purchase UI Kit
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-main-100 py-8">
        <div className=" mx-auto xl:px-60 lg:px-24 md:px-4 flex flex-col px-4">
          <div className="flex justify-between items-center py-8 border-b border-gray-100">
            <div className="text-sm font-medium text-gray-200">
              ©2023 Yourcompany
            </div>
            <div className="text-2xl font-bold text-main-300">Landing</div>
            <button className="bg-main-900 text-xs w-auto text-nowrap h-auto py-1 font-medium text-white px-4 rounded ">
              Purchase now
            </button>
          </div>
          <div className="flex justify-between  items-center py-8">
            <div className=" flex flex-row gap-x-6">
              <a href="#" className="text-main-200 text-xs">
                Home
              </a>
              <a href="#" className="text-main-200 text-xs">
                About
              </a>
              <a href="#" className="text-main-200 text-xs">
                Contact
              </a>
            </div>
            <div className="flex">
              <a href="#" className="mx-3">
                <Image className="w-4 h-4" alt="image" src={FacebookIcon} />
              </a>
              <a href="#" className="mx-3">
                <Image className="w-4 h-4" alt="image" src={LinkedinIcon} />
              </a>
              <a href="#" className="mx-3">
                <Image className="w-4 h-4" alt="image" src={TwitterIcon} />
              </a>
              <a href="#" className="mx-3">
                <Image className="w-4 h-4" alt="image" src={InstagramIcon} />
              </a>
              <a href="#" className="mx-3">
                <Image className="w-4 h-4" alt="image" src={YoutubeIcon} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
