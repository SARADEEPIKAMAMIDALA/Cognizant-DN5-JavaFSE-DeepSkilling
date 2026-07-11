package com.cognizant.springlearn.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.AuthenticationResponse;
import com.cognizant.springlearn.util.JwtUtil;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(

            @RequestHeader("Authorization") String header) {

        String encoded = header.substring(6);

        byte[] decodedBytes =
                Base64.getDecoder().decode(encoded);

        String decoded =
                new String(decodedBytes,
                        StandardCharsets.UTF_8);

        String username =
                decoded.split(":")[0];

        String token =
                JwtUtil.generateToken(username);

        return new AuthenticationResponse(token);

    }

}