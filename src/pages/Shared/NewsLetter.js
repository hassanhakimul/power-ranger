import React from 'react';

const NewsLetter = () => {
    return (
            <div className='mt-10'>
                <form class="m-4 flex justify-center items-center">
                    <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
                    <button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
                </form>
            </div>
    );
};

export default NewsLetter;