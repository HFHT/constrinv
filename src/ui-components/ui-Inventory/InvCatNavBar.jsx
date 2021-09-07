import { InvCatPopupMenu } from './InvCatPopupMenu'
import { InvNavMenuBar } from './InvNavMenuBar'

export const InvCatNavBar = (props) => {

    return (
        <div>
            <InvNavMenuBar />
            <InvCatPopupMenu />
        </div>
    );
};