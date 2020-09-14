package org.stanislav.repository.file.downloader.model;

public class Module {
    private String name;
    private String version;
    private String[] submodules;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String[] getSubmodules() {
        return submodules;
    }

    public void setSubmodules(String[] submodules) {
        this.submodules = submodules;
    }
}
