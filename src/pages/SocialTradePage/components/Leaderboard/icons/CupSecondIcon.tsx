import React from 'react';

interface CupIconProps {
    size?: number;
    color?: string;
}

const SIZE_MULTIPLIER = 14 / 15;

export const CupSecondIcon: React.FC<CupIconProps> = ({ size = 15, color = '#FFD235' }) => (
    <svg 
        width={size} 
        height={size * SIZE_MULTIPLIER} 
        viewBox="0 0 15 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M7.39472 1.49689L2.10842 3.44003L2.49656 4.49861L0.382039 5.27587L2.32275 10.5688L5.49453 9.4029L3.55382 4.10998L7.78286 2.55547L9.72357 7.84839L12.8954 6.6825L10.9546 1.38959L8.84012 2.16685L8.45198 1.10826L7.39472 1.49689ZM10.2855 2.8368L11.4499 6.01255L10.3927 6.40118L9.22826 3.22543L10.2855 2.8368ZM4.04913 8.73294L2.99187 9.12157L1.82744 5.94582L2.8847 5.55719L4.04913 8.73294ZM10.7808 7.45976L4.43727 9.79152L4.82541 10.8501L11.169 8.51834L10.7808 7.45976ZM7.46856 9.87854L8.52582 9.48991L8.91397 10.5485L10.4999 9.96555L10.888 11.0241L6.65896 12.5786L6.27082 11.5201L7.85671 10.9371L7.46856 9.87854Z" 
            fill={color}
        />
        <rect 
            width="5.59462" 
            height="6.107" 
            transform="matrix(0.937311 -0.348495 0.348164 0.937433 3.00049 3.94971)" 
            fill={color}
        />
        <path 
            d="M6.36246 3.97583L7.60557 7.39311L6.9866 7.61852L5.96261 4.8036L5.94259 4.81089L5.32917 5.61251L5.1228 5.04519L5.77352 4.1903L6.36246 3.97583Z" 
            fill="#1B223A"
        />
    </svg>
);
