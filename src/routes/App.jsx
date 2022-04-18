import React from 'react'; //imr
import { BrowserRouter, Routes as Switch, Route, useParams } from 'react-router-dom';
import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';
import ScrollToTop from '@hooks/fnctn/useScrolltoTop';
import Home from '@pages/firstpage';
import Userpage from '@pages/userpage';
import Newtopic from '@pages/forum/new-topic';
import Newpost from '@pages/forum/new-post';
import Forumain from '@pages/forum/f-main';
import Topicthread from '@pages/forum/threads';
import Usersmain from '@pages/users/u-main';
import Marketplacemain from '@pages/marketplace/m-main';
import Activitiesmain from '@pages/activities/a-main';
import Loginmain from '@pages/profile/login-main';
import Profilemain from '@pages/profile/profile-main';
import Register from '@pages/profile/register';
import ValidateUser from '@pages/profile/validateuser';
import ValidateResetPw from '@pages/profile/resetpw';
import ForgotPw from '@pages/profile/forgotpw';
import Erpg from '@pages/404';

const App = () => {
  const initialState = useInitialState();
 //console.log(initialState);
    return (
      <AppContext.Provider value={initialState}>
      <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/userpage" element={<Userpage/>} />
        <Route path="/forumNew" element={<Newtopic/>} />
        <Route path="/postNew/:replyto" element={<Newpost/>} />
        <Route path="/forum/:id" element={<Forumain/>} />
        <Route path="/threads/:id" element={<Topicthread/>} />
        <Route path="/threads/:id/:page" element={<Topicthread/>} />
        <Route path="/marketplace" element={<Marketplacemain/>} />
        <Route path="/activities" element={<Activitiesmain/>} />
        <Route path="/Users" element={<Usersmain/>} />1 
        <Route path="/profile" element={<Profilemain/>} />
        <Route path="/login" element={<Loginmain/>} />
        <Route path="/forgot" element={<ForgotPw/>} />
        <Route path="/reset_password/:selector/:token" element={<ValidateResetPw/>} />
        <Route path="/validate_user/:selector/:token" element={<ValidateUser/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Erpg/>} /> 
        
      </Switch>
      </BrowserRouter>
      </AppContext.Provider>
    )
}

export default App;