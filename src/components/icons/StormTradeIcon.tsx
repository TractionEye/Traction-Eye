import React from 'react';

interface StormTradeIconProps {
    size?: number;
}

export const StormTradeIcon: React.FC<StormTradeIconProps> = ({ size = 26 }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 26 26" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect 
            width="26" 
            height="26" 
            rx="6" 
            fill="url(#pattern0_1049_1887)"
        />
        <defs>
            <pattern 
                id="pattern0_1049_1887" 
                patternContentUnits="objectBoundingBox" 
                width="1" 
                height="1"
            >
                <use 
                    xlinkHref="#image0_1049_1887" 
                    transform="scale(0.0015625)"
                />
            </pattern>
            <image 
                id="image0_1049_1887" 
                width="640" 
                height="640" 
                xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wAARCAKAAoADASIAAhEBAxEB/8QAHgABAAAGAwEAAAAAAAAAAAAAAAIDBgcICQEEBQr/xABXEAACAQMCAwQHBAUHBA4LAQAAAQIDBAUGEQchMQgSQVEJExQiMmFxFUKBkSNSYqGxFjNTcoKSwWNzk7IXJCU1Q1SDhJais9HT8Bk0N1ZkdKPCw+Hx0v/EAB0BAQABBQEBAQAAAAAAAAAAAAACAwQFBgcIAQn/xABIEQACAQIDBAYHBAYIBgMBAAAAAQIDBAURIQYxQVEHEmFxgaETIjKRscHRQlJi8BQVI3KS4RczQ1OCotLxFiQ0VLLCCERz4v/aAAwDAQACEQMRAD8A0NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA..."
            />
        </defs>
    </svg>
); 