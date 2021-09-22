import { Skeleton } from '@mui/material'
import React from 'react'

interface IListSkeletonProps {
  length?: number
}

const ListSkeleton = ({length = 10}: IListSkeletonProps) => {
  const array = new Array(length).fill(1)

  return (
    <>
      {array.map(i => (
        <Skeleton key={Math.random()} variant='rectangular' sx={{ bgcolor: 'grey.800', borderRadius: 4, height: 110, width: '100%', margin: '8px 0' }} />
      ))}
    </>
  )
}

export default ListSkeleton
