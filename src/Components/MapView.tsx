import React, { useState, useEffect, useRef } from 'react';

import { Grid,
         CircularProgress } from '@material-ui/core';

import { Map, Marker, Popup, TileLayer, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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

const L = require('leaflet');

const markerIcon = L.icon({
    iconUrl: require('../Assets/img/Marker.svg'),
    iconSize: [64,64],
    iconAnchor: [32, 64],
    popupAnchor: [-3, -76],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});

const MapView: React.FC = () => {

  const mapRef = useRef<any>();
  const featureGroupRef = useRef<any>();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostsState>({
    data: []
  });

  useEffect(() => {

    loading && (
      getPosts().then(posts=>{
        setPosts({
          data: posts
        });
        setLoading(false);
        setMapCenter();
      })
    );

  }, [loading]);

  const setMapCenter = () => {
    const map = mapRef.current.leafletElement;
    const group = featureGroupRef.current.leafletElement;
    map.fitBounds(group.getBounds());
  }

  return (
    loading ? (
      <Grid container justify={'center'}>
        <CircularProgress />
      </Grid>
    ) : (
      <Map style={{width: '100%',height: '75vh'}} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <FeatureGroup ref={featureGroupRef}>
          {posts.data.map((post, index)=>(
            post.lat && post.long && (
              <Marker key={index} icon={markerIcon} position={[post.lat, post.long]}>
                <Popup>
                  <h2>{post.title}</h2>
                  {post.image_url && (
                    <img src={post.image_url} width="100%" alt={post.title} />
                  )}
                  <p>{post.content}</p>
                </Popup>
              </Marker>
            )
          ))}
        </FeatureGroup>
      </Map>
    )
  );
}

export default MapView;
