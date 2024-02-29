import { defaults } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export const TypingAnimation = () => {
    return (
        <div className="typing-text">
            <TypeAnimation
                               sequence={[
                    "HTML",
                    1500,
                    "CSS",
                    1000,
                    "Responsive!!!",
                    1000,
                    "React.js",
                    1000,
                    "Node.js",
                    1000,
                    "Tailwind.css",
                    500,
                    'Golang!!!',
                    1500,
                    'Express.js',
                    1500,
                    "REST-API",
                    1500,
                    "NOSQL!!!",
                    1000,
                    "Github",
                    1000,
                    "Python",
                    1000,
                    "JavaScript",
                    1000,
                    "TypeScript",
                    1000,
                    "Ruby",
                    1000,
                    "Java",
                    1000,
                    "Swift",
                    1000,
                    "Kotlin",
                    1000,
                    "C#",
                    1000,
                    "C++",
                    1000,
                    "Rust",
                    1000,
                    "PHP",
                    1000,
                    "SQL",
                    1000,
                    "Swift",
                    1000,
                    "Dart",
                    1000,
                   
                    
                    
                ]} 
                repeat={Infinity}
            />
        </div>
    );
}

export const TypingAnimation2 = () => {
    return (
        <div className="typing-text">
            <TypeAnimation
                sequence={[
                    "Software Developer",
                    500,
                    "Software Developer",
                    500,
                    "Software Developer !!!",
                    1000,
                    "Software Developer · between jobs",
                    3500,
                    'Software Developer · !!!',
                    500,
                    'Software Developer . Frontend',
                    1000,
                    'Software Developer . Backend',
                    1000,
                    
                ]}
                repeat={Infinity}
            />
        </div>
    );
}



