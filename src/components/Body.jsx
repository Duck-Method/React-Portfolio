import { Outlet } from 'react-router-dom';

function Body() {
    return (
        <div>
            <h2>This is the location of the displayed pages</h2>
            <Outlet />
        </div>
    )
}
export default Body;