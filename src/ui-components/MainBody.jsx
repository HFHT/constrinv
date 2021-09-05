import { BodyRoot } from '../styles/appStyles';

const MainBody = (props) => {
    return (
        <BodyRoot>
            {props.children}
        </BodyRoot>
    );
};

export default MainBody;