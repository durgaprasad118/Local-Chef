import { AnimatedModalDemo } from '@/components/Modal';
import Navbar from '@/components/Navbar';
import { FlipWords } from '@/components/ui/flip-words';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import Image from 'next/image';
const words = ['cook', 'work'];
export default function Home() {
    return (
        <div className="md:h-[88vh]  w-[98vw]">
            <Navbar />
            <div className="md:mt-16 mt-20 flex flex-col items-start md:flex-row md:justify-between md:items-center p-4  md:space-y-0 md:space-x-4">
                <div className="md:flex-2 text-center md:text-left md:pl-3 ">
                    <HeroHighlight>
                        <h1 className="text-lg md:text-3xl lg:text-4xl font-medium  text-neutral-700  leading-tight lg:leading-tight ">
                            <span className="italic  ">
                                Hey Chefs, {" "}
                            </span>
                            We are cooking something cool for you !
                        </h1>
                        <h1 className="md:mt-6 translate-y-4 mt-4 text-balance tracking-tight text-2xl md:text-4xl lg:text-8xl font-bold text-neutral-700">
                            Let&apos;s change <br />
                            the way you {'  '}
                            <FlipWords
                                words={words}
                                duration={5500}
                                className="text-blue-500"
                            />
                        </h1>
                        <p className="text-md md:text-3xl md:mt-22 translate-y-12 mt-6 font-medium text-gray-600 ">
                            We connect chefs with home parties, events and
                            private gathereings.
                            <br className="md:inline hidden" />
                            You get the{' '}
                            <span className="font-semibold text-gray-900 underline dark:text-white decoration-green-500">
                                Freedom, Flexibility and Great Rates{' '}
                            </span>
                            for your expertise.
                        </p>
                    </HeroHighlight>
                    <AnimatedModalDemo />
                    <div className="w-full mt-4 translate-y-16 flex justify-center my-2">
                        <p className="flex items-center   text-sm md:text-2xl md:mt-8 mt-6 font-medium text-gray-600 ">
                            <span className="md:me-4 me-1 font-semibold">
                                Freedom From
                            </span>
                            <span className="  text-blue-800 text-[8px] md:text-lg font-medium  md:font-semibold md:me-4 px-1 me-1 md:px-2 py-1 rounded-lg border md:border-2 border-blue-500 inline-flex items-center justify-center">
                                Rigid Schedules
                            </span>

                            <span className="  text-blue-800 text-[8px] md:text-lg font-medium  md:font-semibold md:me-4 me-1 px-1 md:px-2 py-1 rounded-lg border md:border-2 border-blue-500 inline-flex items-center justify-center">
                                Low Rates
                            </span>

                            <span className="  text-blue-800 text-[8px] md:text-lg font-medium  md:font-semibold md:me-4 me-1 px-1 md:px-2 py-1 rounded-lg border md:border-2 border-blue-500 inline-flex items-center justify-center">
                                Stress
                            </span>
                        </p>
                    </div>
                </div>
                <div className="md:flex-1 mt-10 translate-y-10 md:flex md:justify-center">
                    <Image
                        alt="Chef Image"
                        src="/chef.jpg"
                        width={400}
                        height={350}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}
