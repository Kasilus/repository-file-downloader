package org.stanislav.repository.file.downloader.controller;

import org.stanislav.repository.file.downloader.configuration.ResourceFileReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @Autowired
    ResourceFileReader resourceFileReader;

    @GetMapping({"/", "/hello"})
    public String hello(Model model) {
        model.addAttribute("name", "UserName");
        model.addAttribute("modules", resourceFileReader.readModules());
        return "hello";
    }

}
