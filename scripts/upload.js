import dotEnv from 'dotenv'
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import path from "path";
import fs from "fs";

dotEnv.config();

const REGION = "us-west-2"; //e.g. "us-east-1"
const s3Client = new S3Client({ region: REGION });
const fileStream = (file) => fs.createReadStream(file);
const buidDir = './build/';

const uploadFile = async (file) => {
	const uploadParams = {
	  Bucket: "mc-app-test",
	  Key: path.basename(file),
	  Body: fileStream(file),
	  ContentType: "text/html"
	};

	try {
    const data = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log("Success", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

const walkFiles = (directory, cb) => {
	return fs.readdirSync(directory).forEach((file) => {
		const filePath = path.join(directory, file);
		const isFile = fs.statSync(filePath).isFile();
		const isDir = fs.statSync(filePath).isDirectory()

		if (isFile) {
			return cb(filePath)
		} else if (isDir) {
			return walkFiles(filePath, cb)
		}

	})
}

walkFiles(buidDir, uploadFile)
