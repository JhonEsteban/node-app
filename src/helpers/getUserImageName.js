const getUserImageName = (imagePath) => {
  const imagePathArr = imagePath.split('/');
  const imageNames = imagePathArr[imagePathArr.length - 1];
  const [imageName] = imageNames.split('.');

  return imageName;
};

module.exports = getUserImageName;
