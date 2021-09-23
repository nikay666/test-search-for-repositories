import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { CardTitle } from '../CardTitle';
import { InformationBlock } from '../InformationBlock';
import CircleIcon from '@mui/icons-material/Circle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStyles } from './styles';
import { IRepositoryPreview } from '../../Interfaces/repository';
import { formatNumberByStringThousand } from '../../utils/formatting';

const SearchCard = (props: IRepositoryPreview) => {
  const classes = useStyles();

  return (
    <CardContent>
      <CardTitle to={`/repositories/${props.id}`}>{props.nameWithOwner}</CardTitle>
      <Typography className={classes.descripition}  color="textPrimary">{props.description}</Typography>

      <div className='flex-center' >
        <InformationBlock
          className={classes.information}
          icon={<StarBorderIcon  fontSize='inherit'/>}
          title={formatNumberByStringThousand(props.stargazers?.totalCount)}
      />
      <InformationBlock
          className={classes.information}
          icon={<CircleIcon fontSize='inherit' htmlColor={props.primaryLanguage?.color} />}
          title={props.primaryLanguage?.name}
      />
      </div>
    </CardContent>
  );
};

export default SearchCard;
