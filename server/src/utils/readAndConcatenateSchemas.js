import fs from 'fs';

export function readAndConcatenateSchemas(filePaths) { 
    return filePaths.map(filePath => fs.readFileSync(filePath, 'utf-8')).join('\n');
};