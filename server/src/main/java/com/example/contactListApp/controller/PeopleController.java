package com.example.contactListApp.controller;


import com.example.contactListApp.datamodel.People;
import com.example.contactListApp.repository.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PeopleController {

    @Autowired
    PeopleRepository peopleRepo;


    @RequestMapping(value = "/getPeopleList", method = RequestMethod.GET)
    public ResponseEntity<People> fetchPeopleList(final HttpServletRequest request,
                                                  final HttpServletResponse response) {

        final List<People> peopleList = peopleRepo.findAll();
        return new ResponseEntity(peopleList, HttpStatus.OK);
    }

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
