import HomeAdmin from '../pages/Admin/home_admin/Home_Admin';
import HomeUser from '../pages/User/home_user/Home_User';
import TakeExam from '../pages/User/TakeExam/Take_Exam';
import Login from '../pages/Authentication/login/login';
import Result from '../pages/User/Result/Result';
import Signup from '../pages/Authentication/signup/signup';
import ChangePassword from '../pages/Authentication/change_password/changePassword';
import UserInfo from '../pages/User/user_info_detailed/UserInfo';
import HistoryDetail from '../pages/User/history_detail/HistoryDetail';
import HistoryList from '../pages/User/history_list/HistoryList';
import Forum from '../pages/User/Q&A/Forum';
import PostDetail from '../pages/User/Q&A/PostDetail';

const publicRoutes = [
    { path: '/', component: HomeUser},
    { path: '/homeadmin', component: HomeAdmin},
    { path: '/login', component: Login, layout: null},
    { path: '/signup', component: Signup, layout: null},
    { path: '/changepw', component: ChangePassword},
    { path: '/takeexam', component: TakeExam},
    { path: '/result', component: Result},
    { path: '/userinfo', component: UserInfo},
    { path: '/historydetail', component: HistoryDetail},
    { path: '/historylist', component: HistoryList},
    { path: '/forum', component: Forum},
    { path: '/postdetail', component: PostDetail}
]

const privateRoutes = []

export { publicRoutes, privateRoutes }