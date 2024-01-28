import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../components/ImageFeed.css'

const ImageFeed = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://promptappazure.azurewebsites.net/api/prompts/?page=${page}`);
        const newImages = response.data.data;
        setImages((prevImages) => [...prevImages, ...newImages.slice(0,20)]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <InfiniteScroll className='card-container'
      dataLength={images.length}
      next={loadMoreImages}
      hasMore={true}
    >
      {images.map((image) => (
        <div key={image.title} className='card'>
          <img src={image.photo_url} alt={image.title} className='card_image' />
          <div className='card_info'>
          <h2>{image.title}</h2>
          <p>Tags: {image.tags.join(', ')}</p>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default ImageFeed;
