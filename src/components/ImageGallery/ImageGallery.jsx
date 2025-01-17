// ImageGallery.jsx
import React, { Component } from 'react';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ul className={styles['imageGallery']}>
        {images.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={`Pixabay ${image.id}`} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

// ===================================
// import React from 'react';
// import styles from './ImageGallery.module.css';

// const ImageGallery = ({ images }) => {
//   return (
//     <ul className={styles['imageGallery']}>
//       {images.map(image => (
//         <li key={image.id}>
//           <img src={image.webformatURL} alt={`Pixabay ${image.id}`} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;
