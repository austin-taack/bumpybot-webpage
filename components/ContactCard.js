{/**
Contact form to inquire about BumpyBot
Code adapted from https://tailwindui.com/components/marketing/sections/contact-sections
 */}

export default function ContactCard() {
    return (
        <div className="flex items-center min-h-screen bg-white pt-20">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-md">
                <div className="text-center">
                    <h1 className="my-3 text-3xl font-bold text-black">
                    Contact Us
                    </h1>
                    <p className="text-gray-400">
                    Fill out the form below to send us a message.
                    </p>
                </div>
                <div className="m-7">
                    <form action="https://api.web3forms.com/submit" method="POST" id="form">
                    <input type="hidden" name="access_key" value="b2508e40-3783-45d2-928d-9826a47d28c9" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}}></input>
                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 ">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-sm text-gray-600">Subject</label>
                        <input type="text" name="subject" id="subject" placeholder="Your Subject" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Your Message</label>

                        <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-600 rounded-md focus:bg-indigo-700 focus:outline-none">
                        Send Message
                        </button>
                    </div>
                    <p className="text-base text-center text-gray-400" id="result"></p>
                    </form>

                    
                </div>
                </div>
            </div>
            </div>
    )
}
