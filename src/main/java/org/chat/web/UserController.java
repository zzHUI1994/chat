package org.chat.web;

import org.chat.dto.Json;
import org.chat.entity.User;
import org.chat.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public Json<Object> login(Long phone, String password, HttpSession session) {
        try {
            userService.login(phone, password);
            session.setMaxInactiveInterval(30*60);
            session.setAttribute("phone", phone);
            return new Json<Object>(true, "success");
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new Json<Object>(false, e.getMessage());
        }
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST, produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public Json<Object> register(Long phone, String password) {
        try {
            userService.register(phone, password);
            return new Json<Object>(true, "success");
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return new Json<Object>(false, e.getMessage());
        }
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Json<List<User>> list() {
        List<User> list = userService.getUserList();
        return new Json<List<User>>(true, list);
    }

}
