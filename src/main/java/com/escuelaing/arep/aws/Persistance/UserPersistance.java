package com.escuelaing.arep.aws.Persistance;

import java.util.List;

import com.escuelaing.arep.aws.Entities.User;

/**
 * UserPersistance
 */
public interface UserPersistance {

    List<User> findUser(String name, String passwd);
}