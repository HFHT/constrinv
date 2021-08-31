import useStyles from "../styles/useStyles";

const MainBody = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.bodyRoot}>
            {props.children}
        </div>
    );
};

export default MainBody;