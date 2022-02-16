import * as fs from 'fs';
import * as path from 'path';

export function loadJSON(fileName: string): Promise<any> {
    return new Promise((resolve, reject) => {
        let filePath = path.join(__dirname, `${fileName}`);
        fs.readFile(filePath, 'utf8', (error, result) => {
            if (error) reject(error);
            resolve(JSON.parse(result));
        });
    });
}