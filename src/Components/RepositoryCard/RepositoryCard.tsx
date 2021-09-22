import React from 'react'
import { CardContent, Typography } from '@material-ui/core';
import { CardTitle } from '../CardTitle';
import { LanguagesBlock } from '../LanguagesBlock';

import { ITotalCount } from '../../Interfaces/totalCount';
import { ILanguage, ILanguages } from '../../Interfaces/language';
import { useStyles } from './styles';
import { InformationPanel } from '../InformationPanel';

interface IRepositoryCardProps {
  nameWithOwner: string
  description: string
  languages: ILanguages
  primaryLanguage: ILanguage
  stargazers: ITotalCount
  issues: ITotalCount
  pullRequests: ITotalCount
};

const RepositoryCard = (props: IRepositoryCardProps) => {
  const classes = useStyles();

  return (
    <CardContent className={`${classes.root}  flex-wrap`}>
      <div className={classes.mainInfo} >
        <CardTitle to='/repositories/1'>{props.nameWithOwner}</CardTitle>
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
