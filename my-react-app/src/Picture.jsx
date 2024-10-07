function Picture() {
  const imgUrl = "./src/assets/profile-picture.jpg";
  const handleClick = (e) => {
    e.target.style.display = "none";

    console.log("Image Clicked");
  };
  return (
    <img
      src={imgUrl}
      height={300}
      width={250}
      onClick={(e) => handleClick(e)}
    ></img>
  );
}

export default Picture;
