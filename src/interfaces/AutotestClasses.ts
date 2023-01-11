export interface AutomatedTestClasses {
    [key: string]: {
        testPackage: string
        automatedTestClass: string
        testLinkId: string
        priority: string
        generalWorkflow: string
        specificWorkflow: string
        partialCoverageOnly: string
        tests: {
            name: string
            comments: string
            setToIgnore: string
            testDuration: string
            testResult: string
        }[]
    }
}
