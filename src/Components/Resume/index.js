import './index.scss'
import Loader from 'react-loaders'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import DLResume from '../../assets/resume/Resume_DerekL.pdf'

const Resume = () => {
    return (
        <>
            <div className="container resume-page">
                <div className="text-zone">
                    <Document file={DLResume}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Resume
