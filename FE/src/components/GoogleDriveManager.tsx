import React, { useState } from 'react';
import axios from 'axios';

interface FileResponse {
    fileId: number;
    contentLink: string;
    viewLink: string;
}


const GoogleDriveManager: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [file, setFile] = useState<FileResponse | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const uploadFile = async ()  => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:8080/api/drive/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setFile(response.data);
            console.log(response.data);
            alert('File uploaded successfully! File ID: ' + JSON.stringify(response.data, null, 2));
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const deleteFile = async () => {
        if (!file) return;

        try {
            await axios.delete(`http://localhost:8080/api/drive/delete/${file.fileId}`);
            alert('File deleted successfully!');
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };

    return (
        <div>
            <h1>Google Drive File Manager</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadFile}>Upload File</button>

            {file && (
                <div>
                    <p>File ID: {file.fileId}</p>
                    <p>View Link: {file.viewLink}</p>
                    <p>Content Link: {file.contentLink}</p>
                    {/* Only img */}
                    <img src={`https://drive.google.com/thumbnail?id=${file.fileId}`} alt="a"/>
                    {/* File chung pdf, img, video,... */}
                    <iframe title='a' src={`https://drive.google.com/file/d/${file.fileId}/preview`} width="640" height="480"></iframe>
                    <button onClick={deleteFile}>Delete File</button>
                </div>
            )}
        </div>
    );
};

export default GoogleDriveManager;
