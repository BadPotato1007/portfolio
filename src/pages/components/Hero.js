import React from 'react';
import './components.css'
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
    return (
    <div class="ontop text-7xl text-green-50 pl-10">
        <br/><br/><br/><br/>
            <p class="bigname">Hi,</p><br/>
            <table>
                <tr>
                    <td><p class="bigname">I'm   </p></td>
                    <td class="space1"> ..</td>
                    
                    <td class="blue">N</td>
                    <td class="orange"><span class="dot">..</span>N</td>
                    
                    <td><p class="bigname">   &nbsp;&nbsp;  eerav, </p></td>
                </tr>
            </table><br/>
                <ReactTypingEffect typingDelay="500" eraseDelay="1200" text={["Web developer.", "Robotics engineer.", "Student.", "Artist.", "Pianist."]} className="bigname"/><br/>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-transparent">
                Contact Me
            </span>
            </button>
            
            
            
        

        </div>
    );
};

export default Hero;
