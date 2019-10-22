package com.escuelaing.arep.aws.Entities;

public class User {

    private String username;
    private String password;
    
    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String toString() {
        return username + " " + password;
    }

    public boolean equals(User u) {
        if (this.username.equals(u.getUsername()) && this.password.equals(u.getPassword())) {
            return true;
        }
        return false;
    }

}