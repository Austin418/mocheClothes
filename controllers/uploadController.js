const fs = require("fs");

// const oldUploadProductImage = async (req, res) => {
//   if (!req.files) {
//     throw newError("no file provided");
//   }

//   const productImage = req.files.image;
//   if (!productImage.mimetype.startsWith("image")) {
//     throw new Error("choose an img only");
//   }
//   const maxSize = 1024 * 1024;
//   if (productImage.size > maxSize) {
//     throw new Error("the max file size is 1 mb");
//   }

//   const imagePath = path.join(
//     __dirname,
//     "../public/uploads",
//     productImage.name
//   );
//   // console.log(productImage);
//   await productImage.mv(imagePath);
//   res.status(200).json({ image: { src: `/uploads/${productImage.name}` } });
// };

const uploadProductImage = () => {
  cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "file-upload",
  });
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(200).json({ image: { src: response.secure_url } });
};
module.exports = {
  uploadProductImage,
};


