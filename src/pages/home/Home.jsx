// import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
// import List from '../../components/list/List';
import './home.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzUxNGE2OTJmYTI4MDRlNGJhYzUwZiIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjUxOTA4MDI4LCJleHAiOjE2NTIzNDAwMjh9.xB32egKZm7Y0RZWnM8FmEQI7CFOOCSPWGrZDxwFC-Mg',
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      {/* <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))} */}
    </div>
  );
};

export default Home;
