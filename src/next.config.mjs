/** @type {import('next').NextConfig} */

//const withVideos = require('next-videos')
import withVideos from 'next-videos'; // i need to somehow configure this

const nextConfig = {
    images: {
        domains: ['assets.tina.io'],
      },

};



export default withVideos(nextConfig);
