import ProgressBar from 'react-animated-progress-bar';
import React from 'react';
import '../CSS/Skills.css'

const Skills = () => {
    return (
        <div className='text-white mt-16 ' id='skills'>
            <h1 className='text-center text-xl'><span className='coral'>---</span>My Skills<span className='coral'>---</span></h1>
            <div className='flex justify-center'>
                <hr className='w-12' />
            </div>
            <div className='flex justify-center mt-1'>
                <hr className='w-16' />
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-x-14 lg:mx-20 mx-4 mt-16'>
                <div>
                    <h1 className='h-1'>JavaScript</h1>
                    <ProgressBar
                        width="550px"
                        height="10px"
                        rect
                        fontColor="white"
                        percentage="86"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h1 className='h-1'>React.js</h1>
                    <ProgressBar
                        width="550px"
                        height="10px"
                        rect
                        fontColor="white"
                        percentage="80"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h1 className='h-1'>Frameworks</h1>
                    <ProgressBar
                        width="550px"
                        height="10px"
                        rect
                        fontColor="white"
                        percentage="90"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h1 className='h-1'>Node.Js</h1>
                    <ProgressBar
                        width="550px"
                        height="10px"
                        rect
                        fontColor="white"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h1 className='h-1'>Mongodb</h1>
                    <ProgressBar
                        width="550px"
                        height="10px"
                        rect
                        fontColor="white"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h1 className='h-1'>Python</h1>
                    <ProgressBar
                        width="550px"
                        height="10px"
                        rect
                        fontColor="white"
                        percentage="10"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h1 className='h-1'>HTML</h1>
                    <ProgressBar
                        width="550px"
                        height="10px"
                        rect
                        fontColor="white"
                        percentage="95"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h1 className='h-1'>CSS</h1>
                    <ProgressBar
                        width="550px"
                        height="10px"
                        rect
                        fontColor="white"
                        percentage="90"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>

            </div>
        </div>
    );
};

export default Skills;