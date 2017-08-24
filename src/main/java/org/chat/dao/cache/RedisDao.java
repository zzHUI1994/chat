package org.chat.dao.cache;

import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class RedisDao {

    private final JedisPool jedisPool;

    public RedisDao(JedisPoolConfig jedisPoolConfig, String ip, Integer pool) {
        jedisPool = new JedisPool(jedisPoolConfig, ip, pool);
    }
}
