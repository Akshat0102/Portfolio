import { React } from "react";
import './resume.styles.css';
import resume from '../../assets/pdf/Resume.pdf';

import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core';
//PLugins
// import { defaultLayoutPlugin, printPlugin } from '@react-pdf-viewer/default-layout';

const Resume = () => {

    return (
        <div className="pdf-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                <Viewer fileUrl={resume} />
            </Worker>
        </div>
    )
}

export default Resume;