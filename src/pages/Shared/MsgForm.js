import React from 'react';

const MsgForm = () => {
    return (
        <div className='my-12'>
            <div class="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
                <div class="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
                    <div class="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>
                    </div>
                    <form class="p-12 md:p-24">
                        <div class="flex items-center text-lg mb-6 md:mb-8">
                            <input type="text" id="name" class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Your Name" />
                        </div>
                        <div class="flex items-center text-lg mb-6 md:mb-8">
                        
                            <input type="email" id="name" class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Your Email" />
                        </div>
                        <div class="mb-6">
                                <textarea
                                    rows="6"
                                    placeholder="Your Message"
                                    class="
                                    bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full
                                    "
                                    name="message"
                                    id="message"
                                    ></textarea>
                            </div>
                        <button class="bg-gradient-to-b from-primary to-secondary font-medium p-2 md:p-4 text-white uppercase w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MsgForm;