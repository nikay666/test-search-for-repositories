import React from 'react'
import { InformationBlock } from '../InformationBlock';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CircleIcon from '@mui/icons-material/Circle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStyles } from './styles';
import { ITotalCount } from '../../Interfaces/totalCount';
import { ILanguage } from '../../Interfaces/language';

interface IInformationPanelProps{
  stargazers: ITotalCount
  primaryLanguage: ILanguage
  issues: ITotalCount
  pullRequests: ITotalCount
};

const InformationPanel = ({stargazers, primaryLanguage, issues, pullRequests}: IInformationPanelProps) => {
  const classes = useStyles();

  return (
    <div className='flex-center' >
      <InformationBlock
        className={classes.information}
        icon={<StarBorderIcon  fontSize='inherit'/>}
        title={stargazers?.totalCount}
      />
      <InformationBlock
        className={classes.information}
        icon={<CircleIcon fontSize='inherit' htmlColor={primaryLanguage?.color} />}
        title={primaryLanguage?.name} 
      />
      <InformationBlock
        className={classes.information}
        icon={<HelpOutlineIcon fontSize='inherit'/>}
        title='Issues'
        count={issues?.totalCount}
      />
      <InformationBlock
        className={classes.information}
        icon={<CallMergeIcon fontSize='inherit'/>}
        title='Pull requests'
        count={pullRequests?.totalCount}
      />
    </div>
  )
};

export default InformationPanel;
