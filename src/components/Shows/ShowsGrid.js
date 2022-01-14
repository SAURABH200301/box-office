/* eslint-disable react-hooks/rules-of-hooks */
import React,{useCallback} from 'react'
import ShowsCards from './ShowsCards'
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { FlexGrid } from '../styled'
import { useShows } from '../../misc/custom-hooks'

function ShowsGrid({ data }) {

  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = useCallback( () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
          }
        },[isStarred,show.id]);

        return (
          <ShowsCards
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
    );
};

export default ShowsGrid
