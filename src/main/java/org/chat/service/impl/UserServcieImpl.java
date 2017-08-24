package org.chat.service.impl;

import org.chat.dao.UserDao;
import org.chat.entity.User;
import org.chat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServcieImpl implements UserService{

    @Autowired
    private UserDao userDao;

    public void login(Long phone, String password) {
        User user = userDao.getUser(phone);
        if(user == null) {
            throw new RuntimeException("用户不存在");
        }

        if(!(user.getPassword().equals(password))) {
            throw new RuntimeException("用户名和密码不匹配");
        }
    }

    public void register(Long phone, String password) {
        User user = userDao.getUser(phone);
        if(user != null) {
            throw new RuntimeException("用户已存在");
        }

        int insertCount = userDao.addUser(phone, password);
        if(insertCount <= 0) {
            throw new RuntimeException("注册失败");
        }
    }

    public List<User> getUserList() {
        return userDao.queryUserList();
    }
}
