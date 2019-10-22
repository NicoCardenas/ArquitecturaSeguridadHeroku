package com.escuelaing.arep.aws.Persistance.PersistanceImpl;

import java.util.ArrayList;
import java.util.List;

import com.escuelaing.arep.aws.Entities.User;
import com.escuelaing.arep.aws.Persistance.UserPersistance;

import org.springframework.stereotype.Service;

@Service
public class Memory implements UserPersistance {

    private List<User> users = new ArrayList<User>();

    public Memory() {
        init();
    }
    

    public void init() {
        User admin = new User("admin", "admin");
        users.add(admin);
    }

    @Override
    public List<User> findUser(String name, String passwd) {
        List<User> temp = new ArrayList<>();
        for (User user : users) {
            if (user.equals(new User(name, passwd)))
                temp.add(user);
        }
        return temp;
    }

}