import React from 'react';
import Image from 'next/image';

import styles from './page.module.css';

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
          <div className={styles.userInfo}>
            <Image
              alt=''
              src={'https://randomuser.me/api/portraits/women/13.jpg'}
              width={40}
              height={40}
              className={styles.userAvatar}
            />
            <span className={styles.userName}>Gessy Catherine</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            }
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.bottomContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
        dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit
        eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor,
        optio voluptatibus magnam iure esse tempora beatae, a suscipit eos.
        Animi quibusdam cum omnis officiis
        <br />
        <br />
        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis
        voluptatum quo ea eveniet?
      </div>
    </div>
  );
}

export default BlogPost;
