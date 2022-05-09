import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import './listItem.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const trailer = '/assets/trailer.mov';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8000/api/movies/find/' + item,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzUxNGE2OTJmYTI4MDRlNGJhYzUwZiIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjUxOTA4MDI4LCJleHAiOjE2NTIzNDAwMjh9.xB32egKZm7Y0RZWnM8FmEQI7CFOOCSPWGrZDxwFC-Mg',
            },
          }
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [item]);
  console.log('movies');
  console.log(movie);

  return (
    <Link to={{ pathname: '/watch', movie: movie }}>
      <div
        className="listItem"
        // style={{
        //   left: isHovered && index * 225 - 50,
        // }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && <img src={movie.img} alt="" />}
        {/* <video src={trailer} autoPlay={true} loop /> */}
        {isHovered && (
          <video
            // <img
            className="video"
            src={trailer}
            // src="/assets/terminator.jpg"
            // alt=""
            autoPlay={true}
            loop
            style={{
              left: isHovered && index * 225 - 50 + index * 10,
            }}
          />
        )}
        {isHovered && (
          <div
            className="itemInfo"
            style={{
              left: isHovered && index * 225 - 50 + index * 10,
              backgroundColor: 'black',
            }}
          >
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        )}
      </div>
    </Link>
  );
}
