import React from 'react';

const words = [
  { text: 'Python', value: 60 },
  { text: 'SQL', value: 50 },
  { text: 'Power BI', value: 45 },
  { text: 'Excel', value: 40 },
  { text: 'Tableau', value: 35 },
  { text: 'DAX', value: 30 },
  { text: 'Pandas', value: 50 },
  { text: 'NumPy', value: 40 },
  { text: 'Matplotlib', value: 30 },
  { text: 'Seaborn', value: 30 },
  { text: 'Scikit-learn', value: 35 },
  { text: 'React', value: 45 },
  { text: 'Tailwind CSS', value: 40 },
  { text: 'Framer Motion', value: 35 },
  { text: 'GSAP', value: 30 },
  { text: 'Chart.js', value: 30 },
  { text: 'D3.js', value: 30 },
  { text: 'Lottie', value: 25 },
];

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
  fontSizes: [16, 50],
  enableTooltip: true,
};

const WordCloudComponent = () => (
  <div className="w-full h-[300px] md:h-[400px]">
    <WordCloud words={words} options={options} />
  </div>
);

export default WordCloudComponent;
