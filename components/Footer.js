import { attributes } from '../content/footer.md'
import Link from "next/link";

function FooterLink({name, href, external}) {
    if (external) {
        return <a href={href} className="hover:underline">{name}</a>;
    }

    return <Link href={href}><a className="hover:underline">{name}</a></Link>;
}

{/**
Page footer
Adapted from code at https://flowbite.com/docs/components/footer/
 */}
export default function Footer() {
    let { logos, link_sets } = attributes
    return (
        <footer className="relative bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="md:flex md:justify-between">
                    {logos.map((logo) => (
                        <div key={logo.name} className="mb-6 md:mb-0">
                            <a href={logo.href} className="flex items-center">
                                <img src={logo.img} className="h-10 mr-3" alt="HCRL Logo" />
                            </a>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {link_sets.map((link_set) => (
                            <div key={link_set.type}>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{link_set.type}</h2>
                                <ul className="text-gray-600 font-medium">
                                    {link_set.links.map((link) => (
                                        <li key={link.name} className="mb-4">
                                            <FooterLink name={link.name} href={link.href} external={link.external} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
