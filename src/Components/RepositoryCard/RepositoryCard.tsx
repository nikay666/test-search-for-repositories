import React from 'react'
import { CardContent, Typography } from '@material-ui/core';
import { CardTitle } from '../CardTitle';
import { LanguagesBlock } from '../LanguagesBlock';
import { useStyles } from './styles';
import { InformationPanel } from '../InformationPanel';
import { IRepositoryCard } from '../../Interfaces/repository';



const RepositoryCard = (props: IRepositoryCard) => {
  const classes = useStyles();

  return (
    <CardContent className={`${classes.root}  flex-wrap`}>
      <div className={classes.mainInfo} >
        <CardTitle to={`/repositories/${props.id}`}>{props.nameWithOwner}</CardTitle>
        <InformationPanel
          stargazers={props.stargazers}
          primaryLanguage={props.primaryLanguage}
          issues={props.issues}
          pullRequests={props.pullRequests}
        />
        <Typography className={classes.descripition}  color="textPrimary">{props.description}</Typography>
      </div>
        <LanguagesBlock languages={props.languages} className={classes.languageBlock} />
    </CardContent>
  )
};

export default RepositoryCard;
