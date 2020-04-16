import React from 'react'
import mainHomeImg from '../../../app_images/main-home-img.png'
import imageOne from '../../../app_images/main-home-i1.png'
import imageTwo from '../../../app_images/main-home-i2.png'
import imageThree from '../../../app_images/main-home-i3.png'
import { Link, Redirect } from 'react-router-dom';
import {REGISTER_ROUTE, LOGIN_ROUTE, HOME_FEED_ROUTE} from '../../utils/constants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const GuestHome = ({isAuthenticated}) => {
 
  if (isAuthenticated) {
    return <Redirect to={HOME_FEED_ROUTE}/>;
  }

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-col">
        <div className="text-center mt-10 px-4">
          <p className="text-gray-600 font-sen text-xs md:text-sm">
            FRIENDLY AND INCLUSIVE DEVELOPER COMMUNITY
          </p>
          <p className="mt-2 font-sen text-black text-4xl md:text-5xl">
            Welcome to StudyNode
          </p>
          <p className="text-base md:text-lg">A place to share your life as a developer and connect with 
            <br/>
            the best developers from across the world.</p>
          <div className="mt-4">
            <Link to={REGISTER_ROUTE} className="app-color hover:text-white rounded text-white py-2 px-4  focus:outline-none hover:shadow-xl shadow transition duration-500 ease-in-out">
              Create an account
            </Link>
          </div>
          <div className="mt-4">
            <Link to={LOGIN_ROUTE} className="text-gray-700  hover:text-black px-2 py-4 focus:outline-none">Already have an account?</Link>
          </div>
        </div>
        <div className="w-full mt-6 md:mt-0">
          <img 
          className="lg:w-1/2 mx-auto w-full px-16 mt-4 md:w-3/4 object-cover"
          src={mainHomeImg} alt="mainHomeImg" />
        </div>
      </div>


      <div className="container mx-auto py-8 md:py-10 px-4 mt-2 xl:px-0">

        <div className="md:mt-0 mt-2">
          <p className="text-gray-600 font-sen text-sm md:text-lg font-medium tracking-wide">LEARN. SHARE. CONNECT.</p>
          <p className="font-sen text-black text-3xl md:text-4xl">Helping devs solve real-life issues</p>
          <div className="md:flex md:flex-wrap md:justify-between mt-4">
            <div className="md:w-1/3 w-full mb-6">
              <img 
                className="h-56 mx-auto mb-4"
                src={imageOne} 
                alt=""/>
                <p className="font-sen text-black text-xl md:text-2xl font-medium">Publish stories</p>
                <p className="text-gray-700">Ask a question on StudyNode and get help from the community members. We do not ban users for asking subjective and opinionated questions. Go anonymous, if you are too shy.</p>
            </div>
            <div className="md:w-1/3 w-full mb-6">
              <img 
                className="h-56 mx-auto mb-4"
                src={imageTwo} 
                alt=""/>
                <p className="font-sen text-black text-xl md:text-2xl font-medium">Ask a question</p>
                <p className="text-gray-700">Ask a question on StudyNode and get help from the community members. We do not ban users for asking subjective and opinionated questions. Go anonymous, if you are too shy.</p>
            </div>
            <div className="md:w-1/3 w-full mb-6">
              <img 
                className="h-56 mx-auto mb-4"
                src={imageThree} 
                alt=""/>
                <p className="font-sen text-black text-xl md:text-2xl font-medium">Start your new blog</p>
                <p className="text-gray-700">Build your own brand and start a blog on your domain for free with StudyNode. Write stories on your blog and share them with StudyNode community directly.</p>
            </div>
          </div>
        </div>
        
        {/* Trending Section */}
        <div className="mt-2">
          <p className="text-gray-600 font-sen text-sm md:text-lg font-medium tracking-wide mt-16">DEVELOPER STORIES</p>
          <p className="font-sen text-black text-3xl md:text-4xl">Trending developer stories on StudyNode</p>
          <div className="md:flex md:flex-wrap md:justify-between mt-8">
          <div className="md:w-1/2 lg:w-1/3 w-full mb-6 cursor-pointer">
            <div className="mr-2 border border-gray-200 bg-white border rounded hover:shadow-lg overflow-hidden mr-2 transition duration-500 ease-in-out">
                <div 
                  className="h-56 mx-auto mb-4 post-cover w-full block bg-cover bg-center"
                  style={{backgroundImage : `url(${"https://www.apple.com/v/iphone/home/af/images/overview/hero/hero_iphone11_pro_alt__f7h0mlyexoya_large_2x.jpg"})`}}
                  alt=""/>
                  <div className="py-2 px-4">
                    <p className="font-sen text-black text-xl md:text-2xl font-medium">Publish stories</p>
                    <p className="text-gray-700">Ask a question on StudyNode and get help from the community members. We do not ban users for asking subjective and opinionated questions. Go anonymous, if you are too shy.</p>
                  </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 w-full mb-6 cursor-pointer">
            <div className="mr-2 border border-gray-200 bg-white border rounded hover:shadow-lg overflow-hidden mr-2 transition duration-500 ease-in-out">
                <div 
                  className="h-56 mx-auto mb-4 post-cover w-full block bg-cover bg-center"
                  style={{backgroundImage : `url(${"https://hashnode.imgix.net/res/hashnode/image/upload/v1585661908456/Q9PJQ8PyF.png?w=800&auto=format&q=60"})`}}
                  alt=""/>
                  <div className="py-2 px-4">
                    <p className="font-sen text-black text-xl md:text-2xl font-medium">Publish stories</p>
                    <p className="text-gray-700">Ask a question on StudyNode and get help from the community members. We do not ban users for asking subjective and opinionated questions. Go anonymous, if you are too shy.</p>
                  </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 w-full mb-6 cursor-pointer">
            <div className="mr-2 border border-gray-200 bg-white border rounded hover:shadow-lg overflow-hidden mr-2 transition duration-500 ease-in-out">
                <div 
                  className="h-56 mx-auto mb-4 post-cover w-full block bg-cover bg-center"
                  style={{backgroundImage : `url(${"https://hashnode.imgix.net/res/hashnode/image/upload/v1585661908456/Q9PJQ8PyF.png?w=800&auto=format&q=60"})`}}
                  alt=""/>
                  <div className="py-2 px-4">
                    <p className="font-sen text-black text-xl md:text-2xl font-medium">Publish stories</p>
                    <p className="text-gray-700">Ask a question on StudyNode and get help from the community members. We do not ban users for asking subjective and opinionated questions. Go anonymous, if you are too shy.</p>
                  </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 w-full mb-6 cursor-pointer">
            <div className="mr-2 border border-gray-200 bg-white border rounded hover:shadow-lg overflow-hidden mr-2 transition duration-500 ease-in-out">
                <div 
                  className="h-56 mx-auto mb-4 post-cover w-full block bg-cover bg-center"
                  style={{backgroundImage : `url(${"https://hashnode.imgix.net/res/hashnode/image/upload/v1585661908456/Q9PJQ8PyF.png?w=800&auto=format&q=60"})`}}
                  alt=""/>
                  <div className="py-2 px-4">
                    <p className="font-sen text-black text-xl md:text-2xl font-medium">Publish stories</p>
                    <p className="text-gray-700">Ask a question on StudyNode and get help from the community members. We do not ban users for asking subjective and opinionated questions. Go anonymous, if you are too shy.</p>
                  </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 w-full mb-6 cursor-pointer">
            <div className="mr-2 border border-gray-200 bg-white border rounded hover:shadow-lg overflow-hidden mr-2 transition duration-500 ease-in-out">
                <div 
                  className="h-56 mx-auto mb-4 post-cover w-full block bg-cover bg-center"
                  style={{backgroundImage : `url(${"https://www.apple.com/v/iphone/home/af/images/overview/hero/hero_iphone11_alt__felxve0k6euu_large_2x.jpg"})`}}
                  alt=""/>
                  <div className="py-2 px-4">
                    <p className="font-sen text-black text-xl md:text-2xl font-medium">Publish stories</p>
                    <p className="text-gray-700">Ask a question on StudyNode and get help from the community members. We do not ban users for asking subjective and opinionated questions. Go anonymous, if you are too shy.</p>
                  </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 w-full mb-6 cursor-pointer">
            <div className="mr-2 border border-gray-200 bg-white border rounded hover:shadow-lg overflow-hidden mr-2 transition duration-500 ease-in-out">
                <div 
                  className="h-56 mx-auto mb-4 post-cover w-full block bg-cover bg-center"
                  style={{backgroundImage : `url(${"https://mm-blog-community.s3.ap-south-1.amazonaws.com/2020-04-11T17%3A00%3A24.533ZScreenshot%202020-03-29%20at%208.06.50%20AM.png"})`}}
                  alt=""/>
                  <div className="py-2 px-4">
                    <p className="font-sen text-black text-xl md:text-2xl font-medium">Publish stories</p>
                    <p className="text-gray-700">Ask a question on StudyNode and get help from the community members. We do not ban users for asking subjective and opinionated questions. Go anonymous, if you are too shy.</p>
                  </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GuestHome.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(GuestHome);


