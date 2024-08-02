'use client';

import React, { useRef } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';

const FileDemo = () => {
    const toast = useRef<Toast | null>(null);

    const onUpload = () => {
        toast.current?.show({
            severity: 'info',
            summary: 'Success',
            detail: 'File Uploaded',
            life: 3000
        });
    };

    return (
        <div className="grid">
            <Toast ref={toast}></Toast>
            <div className="col-12">
                <div className="card">
                    <h5>File receiving</h5>
                    <FileUpload name="receiving" url={`${process.env.NEXT_PUBLIC_BACKEND_API}/upload_payment`} onUpload={onUpload} multiple maxFileSize={10000000} />
                </div>
            </div>
        </div>
    );
};

export default FileDemo;
