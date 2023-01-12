import express from 'express';
import AWS from 'aws-sdk';

const awsS3Connect = () => {
  const app = express();
  app.post('/upload', async (req, res, next) => {
    AWS.config.update({
      accessKeyId: '',
      secretAccessKey: '',
      region: 'us-east-1',
    });

    const s3 = new AWS.S3();

    const fileContent = Buffer.from(req.file.data.data, 'binary');

    const params = {
      Bucket: '',
      Key: req.files.data.name,
      Body: fileContent,
    };

    s3.upload(params, (err, result) => {
      if (err) {
        throw err;
      }
      res.send({
        response_code: 200,
        response_text: 'Success',
        response_result: result,
      });
    });
  });
};

export default awsS3Connect;
