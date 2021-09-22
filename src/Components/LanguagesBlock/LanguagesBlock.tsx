import React from 'react'
import { List, ListItem, Typography } from '@material-ui/core'
import { InformationBlock } from '../InformationBlock'
import CircleIcon from '@mui/icons-material/Circle';
import { useStyles } from './styles';
import { ILanguages } from '../../Interfaces/language';
import { getPercent } from '../../utils/getPercent';

interface ILanguagesBlockProps {
  className: string,
  languages: ILanguages
}

const LanguagesBlock = ({languages, className}: ILanguagesBlockProps) => {
  const classes = useStyles();

  return (
    <div className={className} >
      <Typography variant='h6' component='p'>Languages</Typography>
      
      <List>
        {
          languages.edges.map(language => (
            <ListItem key={language.node.id} className={classes.listItem} >
            <InformationBlock
                className={classes.information}
                icon={<CircleIcon fontSize='inherit' htmlColor={language.node.color} />}
                title={language.node.name}
                percent={getPercent(languages.totalSize, language.size,)}
            />
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

export default LanguagesBlock
