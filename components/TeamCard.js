import { attributes } from '../content/team.md'
  
export default function Example() {
  let { header, description, people } = attributes
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{header}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <ul role="list" className="grid gap-x-20 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              {/* Code for team cards modified from https://flowbite.com/docs/components/card/ */}
              <a href={person.websiteUrl}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-100">
                  <img className="rounded-t-lg object-cover w-full h-80" src={person.imageUrl} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{person.name}</h5>
                    <p className="mb-3 font-normal text-gray-700">{person.role}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
  