import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
export function Counter() {
  const [like, setLike] = useState(1);
  const [dislike, setDislike] = useState(1);

  return (
    <>
      <IconButton aria-label="like-btn" onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}>
      <Badge badgeContent={like} color="primary">
      👍🏻
      </Badge>
</IconButton>
<IconButton aria-label="dislike-btn" onClick={() => {
          setDislike(dislike + 1);
        }} >
      <Badge badgeContent={dislike} color="primary">
      👎
      </Badge>
</IconButton>
     
   
      
     
    </>
  );
}
