import React from 'react';
import { Box, Typography } from '@mui/material';
import '../globals.css'

const InteractiveBoxes = () => {
  const items = [
    {
      title: 'Pick A Player',
      description: 'Decide which player/players your confident in, or not so confident in...',
      bgColor: 'bg-black-2',
      
    },
    {
      title: 'Set Your Own Line',
      description: 'Create ANY line you wish, and then select over,under,total,or team points. ',
      bgColor: 'bg-platinum-100',
    
    },
    {
      title: 'Wait for Your Unique Compounding Percentage',
      description: 'After creating your bet a unique compounding percetage will be calculated based on your inputted paramaters. This percentage is the amount your initial bet will compound over/under itself with every point scored/not scored. Check out our "Our Technology" page for more information.',
      bgColor: 'bg-platinum-100',
    },
    {
      title: 'Sit Back and Relax',
      description: 'Watch your bet compound live right in fron of your eyes as your player/team racks up those points!',
      bgColor: 'bg-black-2',
    },
  ];

  return (
    <div className="py-10 px-5">
      <Typography variant="h4" className="text-center mb-10">
        How to play
      </Typography>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Box
            key={index}
            className={`${item.bgColor} p-6 rounded-lg text-white hover:shadow-lg transition-shadow duration-300`}
          >
            <Typography variant="h6" className="mb-2">
              {item.title}
            </Typography>
            <Typography variant="body2">
              {item.description}
            </Typography>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default InteractiveBoxes;
