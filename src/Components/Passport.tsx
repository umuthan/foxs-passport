import React, { useEffect, useState } from 'react';

import { Typography,
         Grid,
         CircularProgress } from '@material-ui/core';

import { Map, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { styles } from '../theme';

import { getPosts } from '../Api/Api';

interface Row {
  title: string;
  content: string;
  lat: number;
  long: number;
  image_url?: string;
}

interface PostsState {
  data: Row[];
}

const Passport: React.FC = () => {

  const classes = styles();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostsState>({
    data: []
  });
  const [page, setPage] = useState(-1);

  useEffect(() => {

    loading && (
      getPosts().then(posts=>{
        setPosts({
          data: posts
        });
        setLoading(false);
      })
    );

  }, [loading]);

  const L = require('leaflet');

  const markerIcon = L.icon({
     iconUrl: require('../Assets/img/Marker.svg'),
     iconSize: [64,64],
     iconAnchor: [32, 64],
     popupAnchor: null,
     shadowUrl: null,
     shadowSize: null,
     shadowAnchor: null
  });

  return (
    loading ? (
      <Grid container justify={'center'}>
        <CircularProgress />
      </Grid>
    ) : (
      <>
        { page === -1 ? (
          <Grid container justify={'center'} onClick={()=>setPage(page+1)}>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.passportCover} style={{backgroundImage: `url(${require('../Assets/img/World.png')})`}}>
              <div className={classes.passportCoverHeading}>
                <Typography variant="h4">Fox's</Typography>
                <Typography variant="h3">PASSPORT</Typography>
              </div>
            </Grid>
          </Grid>
        ) : page === posts.data.length ? (
          <Grid container justify='center'>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.passportCover} onClick={()=>setPage(-1)}>
              <Typography variant="body1">Little fox travels around the world.</Typography>
            </Grid>
          </Grid>
        ) : (
          posts.data.map((post, index) => (
            page === index && (
              <Grid key={index} container justify='center' className={classes.passport}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.passportPaper} onClick={()=>setPage(page-1)} style={{backgroundImage: `url(${post.image_url})`}}>

                </Grid>
                <Grid key={index} item xl={6} lg={6} md={6} sm={6} xs={12} className={classes.passportPaper} onClick={()=>setPage(page+1)}>
                  <div className={classes.passportInfo}>
                    <Typography variant="h3">{post.title}</Typography>
                    <Typography variant="body1">{post.content}</Typography>
                  </div>
                  { (post.lat && post.long) && (
                    <Map
                      className={classes.passportMap}
                      center={[post.lat, post.long]}
                      zoom={13}
                      doubleClickZoom={false}
                      closePopupOnClick={false}
                      dragging={false}
                      trackResize={false}
                      touchZoom={false}
                      scrollWheelZoom={false}
                      zoomControl={false}>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                      />
                      <Marker icon={markerIcon} position={[post.lat, post.long]}>

                      </Marker>
                    </Map>
                  )}
                </Grid>
              </Grid>
            )
          ))
        ) }
      </>
    )
  );
}

export default Passport;
