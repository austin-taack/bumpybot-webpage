const people = [
    {
      name: 'Dr. Junfeng Jiao',
      role: 'Director - Urban Information Lab.',
      imageUrl: '/JunfengJiao.jpg',
      websiteUrl: 'https://soa.utexas.edu/faculty/junfeng-jiao',
    },
    {
        name: 'Dr. Luis Sentis',
        role: 'Director - Human Centered Robotics Lab',
        imageUrl: '/LuisSentis.jpg',
        websiteUrl: 'https://www.ae.utexas.edu/people/faculty/faculty-directory/sentis',
      },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              BumpyBot is a collaboration between the Urban Information Lab and the Human Centered Robotics Lab.
            </p>
          </div>
          <ul role="list" className="grid gap-x-20 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
                <li key={person.name}>
                    {/* Code for team cards modified from https://flowbite.com/docs/components/card/ */}
                    <a href={person.websiteUrl}>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-100">
                            <img class="rounded-t-lg object-cover w-full h-80" src={person.imageUrl} alt="" />
                            <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{person.name}</h5>
                                <p class="mb-3 font-normal text-gray-700">{person.role}</p>
                            </div>
                        </div>
                    </a>
                </li>
            ))}
            {/* 
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-3/4 xl:w-80 xl:h-60 object-cover rounded-xl" src={person.imageUrl} alt="" />
                </div>
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
              </li>
            ))}
            */}
          </ul>
        </div>
      </div>
    )
  }
  