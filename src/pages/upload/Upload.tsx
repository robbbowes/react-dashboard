import './upload.scss'
import React from 'react'
import { parse } from 'papaparse'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import { Autotest } from '../../interfaces/Autotest'
import { AutomatedTestClasses } from '../../interfaces/AutotestClasses'

const Upload = () => {
    const [results, setResults] = React.useState<Autotest[]>([])

    const doStuff = (data: Autotest[]) => {
        const automatedTestClasses: AutomatedTestClasses = {} // object to store unique automatedTestClasses

        for (const item of data) {
            // check if the automatedTestClass has already been added to the object
            if (!automatedTestClasses[item.automatedTestClass]) {
                // if it hasn't been added, add it to the object with an empty array as the value
                automatedTestClasses[item.automatedTestClass] = {
                    testPackage: item.testPackage,
                    automatedTestClass: item.automatedTestClass,
                    testLinkId: item.testLinkId,
                    priority: item.priority,
                    generalWorkflow: item.generalWorkflow,
                    specificWorkflow: item.specificWorkflow,
                    partialCoverageOnly: item.partialCoverageOnly,
                    tests: [],
                }
            }
        }

        for (const item of data) {
            // add the object to the appropriate automatedTestClass array
            automatedTestClasses[item.automatedTestClass].tests.push({
                // you can include only the properties you want to include in the new object
                name: item.automatedTestName,
                comments: item.comments,
                setToIgnore: item.setToIgnore,
                testDuration: item.testDuration,
                testResult: item.testResult,
            })
        }

        // console.log(JSON.stringify(automatedTestClasses))
        console.log(automatedTestClasses)
    }

    return (
        <div className="upload">
            <Sidebar />
            <div className="upload-container">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1>Results Upload</h1>
                        <div
                            className={`upload-drop ${
                                results.length > 0 ? 'disabled' : ''
                            }`}
                            onDragOver={(e) => {
                                e.preventDefault()
                            }}
                            onDrop={(e) => {
                                e.preventDefault()

                                if (
                                    e.dataTransfer?.files &&
                                    results.length < 1
                                ) {
                                    Array.from(e.dataTransfer.files)
                                        .filter(
                                            (file) => file.type === 'text/csv'
                                        )
                                        .forEach(async (file) => {
                                            const text = await file.text()
                                            const result: any = parse(text, {
                                                header: true,
                                                delimiter: '\t',
                                            })
                                            doStuff(result.data)
                                            setResults((existing) => [
                                                ...existing,
                                                ...result.data,
                                            ])
                                        })
                                }
                            }}
                        >
                            <UploadFileIcon className="icon" />
                            <p>Drop CSV Results Here</p>
                        </div>
                    </div>
                    <div className="right">RIGHT</div>
                </div>
                <div className="bottom">BOTTOM</div>
            </div>
        </div>
    )
}

export default Upload
