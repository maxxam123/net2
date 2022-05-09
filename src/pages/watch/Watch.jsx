import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

export default function Watch() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="/assets/trailer.mov"
      />
    </div>
  );
}
