import * as uuid from "uuid";
import * as path from "path";
import { unlink } from "fs/promises";

class FileService {
  saveFile(file) {
    const fileName = uuid.v4() + ".jpg";
    const filePath = this.getPath(fileName);
    file.mv(filePath);
    return fileName;
  }
  deleteFile(fileName) {
    const filePath = this.getPath(fileName);
    unlink(filePath);
  }
  getPath(fileName) {
    return path.resolve("static", fileName);
  }
}

export default new FileService();
