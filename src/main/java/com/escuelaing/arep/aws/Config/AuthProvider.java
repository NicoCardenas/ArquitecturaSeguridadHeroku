package com.escuelaing.arep.aws.Config;

import java.util.ArrayList;

import com.escuelaing.arep.aws.Persistance.UserPersistance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;


@Service
public class AuthProvider implements AuthenticationProvider {

	@Autowired
    UserPersistance up;
    
	@Override
    public boolean supports(Class<? extends Object> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }

    @Override
    public Authentication authenticate(Authentication auth) throws AuthenticationException {
        String name = auth.getPrincipal().toString();

        String pass = auth.getCredentials().toString();

		if (!(up.findUser(name, pass).isEmpty())) {
			return new UsernamePasswordAuthenticationToken(auth.getName(), auth.getCredentials(), new ArrayList<>());
		}
        throw new BadCredentialsException("Username/Password does not match for " + auth.getPrincipal());
    }

}