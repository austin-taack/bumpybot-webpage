import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faHillRockslide, faDumbbell, faEye } from '@fortawesome/free-solid-svg-icons';

{/**
Explains the main information about BumpyBot (the purple section)
Adapted from code at https://tailwindui.com/components/marketing/sections/header
 */}
function Header() {
  const links = [
    { name: 'Human Centered Robotics Lab', href: 'https://sites.utexas.edu/hcrl/' },
    { name: 'Urban Information Lab', href: 'https://sites.utexas.edu/uil/main/' },
    { name: 'University of Texas at Austin', href: 'https://www.utexas.edu/' },
  ]
  const stats = [
    { name: 'Navigation', value: 'Autonomous' },
    { name: 'Detection', value: 'Collision' },
    { name: 'Structure', value: 'Comfortable' },
    { name: 'Risk mitigation', value: 'Human-centered' },
  ]
  
  
  return (
    <div className="relative isolate overflow-hidden bg-white top-16 py-24 sm:py-32">
      <div className="fixed inset-0 -z-10 h-full w-full">
        <img
          src="images/BumpyBot.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-contain object-center grayscale"
        />
        <div className="absolute inset-0 h-full w-full bg-slate-900 opacity-90" />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-5 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-5 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 z-0 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Introducing BumpyBot</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Learn about BumpyBot, a new domestic robot for your family developed by the Human Centered Robotics Lab and the Urban Information Lab at UT Austin.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

{/**
Gives a description of BumpyBot
Adapted from code at https://tailwindui.com/components/marketing/sections/content-sections
 */}
function Description() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-xl font-semibold leading-7 text-[#dd573c]">BumpyBot</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A New Domestic Transporter</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              BumpyBot is a mobile carrier capable of intelligently navigating indoor environments, avoiding collisions, and
              performing autonomous household tasks.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="images/FrogBot.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                The idea originated from the need for a highly agile, at-home robot with the strength to help with the
                transportation of people and items.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FontAwesomeIcon icon={faRoute} className="mt-1 h-5 w-5 flex-none text-[#dd573c]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Intelligent navigation.</strong> The robot is equipped
                    with a LiDAR sensor and an RGB-depth camera to visually inspect and navigate within its surroundings.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FontAwesomeIcon icon={faHillRockslide} className="mt-1 h-5 w-5 flex-none text-[#dd573c]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Adaptive travel.</strong> Torque sensors in its omni-wheels
                    allow Bumpybot to traverse various environments while also responding to tactile feedback and ensuring safety
                    for both the robot and all who interact with it.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FontAwesomeIcon icon={faDumbbell} className="mt-1 h-5 w-5 flex-none text-[#dd573c]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Built for strength.</strong> BumpyBot is a
                    high-performing household robot that is strong enough to carry the weight of a person.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FontAwesomeIcon icon={faEye} className="mt-1 h-5 w-5 flex-none text-[#dd573c]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Dynamic perception.</strong> Our robot is
                    skilled enough to navigate through tight spaces and dynamic situations, such as crowds of people.
                  </span>
                </li>
              </ul>
              <p className="mt-6">
              Whereas traditional carrier robots have focused on mobile delivery of food and products and rely on simple
              navigation commands, BumpyBot has adaptive capabilities and demonstrates smart movement by utilizing prior
              knowledge of the home and how people interact with that environment. The result is a robot that succeeds
              where others fail: BumpyBot can intuitively and safely respond to dynamic, fast-changing conditions while
              fulfilling all of the typical needs of a household or transport robot.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">The BumpyBot difference.</h2>
              <p className="mt-6">
              BumpyBot can observe, monitor, transport
              and retrieve without getting stuck, lost, or in the way. This robot was designed for social environments from
              the ground up, and can maintain both the strength and ease of use of other delivery robots while demonstrating
              social awareness and safety precautions that make BumpyBot ideal for home or sensitive environments. BumpyBot
              succeeds where no others have before as it maintains the strength of traditional delivery robots while still
              executing unique navigation skills and incorporating safety measures to ensure response at any form of contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <Header />
      <Description />
    </div>
  )
}
