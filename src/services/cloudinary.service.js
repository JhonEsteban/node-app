const cloudinary = require('cloudinary').v2;

class CloudinaryService {
  constructor() {
    cloudinary.config(process.env.CLOUDINARY_URL);
  }

  async saveUserImage({ tempFilePath }) {
    return await cloudinary.uploader.upload(tempFilePath);
  }

  static async deleteUserImage(imageName) {
    await cloudinary.uploader.destroy(imageName);
  }
}

module.exports = CloudinaryService;
