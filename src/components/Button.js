import deptrai from './Button.module.scss'
import clsx from 'clsx'
function Button(props) {
    const classes = clsx({
        [deptrai.btn]: true
    })
    return (
        <>
            <button className={classes}>primary</button>
        </>
    )
}

export default Button