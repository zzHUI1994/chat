package org.chat.service.impl;

import org.chat.entity.User;
import org.chat.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({
        "classpath:spring/applicationContext.xml"
})
public class UserServcieImplTest {

    @Autowired
    private UserService userService;

    @Test
    public void login() throws Exception {
        userService.login(123456L, "123456");
    }

    @Test
    public void register() throws Exception {
    }

    @Test
    public void getUserList() {
        List<User> list = userService.getUserList();
        System.out.println(list);
    }

}