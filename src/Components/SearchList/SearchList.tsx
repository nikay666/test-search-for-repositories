import React from 'react';
import { ApolloError } from '@apollo/client'
import { List, ListItem } from '@material-ui/core'
import { FullWidthCard } from '../FullWidthCard'
import { SearchCard } from '../SearchCard'
import { INode, IRepositoryPreview } from '../../Interfaces/repository'
import { useStyles } from './styles'


interface ISearchListProps{
  edges: INode<IRepositoryPreview>[]
  loading: boolean
  error: ApolloError | undefined
}

const SearchList = ({edges, loading, error}: ISearchListProps) => {
  const classes = useStyles();

  return (
    <List className={classes.list} >
    { 
      edges.map(({node}: INode<IRepositoryPreview>) => (
        <ListItem key={node.id} className={classes.listItem} >
        <FullWidthCard loading={loading} error={error}  >
          <SearchCard {...node} />
        </FullWidthCard>
        </ListItem>
      ))
    }
    </List>
  )
}

export default SearchList;
