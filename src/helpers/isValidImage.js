const validImgExtensions = ['jpg', 'jpeg', 'png'];

const isValidImage = (extension) => {
  return (
    extension.includes(validImgExtensions[0]) ||
    extension.includes(validImgExtensions[1]) ||
    extension.includes(validImgExtensions[2])
  );
};

module.exports = { validImgExtensions, isValidImage };
