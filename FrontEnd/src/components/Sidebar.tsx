import { NavLink } from "react-router-dom";
import { instance } from "../../authConfig";

const Sidebar = () => {
    const user = JSON.parse(sessionStorage.getItem("user") as string);
    const profileName = user ? user.name.split(" ")[0] : "User";
    const onLogout = async () => {
        await instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
    };

    return (
        <aside>
            <div className="profileGreet profileGreet2">
                <img src="/images/profile-image.png" alt="Profile-picture" />
                <span>Hi, {profileName}</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/marketplace" className={({ isActive }) => `${isActive ? "active" : ""} navButton`} >
                            <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.7375 4.9L12.425 3.15088C12.3738 3.08219 12.313 3.02269 12.25 2.96581V0.875C12.25 0.392 11.858 0 11.375 0H2.625C2.14156 0 1.75 0.392 1.75 0.875V2.96625C1.687 3.02269 1.62619 3.08175 1.575 3.15L0.262938 4.89956C0.0931875 5.12531 0 5.40487 0 5.6875V6.125C0 6.84863 0.588875 7.4375 1.3125 7.4375V13.125C1.3125 13.608 1.7045 14 2.1875 14H11.8125C12.2955 14 12.6875 13.608 12.6875 13.125V7.4375C13.4111 7.4375 14 6.84863 14 6.125V5.6875C14 5.40487 13.9068 5.12531 13.7375 4.9ZM11.375 0.875V2.625H2.625V0.875H11.375ZM4.45944 6.5625H2.62675L4.37675 3.5H5.33444L4.45944 6.5625ZM5.78988 3.5H6.78125V6.5625H4.91488L5.78988 3.5ZM7.21875 3.5H8.21012L9.08512 6.5625H7.21875V3.5ZM8.66469 3.5H9.62237L11.3724 6.5625H9.53969L8.66469 3.5ZM0.875 6.125V5.6875C0.875 5.59256 0.905625 5.50069 0.9625 5.425L2.275 3.675C2.35769 3.56475 2.48719 3.5 2.625 3.5H3.87275L2.12275 6.5625H1.3125C1.071 6.5625 0.875 6.36694 0.875 6.125ZM8.75 13.125H5.46875V8.75H8.75V13.125ZM11.8125 13.125H9.1875V8.75C9.1875 8.50806 8.99106 8.3125 8.75 8.3125H5.46875C5.22725 8.3125 5.03125 8.50806 5.03125 8.75V13.125H2.1875V7.4375H11.8125V13.125ZM13.125 6.125C13.125 6.36694 12.9294 6.5625 12.6875 6.5625H11.8764L10.1264 3.5H11.375C11.5124 3.5 11.6423 3.56475 11.7246 3.675L13.0371 5.425C13.0944 5.50069 13.125 5.59256 13.125 5.6875V6.125Z"
                                    fill="#ED1C25" />
                            </svg>
                            Marketplace
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/inventory" className={({ isActive }) => `${isActive ? "active" : ""} navButton`} >
                            <svg className="icon" width="11" height="14" viewBox="0 0 11 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.5 14.0179H1.625C1.14156 14.0179 0.75 13.6273 0.75 13.1447V2.60225C0.75 2.12013 1.14156 1.72944 1.625 1.72944H3.8125V2.639H2.0625C1.821 2.639 1.625 2.83413 1.625 3.07563V12.7081C1.625 12.95 1.821 13.1447 2.0625 13.1447H9.0625C9.30444 13.1447 9.5 12.95 9.5 12.7081V3.07563C9.5 2.83413 9.30444 2.639 9.0625 2.639H7.3125V1.72944H9.5C9.983 1.72944 10.375 2.12057 10.375 2.60225V13.1447C10.375 13.6273 9.983 14.0179 9.5 14.0179ZM3.8125 5.25832H8.625V5.69494H3.8125V5.25832ZM3.8125 6.56819H8.625V7.00482H3.8125V6.56819ZM3.8125 7.8785H8.625V8.31513H3.8125V7.8785ZM3.8125 9.18838H8.625V9.625H3.8125V9.18838ZM8.625 12.2439H3.8125V11.8081H8.625V12.2439ZM3.8125 10.4983H8.625V10.9349H3.8125V10.4983ZM2.5 5.24957H2.9375V5.68619H2.5V5.24957ZM2.5 6.55944H2.9375V6.99607H2.5V6.55944ZM2.5 7.86888H2.9375V8.3055H2.5V7.86888ZM2.5 9.17875H2.9375V9.61538H2.5V9.17875ZM2.9375 12.2356H2.5V11.7989H2.9375V12.2356ZM2.5 10.4891H2.9375V10.9257H2.5V10.4891ZM8.1875 3.10232C8.42944 3.10232 8.625 3.29788 8.625 3.53938C8.625 3.78044 8.625 4.38507 8.625 4.38507H2.5C2.5 4.38507 2.5 3.78044 2.5 3.53938C2.5 3.29788 2.69556 3.10232 2.9375 3.10232H4.25C4.25 3.10232 4.25525 2.4815 4.25525 1.77188C4.25525 1.03513 4.824 0.419128 5.5625 0.419128C6.301 0.419128 6.88944 1.06663 6.88944 1.77625C6.88944 2.54057 6.875 3.10232 6.875 3.10232H8.1875ZM5.5625 1.72944C5.32056 1.72944 5.125 1.92457 5.125 2.16563C5.125 2.40713 5.32056 2.60225 5.5625 2.60225C5.80444 2.60225 6 2.40713 6 2.16563C6 1.92457 5.80444 1.72944 5.5625 1.72944Z"
                                    fill="#ED1C25" />
                            </svg>
                            Inventory
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pending-orders" className={({ isActive }) => `${isActive ? "active" : ""} navButton`} >
                            <svg className="icon" width="11" height="13" viewBox="0 0 11 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.92578 7C7.37891 7 6.88672 7.13216 6.44922 7.39648C6.01172 7.66081 5.66081 8.01172 5.39648 8.44922C5.13216 8.88672 5 9.37891 5 9.92578C5 10.4544 5.13216 10.9421 5.39648 11.3887C5.66081 11.8353 6.01172 12.1862 6.44922 12.4414C6.88672 12.6966 7.37891 12.8242 7.92578 12.8242C8.45443 12.8242 8.94206 12.6966 9.38867 12.4414C9.83529 12.1862 10.1862 11.8353 10.4414 11.3887C10.6966 10.9421 10.8242 10.4544 10.8242 9.92578C10.8242 9.37891 10.6966 8.88672 10.4414 8.44922C10.1862 8.01172 9.83529 7.66081 9.38867 7.39648C8.94206 7.13216 8.45443 7 7.92578 7ZM8.88281 11.293L7.625 10.0352V8.17578H8.19922V9.78906L9.29297 10.8828L8.88281 11.293ZM8.5 1.75H6.64062C6.51302 1.40365 6.30339 1.12109 6.01172 0.902344C5.72005 0.683594 5.38281 0.574219 5 0.574219C4.61719 0.574219 4.27995 0.683594 3.98828 0.902344C3.69661 1.12109 3.48698 1.40365 3.35938 1.75H1.5C1.17188 1.75 0.89388 1.86393 0.666016 2.0918C0.438151 2.31966 0.324219 2.59766 0.324219 2.92578V11.6758C0.324219 11.9857 0.438151 12.2546 0.666016 12.4824C0.89388 12.7103 1.17188 12.8242 1.5 12.8242H5.05469C4.70833 12.4961 4.4349 12.1133 4.23437 11.6758H1.5V2.92578H2.67578V4.67578H7.32422V2.92578H8.5V5.87891C8.90104 5.93359 9.29297 6.05208 9.67578 6.23438V2.92578C9.67578 2.59766 9.56185 2.31966 9.33398 2.0918C9.10612 1.86393 8.82812 1.75 8.5 1.75ZM5 2.92578C4.83594 2.92578 4.69922 2.86654 4.58984 2.74805C4.48047 2.62956 4.42578 2.48828 4.42578 2.32422C4.42578 2.17839 4.48047 2.04622 4.58984 1.92773C4.69922 1.80924 4.83594 1.75 5 1.75C5.16406 1.75 5.30078 1.80924 5.41016 1.92773C5.51953 2.04622 5.57422 2.17839 5.57422 2.32422C5.57422 2.48828 5.51953 2.62956 5.41016 2.74805C5.30078 2.86654 5.16406 2.92578 5 2.92578Z"
                                    fill="#ED1C25" />
                            </svg>
                            Pending Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-orders" className={({ isActive }) => `${isActive ? "active" : ""} navButton`} >
                            <svg className="icon" width="12" height="14" viewBox="0 0 12 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.0833 2.91668H1.91667L2.79167 1.75001H9.20834L10.0833 2.91668ZM11.7132 3.14534L9.96667 0.816677C9.85234 0.664427 9.6785 0.583927 9.5 0.583344H2.5C2.30984 0.583344 2.14067 0.674343 2.03334 0.816677L0.286837 3.14534C0.261754 3.17801 0.239587 3.21359 0.222087 3.25151C0.18417 3.33143 0.166087 3.41659 0.16667 3.50001V11.6667C0.16667 12.1497 0.363253 12.5883 0.67942 12.9039C0.995587 13.2195 1.43367 13.4167 1.91667 13.4167H10.0833C10.5663 13.4167 11.005 13.2201 11.3206 12.9039C11.6362 12.5878 11.8333 12.1497 11.8333 11.6667V3.50001C11.8333 3.37226 11.7919 3.25384 11.7231 3.15876C11.7208 3.15584 11.719 3.15293 11.7167 3.15001L11.7132 3.14534ZM1.33334 4.08334H10.6667V11.6667C10.6667 11.8277 10.6019 11.9729 10.4958 12.0791C10.3896 12.1853 10.2443 12.25 10.0833 12.25H1.91667C1.75567 12.25 1.61042 12.1853 1.50425 12.0791C1.39809 11.9729 1.33334 11.8277 1.33334 11.6667V4.08334ZM7.75 5.83334C7.75 6.31693 7.55459 6.75326 7.23725 7.07059C6.91992 7.38793 6.48359 7.58334 6 7.58334C5.51642 7.58334 5.08009 7.38793 4.76275 7.07059C4.44542 6.75326 4.25 6.31693 4.25 5.83334C4.25 5.51134 3.98867 5.25001 3.66667 5.25001C3.34467 5.25001 3.08334 5.51134 3.08334 5.83334C3.08334 6.63834 3.41059 7.36868 3.93734 7.89601C4.46409 8.42334 5.195 8.75001 6 8.75001C6.805 8.75001 7.53534 8.42276 8.06267 7.89601C8.59 7.36926 8.91667 6.63834 8.91667 5.83334C8.91667 5.51134 8.65534 5.25001 8.33334 5.25001C8.01134 5.25001 7.75 5.51134 7.75 5.83334Z"
                                    fill="#ED1C25" />
                            </svg>
                            My Orders
                        </NavLink>
                    </li>
                    <li id="logout" >
                        <a className="navButton" onClick={onLogout}>
                            <svg className="icon" width="12" height="12" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.24999 10.6667H1.91666C1.75566 10.6667 1.61041 10.6019 1.50424 10.4958C1.39807 10.3896 1.33332 10.2443 1.33332 10.0833V1.91667C1.33332 1.75567 1.39807 1.61042 1.50424 1.50426C1.61041 1.39809 1.75566 1.33334 1.91666 1.33334H4.24999C4.57199 1.33334 4.83332 1.07201 4.83332 0.750005C4.83332 0.428005 4.57199 0.166672 4.24999 0.166672H1.91666C1.43366 0.166672 0.99499 0.363255 0.679407 0.679422C0.363823 0.995588 0.166656 1.43367 0.166656 1.91667V10.0833C0.166656 10.5663 0.36324 11.005 0.679407 11.3206C0.995573 11.6362 1.43366 11.8333 1.91666 11.8333H4.24999C4.57199 11.8333 4.83332 11.572 4.83332 11.25C4.83332 10.928 4.57199 10.6667 4.24999 10.6667ZM9.84182 5.41667H4.24999C3.92799 5.41667 3.66666 5.67801 3.66666 6.00001C3.66666 6.32201 3.92799 6.58334 4.24999 6.58334H9.84182L7.92091 8.50426C7.69282 8.73234 7.69282 9.10159 7.92091 9.32909C8.14899 9.55659 8.51824 9.55717 8.74574 9.32909L11.6624 6.41242C11.7161 6.35876 11.7592 6.29459 11.789 6.22342C11.8765 6.01226 11.8345 5.75967 11.6624 5.58759L8.74574 2.67092C8.51766 2.44284 8.14841 2.44284 7.92091 2.67092C7.69341 2.89901 7.69282 3.26826 7.92091 3.49576L9.84182 5.41667Z"
                                    fill="#ED1C25" />
                            </svg>
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </aside >
    )
}

export default Sidebar;