/* eslint-disable @typescript-eslint/no-explicit-any */

const logger = (state: any) => (next: any) => (action: any) => {
    console.group(action.type)
    console.info('Previus State', state.getState())
    const result = next(action)
    console.log('next state', state.getState())
    console.groupEnd()
    return result

}

export default logger; 