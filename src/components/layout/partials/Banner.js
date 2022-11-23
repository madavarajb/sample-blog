import React, { useState } from 'react';

const Banner = ({
  ...props
}) => {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div {...props} className="banner">

        </div>
      )}
    </>
  );
}

export default Banner;