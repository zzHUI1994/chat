package org.chat.service;

import org.chat.entity.User;

import java.util.List;

public interface UserService {
    /**
     * 用户登录
     * @param phone
     * @param password
     */
    void login(Long phone, String password);

    /**
     * 用户注册
     * @param phone
     * @param password
     */
    void register(Long phone, String password);

    /**
     * 获取用户列表
     * @return
     */
    List<User> getUserList();
}
