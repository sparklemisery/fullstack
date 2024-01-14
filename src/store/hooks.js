import Context from './Context'
import { useContext } from 'react'


function useStore() {
    const [state, dispatch] = useContext(Context)
    console.log("this is state: ", state.todos)
    return [state, dispatch]
}
export default useStore