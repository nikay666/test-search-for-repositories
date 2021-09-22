import { Skeleton } from '@mui/material';
import React from 'react';

const FullWidthCardSkeleton = () => {
  return (
    <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800', borderRadius: 4, minHeight: 190 }} />
  )
}

export default FullWidthCardSkeleton;
