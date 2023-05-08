import Link from "next/link";

{/**
Page footer
Adapted from code at https://flowbite.com/docs/components/footer/
 */}
export default function Footer() {
  return (
    <footer class="relative bg-white">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                <a href="https://sites.utexas.edu/hcrl/" class="flex items-center">
                    <img src="images/HumanCenteredRoboticsLogo.png" class="h-10 mr-3" alt="HCRL Logo" />
                </a>
              </div>
              <div class="mb-6 md:mb-0">
                <a href="https://sites.utexas.edu/uil/main/" class="flex items-center">
                     <img src="images/UrbanInfoLabLogo.png" class="h-10 mr-3" alt="UIL Logo" />
                </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Affiliations</h2>
                      <ul class="text-gray-600 font-medium">
                          <li class="mb-4">
                              <a href="https://sites.utexas.edu/hcrl/" class="hover:underline">Human Centered Robotics Lab</a>
                          </li>
                          <li class="mb-4">
                              <a href="https://sites.utexas.edu/uil/main/" class="hover:underline">Urban Information Lab</a>
                          </li>
                          <li>
                              <a href="https://www.utexas.edu/" class="hover:underline">University of Texas at Austin</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                      <ul class="text-gray-600 font-medium">
                          <li class="mb-4">
                              <Link href="/" class="hover:underline ">About</Link>
                          </li>
                          <li class="mb-4">
                              <Link href="/team" class="hover:underline">Team</Link>
                          </li>
                          <li>
                              <Link href="/contact" class="hover:underline">Contact</Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                      <ul class="text-gray-600 font-medium">
                          <li class="mb-4">
                              <a href="https://twitter.com/urbaninfolab" class="hover:underline">Twitter</a>
                          </li>
                          <li class="mb-4">
                              <a href="https://www.youtube.com/channel/UC0wpzr9dEZeG-uZKBxS3PWw" class="hover:underline">Youtube</a>
                          </li>
                          <li>
                              <a href="https://github.com/urbaninfolab" class="hover:underline">Github</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
    </footer>
  )
}
