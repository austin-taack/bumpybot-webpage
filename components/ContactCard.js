{/**
Contact form to inquire about BumpyBot
Code adapted from https://tailwindui.com/components/marketing/sections/contact-sections
 */}

export default function ContactCard() {
    return (
        <div class="flex items-center min-h-screen bg-white pt-20">
            <div class="container mx-auto">
                <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-md">
                <div class="text-center">
                    <h1 class="my-3 text-3xl font-bold text-black">
                    Contact Us
                    </h1>
                    <p class="text-gray-400">
                    Fill out the form below to send us a message.
                    </p>
                </div>
                <div class="m-7">
                    <form action="https://api.web3forms.com/submit" method="POST" id="form">
                    <input type="hidden" name="access_key" value="b2508e40-3783-45d2-928d-9826a47d28c9" />
                    <input type="checkbox" name="botcheck" class="hidden" style={{display: 'none'}}></input>
                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm text-gray-600">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 ">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div class="mb-6">
                        <label for="subject" class="text-sm text-gray-600">Subject</label>
                        <input type="text" name="subject" id="subject" placeholder="Your Subject" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm text-gray-600">Your Message</label>

                        <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-600 rounded-md focus:bg-indigo-700 focus:outline-none">
                        Send Message
                        </button>
                    </div>
                    <p class="text-base text-center text-gray-400" id="result"></p>
                    </form>

                    
                </div>
                </div>
            </div>
            </div>
    )
}
