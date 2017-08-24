package org.chat.dao;

import org.apache.ibatis.annotations.Param;
import org.chat.entity.User;

import java.util.List;

public interface UserDao {
    /**
     * 获取用户
     * @param phone
     * @return
     */
    User getUser(Long phone);

    /**
     * 新增用户
     * @param phone
     * @return
     */
    int addUser(@Param("phone") Long phone, @Param("password") String password);

    List<User> queryUserList();
}
