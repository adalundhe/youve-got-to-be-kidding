import { useSiteSettings } from '~/utils/store'
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { useCallback } from 'react';


export const VisibilityModeButton = () => {

    const {
        mode,
        setMode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode,
            setMode: state.setVisibilityMode
        }), [])
    )

    return (
        <button
            type='button'
            onClick={() => {
                setMode(
                    mode === 'light' ? 'dark' : 'light'
                )
            }}
            className='h-fit text-[4vmin]'
        >{
            mode === 'light' ? <FaSun/> : <MdDarkMode/>
        }</button>
    )
}