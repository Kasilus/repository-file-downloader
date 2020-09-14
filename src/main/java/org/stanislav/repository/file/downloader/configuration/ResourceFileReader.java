package org.stanislav.repository.file.downloader.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.stanislav.repository.file.downloader.model.Module;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@Component
public class ResourceFileReader {

    private final Logger LOGGER = LoggerFactory.getLogger(ResourceFileReader.class);

    public Module[] readModules() {
        Module[] modules = new Module[0];
        try {
            ClassPathResource resource = new ClassPathResource("modules.json");
            List<String> allLines = Files.readAllLines(Paths.get(resource.getFile().getPath()));
            String content = String.join("", allLines);
            ObjectMapper mapper = new ObjectMapper();
            modules = mapper.readValue(content, Module[].class);
            for (Module module : modules) {
                LOGGER.info("Module: [name = {}, version = {}, submodules = [{}]]", module.getName(), module.getVersion(), module.getSubmodules());
            }
        } catch (IOException e) {
            LOGGER.error("Can't retrieve any modules...");
        }
        return modules;
    }

}
