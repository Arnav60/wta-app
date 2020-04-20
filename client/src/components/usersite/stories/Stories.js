import React from 'react'
import {CREATE_STORY_ROUTE} from '../../utils/constants';
import { Link, Redirect } from 'react-router-dom';

export const Stories = () => {

  const storyList = []

  for(let i = 0 ; i < 20 ; i++ ){
    storyList.push(
      <div className="bg-white rounded mt-4 p-4 cursor-pointer">
        <div className="flex">
          <img 
          className="w-12 h-12 rounded-full"
          src="https://hashnode.imgix.net/res/hashnode/image/upload/v1584181566095/yFdLG8gjE.png?w=200&h=200&fit=crop&crop=faces&auto=format&q=60" 
          alt="profile_image"/>
          <p className="self-center ml-3 text-sm font-semibold md:text-base">Domenico Solazzo's blog</p>
        </div>
        <div className="md:flex mt-4">
          <div className="md:w-3/4 w-full mr-4">
            <p className="font-sen text-black font-bold md:text-2xl text-xl">
              I GOT THE JOB: 3 Tips On How You Can Get Your Dream Job
            </p>
            <p className="mt-2 text-gray-700">
              I did it! I did it! Finally, I got the job that I really wanted. 🎉🎉🎉 It feels so good! It took some time, but finally, I found the job with the responsibilities that I was looking for. I got a job as Tech Lead! It took so many hours of research an...
            </p>
          </div>
          <div className="md:w-1/4 w-full mt-3 md:mt-0"> 
            <div 
                className="h-56 md:h-32 ml-auto post-cover w-full bg-cover bg-center rounded"
                style={{backgroundImage : `url(${"https://www.apple.com/v/iphone/home/af/images/overview/hero/hero_iphone11_pro_alt__f7h0mlyexoya_large_2x.jpg"})`}}
                alt=""/>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="md:px-16 px-6 px-2 bg-gray-200 min-h-screen pb-6">
      <div className="md:flex-row -mx-2 flex flex-col">
        <div className="md:w-1/4 px-2 w-full">
          <div className="sticky top-story">
            <div className="bg-white rounded p-4 mt-4">
              <p className="font-sen text-black text-xl md:text-2xl font-bold">Popular Stories</p> 
              <p className="text-gray-700 mb-4">Learnt something new recently? Write about it on Hashnode and showcase your knowledge. People get hired by sharing knowledge actively on Hashnode.</p>
              <Link to={CREATE_STORY_ROUTE} className="app-color hover:text-white rounded text-white py-2 px-4 focus:outline-none hover:shadow-md shadow transition duration-500 ease-in-out">
                New Story
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-3/4 px-2 w-full">
          {/* Tab Section */}
          <div className="sticky top-story-data bg-gray-200">
            <div className="w-full h-4 bg-gray-200"></div>
            <div className="bg-white rounded mt-4 md:mt-0 flex flex-wrap text-sm text-gray-700">
              <button
              className="px-4 h-10 app-font-color border-b-2 app-border-bottom font-extrabold">
                <span className="font-semibold">POPULAR</span>
              </button>
              <button
              className="px-4 h-10"
              >
                <span className="font-semibold">FEATURED</span>
              </button>
              <button
              className="px-4 h-10">
                <span className="font-semibold">RECENT</span>
              </button>
            </div>
          </div>

          {/* Story List Section */}
          {storyList}

        </div>
      </div>
    </div>
  )
}
