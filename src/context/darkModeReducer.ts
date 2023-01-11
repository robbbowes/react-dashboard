const DarkModeReducer = (state: { darkMode: boolean }, action: { type: any }) => {
    switch (action.type) {
        case "LIGHT":
            return {
                darkMode: false
            }
        case "DARK":
            return {
                darkMode: true
            }
        case "TOGGLE":
            return {
                darkMode: !state.darkMode
            }
        default:
            return state
    }
}

export default DarkModeReducer