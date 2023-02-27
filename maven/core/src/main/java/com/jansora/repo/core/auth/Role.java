package com.jansora.repo.core.auth;

public enum Role {
    ADMIN("A", "管理员"),
    COMMON("C", "一般用户"),
    OAUTH("O", "第三方用户"),
    ;

    private String role;
    private String description;
    Role(String role, String description) {
        this.role = role;
        this.description = description;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
