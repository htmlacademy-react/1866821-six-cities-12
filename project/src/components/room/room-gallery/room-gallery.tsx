type RoomGalleryProps = {
  listOfImagesSrc: string[];
}

export default function RoomGallery ({listOfImagesSrc}: RoomGalleryProps) {
  const limitedListOfImagesSrc = listOfImagesSrc.slice(0, 6);
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {limitedListOfImagesSrc.map((imageSrc) => (
          <div className="property__image-wrapper" key={imageSrc}>
            <img className="property__image" src={imageSrc} alt="Studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
