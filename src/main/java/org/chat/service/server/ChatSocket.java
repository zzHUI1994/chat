package org.chat.service.server;

import javax.servlet.http.HttpSession;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@ServerEndpoint(value = "/websocket/chat", configurator = GetHttpSessionConfigurator.class)
public class ChatSocket {

    //定义客户端集合
    private static final Map<String, Object> clientMap = new ConcurrentHashMap<String,Object>();

    private static final AtomicInteger connectionIds = new AtomicInteger(0);

    private Session session;

    @OnOpen
    public void connect(Session session, EndpointConfig config) {
        this.session = session;
        HttpSession httpSession= (HttpSession) config.getUserProperties().get(HttpSession.class.getName());
        String phone = (String) httpSession.getAttribute("phone");
        clientMap.put(phone, this);
    }

    @OnClose
    public void disconnect(EndpointConfig config) {
        HttpSession httpSession= (HttpSession) config.getUserProperties().get(HttpSession.class.getName());
        String phone = (String) httpSession.getAttribute("phone");
        clientMap.remove(phone);
    }

    @OnMessage
    public void exchange(String message) {

    }

    public void sendMsg(String msg) throws IOException {
        this.session.getBasicRemote().sendText(msg);
    }
}
